import * as R from './rules.js';
import { hostRoom, joinRoom, normalizeCode } from './net.js';

// ---------- small helpers ----------
const $ = sel => document.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = n => Math.floor(n).toLocaleString();
const fmtRate = n => (Number.isInteger(n) ? n : n.toFixed(1)).toLocaleString();
const safe = (fn, fallback = null) => { try { return fn(); } catch { return fallback; } };
const local = {
  get: k => safe(() => localStorage.getItem(k)),
  set: (k, v) => safe(() => localStorage.setItem(k, v)),
};
const sess = {
  get: k => safe(() => sessionStorage.getItem(k)),
  set: (k, v) => safe(() => sessionStorage.setItem(k, v)),
};

// Per-tab player id so a page reload can reclaim the same seat.
const me = {
  pid: sess.get('fg-pid') || (() => { const id = 'p' + Math.random().toString(36).slice(2, 10); sess.set('fg-pid', id); return id; })(),
  name: local.get('fg-name') || '',
};

let role = null;      // 'host' | 'client'
let net = null;
let state = null;
let roomCode = null;
const connPid = new Map(); // host only: connection -> pid
const ui = {
  tab: 'economy', qty: 1, selected: null, hover: -1, lastTurnSeen: 0, lastRev: -1, muted: local.get('fg-muted') === '1',
  view: 'board', cityPid: null, cityBuilt: {}, cityWonders: {}, cityAttn: false, myBuildCount: -1,
};

// ---------- icons ----------
const ICON = {
  citizen: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="4" fill="currentColor"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor"/></svg>',
  gold: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="currentColor"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.6"/></svg>',
  culture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor"/></svg>',
  research: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6v2h-1v5.2l5.6 9.3A2 2 0 0 1 17.9 22H6.1a2 2 0 0 1-1.7-3.5L10 9.2V4H9z" fill="currentColor"/></svg>',
  vp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v3a6 6 0 0 1-4.5 5.8V15H16v3H8v-3h2.5v-3.2A6 6 0 0 1 6 6zM3 5h3v2.5A3 3 0 0 1 3 5zm18 0a3 3 0 0 1-3 2.5V5z" fill="currentColor"/><rect x="7" y="19" width="10" height="2.5" rx="1" fill="currentColor"/></svg>',
  farm: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7v10H3z" fill="currentColor"/><rect x="10" y="14" width="4" height="7" fill="#fff" fill-opacity=".6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  mute: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};
const RES = {
  citizen: { name: 'Citizens', cls: 'r-citizen' },
  gold: { name: 'Gold', cls: 'r-gold' },
  culture: { name: 'Culture', cls: 'r-culture' },
  research: { name: 'Research', cls: 'r-research' },
};
const costHTML = c => ['citizen', 'gold', 'culture'].filter(k => c[k]).map(k => `<span class="cost ${RES[k].cls}">${ICON[k]}${fmt(c[k])}</span>`).join('');

// ---------- sound ----------
const SOUNDS = {
  click: '../sounds/light-click.mp3', clicks: '../sounds/multiple-clicks.mp3', build: '../sounds/building-sound.mp3',
  error: '../sounds/error-sound2.mp3', wonder: '../sounds/3-taps.mp3', turn: '../sounds/low-tone.mp3', ping: '../sounds/high-tone.mp3',
};
const audioCache = {};
function play(name) {
  if (ui.muted) return;
  safe(() => {
    const a = audioCache[name] || (audioCache[name] = new Audio(SOUNDS[name]));
    a.currentTime = 0;
    a.volume = 0.5;
    a.play().catch(() => {});
  });
}

// ---------- toasts & modal ----------
function toast(text, kind = 'info') {
  const el = document.createElement('div');
  el.className = 'toast ' + kind;
  el.textContent = text;
  $('#toasts').appendChild(el);
  setTimeout(() => el.classList.add('out'), 3200);
  setTimeout(() => el.remove(), 3700);
}
function openModal(html) {
  $('#modalBody').innerHTML = html;
  $('#modal').hidden = false;
}
function closeModal() { $('#modal').hidden = true; }
$('#modal').addEventListener('click', e => {
  if (e.target.id === 'modal' || e.target.closest('[data-close]')) closeModal();
});

function helpHTML() {
  return `
    <ol class="help-list">
      <li><b>Grow.</b> Farms make citizens each turn. Spend citizens to hire <b>merchants</b> (gold), <b>artists</b> (culture) and <b>scholars</b> (research).</li>
      <li><b>Research.</b> Queue up technologies. Each turn your research points go into the first one, and leftover points roll into the next. Clicking a locked tech queues its prerequisites too. With nothing queued, points are saved for later.</li>
      <li><b>Build.</b> Researched buildings multiply one resource. Each line has three tiers, built in order.</li>
      <li><b>Wonders.</b> Spend culture on wonders. Each one gives victory points every turn. <b>${R.VP_TO_WIN} VP wins.</b></li>
      <li><b>Fight.</b> Buy units with citizens and gold and place them on the board. Peons can start on any edge square. After that, every unit goes next to one you held at the start of the turn. Units don't move. When the turn ends, each unit hits one enemy in its range.</li>
      <li><b>Conquer.</b> Hold all four corners (A1, A8, H1, H8) at the end of a turn for a military victory.</li>
      <li><b>Simultaneous turns.</b> Everyone plans at the same time. The turn ends when every player has pressed <b>End turn</b>.</li>
    </ol>`;
}
document.querySelectorAll('.help-body').forEach(el => { el.innerHTML = helpHTML(); });
$('#helpBtn').addEventListener('click', () => openModal(`<h2>How to play</h2>${helpHTML()}<div class="modal-actions"><button class="btn primary" data-close>Got it</button></div>`));

// ---------- screens ----------
function showScreen(id) {
  for (const s of ['home', 'lobby', 'game']) $('#' + s).hidden = s !== id;
}

// ---------- home ----------
const params = new URLSearchParams(location.search);
$('#nameInput').value = me.name;
if (params.get('room')) {
  $('#codeInput').value = normalizeCode(params.get('room'));
  $('#homeStatus').textContent = 'You were invited. Enter your name and press Join.';
}
function readName() {
  const n = $('#nameInput').value.trim().slice(0, 20);
  me.name = n || 'Player';
  local.set('fg-name', n);
  return me.name;
}
function setHomeBusy(text) {
  $('#homeStatus').textContent = text || '';
  $('#hostBtn').disabled = !!text;
  document.querySelector('#joinForm button').disabled = !!text;
}
$('#hostBtn').addEventListener('click', () => { readName(); startHosting(); });
$('#joinForm').addEventListener('submit', e => {
  e.preventDefault();
  readName();
  const code = normalizeCode($('#codeInput').value);
  if (code.length !== 5) { $('#homeStatus').textContent = 'Room codes are 5 letters or numbers.'; play('error'); return; }
  startJoining(code);
});
$('#codeInput').addEventListener('input', e => { e.target.value = normalizeCode(e.target.value); });

function goHome(message) {
  if (net) safe(() => net.close());
  net = null; role = null; state = null; roomCode = null; connPid.clear();
  sess.set('fg-room', '');
  ui.lastTurnSeen = 0; ui.selected = null;
  setHomeBusy('');
  $('#homeStatus').textContent = message || '';
  closeModal();
  showScreen('home');
}

// ---------- hosting ----------
function startHosting() {
  if (typeof Peer === 'undefined') { $('#homeStatus').textContent = 'Could not load the networking library. Check your connection and reload.'; return; }
  setHomeBusy('Creating a room…');
  role = 'host';
  state = R.newGame();
  R.addPlayer(state, me.pid, me.name);
  net = hostRoom({
    onOpen(code) {
      roomCode = code;
      setHomeBusy('');
      onState(state);
    },
    onHello(conn, msg) {
      const pid = String(msg.pid || '').slice(0, 20);
      const name = String(msg.name || '').trim().slice(0, 20) || 'Player';
      if (!pid) return;
      const returning = !!state.players[pid];
      const err = R.addPlayer(state, pid, name);
      if (err) { net.send(conn, { t: 'reject', msg: err }); setTimeout(() => safe(() => conn.close()), 400); return; }
      connPid.set(conn, pid);
      net.send(conn, { t: 'welcome', code: roomCode });
      if (state.phase !== 'lobby') state.log.push({ turn: state.turn, text: `${name} ${returning ? 'reconnected' : 'joined'}.`, pid });
      toast(`${name} ${returning ? 'reconnected' : 'joined'}`);
      play('ping');
      commit();
    },
    onMessage(conn, msg) {
      const pid = connPid.get(conn);
      if (pid && msg.t === 'action' && msg.action) handleAction(pid, msg.action, conn);
    },
    onClose(conn) {
      const pid = connPid.get(conn);
      connPid.delete(conn);
      if (!pid || !state.players[pid]) return;
      if ([...connPid.values()].includes(pid)) return; // they already reconnected on a new connection
      const name = state.players[pid].name;
      if (state.phase === 'lobby') R.removePlayer(state, pid);
      else {
        state.players[pid].connected = false;
        state.log.push({ turn: state.turn, text: `${name} disconnected. The game continues without waiting for them.`, pid });
      }
      toast(`${name} left`);
      maybeResolve();
      commit();
    },
    onError(text) {
      if (!roomCode) goHome(text);
      else toast(text, 'error');
    },
  });
}

const HOST_ONLY = new Set(['start', 'addBot', 'removeBot', 'kick', 'restart']);
function handleAction(pid, action, conn = null) {
  let err = null;
  if (HOST_ONLY.has(action.type)) {
    if (pid !== me.pid) err = 'Only the host can do that.';
    else err = hostAction(action);
  } else {
    err = R.applyAction(state, pid, action);
  }
  if (err) {
    if (conn) net.send(conn, { t: 'error', msg: err });
    else { toast(err, 'error'); play('error'); }
    return;
  }
  maybeResolve();
  commit();
}

function hostAction(a) {
  switch (a.type) {
    case 'start':
      if (state.phase !== 'lobby') return 'The game has already started.';
      R.startGame(state);
      return null;
    case 'addBot': {
      if (state.phase !== 'lobby') return 'You can only add AI opponents in the lobby.';
      const id = 'bot' + Math.random().toString(36).slice(2, 7);
      const err = R.addPlayer(state, id, '', true);
      if (!err) state.players[id].name = R.COLORS[state.players[id].color].name + ' AI';
      return err;
    }
    case 'removeBot':
    case 'kick': {
      if (state.phase !== 'lobby') return 'You can only remove players in the lobby.';
      const p = state.players[a.pid];
      if (!p || a.pid === me.pid) return 'Cannot remove that player.';
      if (!p.isBot) for (const [c, id] of connPid) if (id === a.pid) { net.send(c, { t: 'reject', msg: 'The host removed you from the lobby.' }); setTimeout(() => safe(() => c.close()), 300); }
      R.removePlayer(state, a.pid);
      return null;
    }
    case 'restart':
      state.phase = 'lobby';
      state.winners = null;
      for (const pid of [...state.order]) if (!state.players[pid].isBot && !state.players[pid].connected) R.removePlayer(state, pid);
      return null;
  }
  return 'Unknown action.';
}

function maybeResolve() {
  if (state.phase === 'playing' && R.allReady(state)) R.resolveTurn(state);
}

function commit() {
  state.rev++;
  net.broadcast({ t: 'state', state });
  onState(state);
}

// ---------- joining ----------
function startJoining(code) {
  if (typeof Peer === 'undefined') { $('#homeStatus').textContent = 'Could not load the networking library. Check your connection and reload.'; return; }
  setHomeBusy('Connecting to room ' + code + '…');
  role = 'client';
  roomCode = code;
  sess.set('fg-room', code);
  let connected = false;
  if (!location.search.includes(code)) safe(() => history.replaceState(null, '', `?room=${code}`));
  net = joinRoom(code, { pid: me.pid, name: me.name }, {
    onConnected() { connected = true; },
    onMessage(msg) {
      if (!msg) return;
      if (msg.t === 'state') onState(msg.state);
      else if (msg.t === 'error') { toast(msg.msg, 'error'); play('error'); }
      else if (msg.t === 'reject') goHome(msg.msg);
    },
    onClose() {
      if (!state) { goHome(connected ? 'The host closed the connection.' : "Couldn't connect to that room."); return; }
      openModal(`<h2>Disconnected</h2><p>You lost the connection to the host. If they're still playing, you can rejoin and get your seat back.</p>
        <div class="modal-actions"><button class="btn" id="mHome">Main menu</button><button class="btn primary" id="mRejoin">Rejoin</button></div>`);
      $('#mHome').onclick = () => goHome();
      $('#mRejoin').onclick = () => { const c = roomCode; goHome(); startJoining(c); };
    },
    onError(text) {
      if (!state) goHome(text);
      else toast(text, 'error');
    },
  });
}

function dispatch(action) {
  if (!state) return;
  if (role === 'host') handleAction(me.pid, action);
  else net.send({ t: 'action', action });
}

// ---------- state updates ----------
function onState(s) {
  if (s.rev !== undefined && s.rev === ui.lastRev && role !== 'host') return;
  ui.lastRev = s.rev;
  const prevTurn = ui.lastTurnSeen;
  const prevPhase = state && state.phase;
  state = s;
  if (state.phase === 'lobby') {
    Object.assign(ui, { lastTurnSeen: 0, myBuildCount: -1, cityBuilt: {}, cityWonders: {}, cityAttn: false });
    renderLobby(); showScreen('lobby'); return;
  }

  showScreen('game');
  const turnAdvanced = prevTurn && (state.turn !== prevTurn || (state.phase === 'over' && prevPhase === 'playing'));
  ui.lastTurnSeen = state.turn;
  if (ui.selected && !R.unitUnlocked(myEco(), ui.selected)) ui.selected = null;
  renderGame();
  if (turnAdvanced) afterResolve();
  if (state.phase === 'over' && prevPhase !== 'over') showWinner();
}

const myPlayer = () => state && state.players[me.pid];
const myEco = () => myPlayer()?.eco;
const colorOf = pid => state.players[pid] ? R.COLORS[state.players[pid].color].hex : '#888';
const nameOf = pid => state.players[pid]?.name ?? 'Unknown';

function spriteSrc(color, unitId) {
  const c = color === 'yellow' ? 'red' : color; // no yellow art in the original; tinted with CSS
  return `../images/${c}-${R.UNIT[unitId].sprite}.png`;
}
function spriteImg(color, unitId, cls = 'sprite') {
  return `<img class="${cls}${color === 'yellow' ? ' tint-yellow' : ''}" src="${spriteSrc(color, unitId)}" alt="" draggable="false">`;
}

// ---------- lobby ----------
function renderLobby() {
  $('#lobbyCode').textContent = roomCode || '·····';
  const link = roomCode ? `${location.origin}${location.pathname}?room=${roomCode}` : '';
  $('#inviteLink').value = link;
  const isHost = role === 'host';

  $('#lobbyPlayers').innerHTML = state.order.map(pid => {
    const p = state.players[pid];
    const tags = [pid === me.pid ? 'you' : '', state.order[0] === pid ? 'host' : '', p.isBot ? 'AI' : ''].filter(Boolean);
    const removable = isHost && pid !== me.pid;
    return `<li style="--pc:${R.COLORS[p.color].hex}">
      <span class="swatch"></span><span class="pname">${esc(p.name)}</span>
      ${tags.map(t => `<span class="tag">${t}</span>`).join('')}
      ${removable ? `<button class="btn ghost small" data-kick="${pid}">Remove</button>` : ''}
    </li>`;
  }).join('') + Array.from({ length: R.MAX_PLAYERS - state.order.length }, () => '<li class="empty"><span class="swatch"></span>Open seat</li>').join('');

  const mine = myPlayer();
  const taken = new Set(state.order.filter(p => p !== me.pid).map(p => state.players[p].color));
  $('#colorPick').innerHTML = mine ? `<span class="muted">Your colour</span>` + R.COLOR_ORDER.map(c =>
    `<button class="swatch-btn${mine.color === c ? ' on' : ''}" style="--pc:${R.COLORS[c].hex}" data-color="${c}" ${taken.has(c) ? 'disabled' : ''} title="${R.COLORS[c].name}" aria-label="${R.COLORS[c].name}"></button>`).join('') : '';

  if (isHost) {
    const humans = state.order.filter(p => !state.players[p].isBot).length;
    $('#lobbyActions').innerHTML = `
      <button class="btn" id="addBot" ${state.order.length >= R.MAX_PLAYERS ? 'disabled' : ''} title="The original game's AI: drops a free warrior on the first empty square every turn">Add AI opponent</button>
      <button class="btn primary big" id="startGame">Start game</button>
      <p class="fine">${humans < 2 ? 'Share the invite link, or add an AI opponent to practise.' : 'Everyone is in? Start whenever you are ready.'}</p>`;
    $('#addBot').onclick = () => { play('click'); dispatch({ type: 'addBot' }); };
    $('#startGame').onclick = () => { play('build'); dispatch({ type: 'start' }); };
  } else {
    $('#lobbyActions').innerHTML = `<p class="waiting"><span class="dot-pulse"></span>Waiting for the host to start the game…</p>`;
  }
}
$('#copyInvite').addEventListener('click', () => copyInvite());
$('#leaveLobby').addEventListener('click', () => goHome());
$('#lobbyPlayers').addEventListener('click', e => {
  const b = e.target.closest('[data-kick]');
  if (b) dispatch({ type: state.players[b.dataset.kick]?.isBot ? 'removeBot' : 'kick', pid: b.dataset.kick });
});
$('#colorPick').addEventListener('click', e => {
  const b = e.target.closest('[data-color]');
  if (b && !b.disabled) { play('click'); dispatch({ type: 'setColor', color: b.dataset.color }); }
});
function copyInvite() {
  const link = `${location.origin}${location.pathname}?room=${roomCode}`;
  const done = () => { toast('Invite link copied'); play('click'); };
  if (navigator.clipboard) navigator.clipboard.writeText(link).then(done, () => toast(link));
  else toast(link);
}

// ---------- game rendering ----------
function renderGame() {
  const p = myPlayer();
  $('#turnNum').textContent = state.turn;
  $('#roomChip').innerHTML = `Room <b>${esc(roomCode)}</b>`;
  $('#muteBtn').innerHTML = ui.muted ? ICON.mute : ICON.sound;
  renderReady();
  if (p && p.eco) {
    renderResources();
    renderLeft();
    renderArmy();
  }
  renderBoard();
  renderPlayers();
  renderBattle();
  renderLog();
  if (p && p.eco) {
    // Flag the City tab when something new goes up while you're on the battlefield.
    const count = Object.values(p.eco.buildings).reduce((a, b) => a + b, 0) + Object.keys(p.eco.wonders).length;
    if (ui.myBuildCount >= 0 && count > ui.myBuildCount && ui.view !== 'city') ui.cityAttn = true;
    ui.myBuildCount = count;
  }
  setView(ui.view);
}

function renderReady() {
  const btn = $('#readyBtn');
  const p = myPlayer();
  if (state.phase === 'over') { btn.textContent = 'Game over'; btn.disabled = true; btn.className = 'ready-btn'; return; }
  btn.disabled = false;
  const waiting = state.order.map(id => state.players[id]).filter(x => !x.isBot && x.connected && !x.ready);
  if (p.ready) {
    btn.className = 'ready-btn is-ready';
    btn.innerHTML = `<span class="dot-pulse"></span>Waiting for ${waiting.length === 1 ? esc(waiting[0].name) : waiting.length + ' players'}<small>Click to keep planning</small>`;
  } else {
    btn.className = 'ready-btn';
    const humans = state.order.map(id => state.players[id]).filter(x => !x.isBot && x.connected);
    const others = waiting.filter(x => x.pid !== me.pid).length;
    btn.innerHTML = `End turn<small>${humans.length <= 1 ? 'Resolve this turn' : others ? `${humans.length - waiting.length}/${humans.length} players ready` : 'Everyone else is ready'}</small>`;
  }
}

function renderResources() {
  const eco = myEco();
  const inc = R.income(eco);
  const pills = ['citizen', 'gold', 'culture', 'research'].map(k => `
    <div class="res ${RES[k].cls}" title="${RES[k].name}${k === 'research' ? ': goes into your selected tech when the turn ends' : ''}">
      ${ICON[k]}<span class="val">${fmt(eco[k])}</span><span class="inc">+${fmtRate(inc[k])}</span>
      <span class="res-name">${RES[k].name}</span>
    </div>`).join('');
  const pct = Math.min(100, eco.vp / R.VP_TO_WIN * 100);
  $('#resources').innerHTML = pills + `
    <div class="res r-vp" title="Victory points. ${R.VP_TO_WIN} wins. Wonders add VP every turn.">
      ${ICON.vp}<span class="val">${fmt(eco.vp)}<small>/${R.VP_TO_WIN}</small></span><span class="inc">+${eco.vppt}</span>
      <span class="vpbar"><i style="width:${pct}%"></i></span>
    </div>`;
}

// ----- left panel -----
function renderLeft() {
  const eco = myEco();
  document.querySelectorAll('.tabs [data-tab]').forEach(b => {
    b.classList.toggle('on', b.dataset.tab === ui.tab);
    b.setAttribute('aria-selected', b.dataset.tab === ui.tab);
  });
  // attention dots
  const researchIdle = !eco.queue.length && R.TECHS.some(t => R.techAvailable(eco, t.id));
  const wonderReady = R.WONDERS.some(w => eco.techDone[w.id] && !eco.wonders[w.id] && eco.culture >= w.culture);
  document.querySelector('[data-tab="research"]').classList.toggle('attn', researchIdle);
  document.querySelector('[data-tab="wonders"]').classList.toggle('attn', wonderReady);

  const body = $('#leftBody');
  const scroll = body.scrollTop;
  body.innerHTML = ui.tab === 'economy' ? economyHTML(eco) : ui.tab === 'research' ? researchHTML(eco) : wondersHTML(eco);
  body.scrollTop = scroll;
}
document.querySelector('.tabs').addEventListener('click', e => {
  const b = e.target.closest('[data-tab]');
  if (!b) return;
  ui.tab = b.dataset.tab;
  play('click');
  renderLeft();
});

function economyHTML(eco) {
  const q = ui.qty;
  const seg = [1, 10, 100].map(n => `<button data-qty="${n}" class="${q === n ? 'on' : ''}">×${n}</button>`).join('');
  const workers = [
    { key: 'farm', name: 'Farms', icon: 'farm', cls: 'r-citizen', desc: `+${fmtRate(eco.mult.citizen)} citizens per turn each`, cost: { citizen: eco.farmCost }, act: { type: 'buyFarm' }, verb: 'Build', note: 'Each farm costs 3 more than the last' },
    { key: 'merchant', name: 'Merchants', icon: 'gold', cls: 'r-gold', desc: `+${fmtRate(eco.mult.gold)} gold per turn each`, cost: { citizen: q }, act: { type: 'hire', role: 'merchant' }, verb: 'Hire' },
    { key: 'artist', name: 'Artists', icon: 'culture', cls: 'r-culture', desc: `+${fmtRate(eco.mult.culture)} culture per turn each, +1 right away`, cost: { citizen: q }, act: { type: 'hire', role: 'artist' }, verb: 'Hire' },
    { key: 'scholar', name: 'Scholars', icon: 'research', cls: 'r-research', desc: `+${fmtRate(eco.mult.research)} research per turn each, +1 right away`, cost: { citizen: q }, act: { type: 'hire', role: 'scholar' }, verb: 'Hire' },
  ];
  const rows = workers.map(w => {
    const affordable = eco.citizen >= w.cost.citizen;
    return `<div class="row">
      <div class="row-icon ${w.cls}">${ICON[w.icon]}</div>
      <div class="row-main"><div class="row-title">${w.name} <b>${fmt(eco[w.key])}</b></div><div class="row-desc">${w.desc}</div></div>
      <button class="btn act" data-act='${JSON.stringify({ ...w.act, n: q })}' ${affordable ? '' : 'disabled'} title="${w.note || ''}">
        ${w.verb}${q > 1 ? ' ×' + q : ''}<span class="costs">${costHTML(w.cost)}</span></button>
    </div>`;
  }).join('');

  const tracks = R.TRACKS.map(t => {
    const tier = eco.buildings[t.id];
    const next = t.tiers[tier];
    const tiles = t.tiers.map((b, k) => `<div class="btile ${k < tier ? 'built' : k === tier ? 'next' : ''}" title="${b.name}: ×${b.mult} ${RES[t.id].name.toLowerCase()}">
        <img src="../images/${b.img}.png" alt=""><span>${b.name}</span><em>×${b.mult}</em></div>`).join('');
    let action;
    if (!next) action = `<span class="done-note">${ICON.check} All built</span>`;
    else if (!eco.techDone[next.id]) action = `<button class="btn act" disabled>${ICON.lock} Research ${next.name}</button>`;
    else {
      const cost = R.TIER_COST[tier];
      const ok = eco.citizen >= cost.citizen && eco.gold >= cost.gold;
      action = `<button class="btn act ${ok ? 'glow' : ''}" data-act='${JSON.stringify({ type: 'build', track: t.id })}' ${ok ? '' : 'disabled'}>Build ${next.name}<span class="costs">${costHTML(cost)}</span></button>`;
    }
    return `<div class="track">
      <div class="track-head"><span class="${RES[t.id].cls}">${ICON[t.id]}</span><b>${RES[t.id].name}</b><span class="mult">×${fmtRate(eco.mult[t.id])}</span></div>
      <div class="tiles">${tiles}</div>
      <div class="track-act">${action}</div>
    </div>`;
  }).join('');

  return `<div class="section-head"><h3>Workers</h3><div class="seg" role="group" aria-label="Buy quantity">${seg}</div></div>
    <div class="rows">${rows}</div>
    <div class="section-head"><h3>Buildings</h3></div>
    <p class="muted small">Each building multiplies one resource. Research it first, then build the tiers in order.</p>
    <div class="tracks">${tracks}</div>`;
}

function researchHTML(eco) {
  const kindLabel = { unit: 'Unit', building: 'Building', wonder: 'Wonder' };
  const act = o => `data-act='${JSON.stringify(o)}'`;
  const eta = R.queueEta(eco);
  const turns = n => n === undefined ? 'needs scholars' : n === 1 ? 'this turn' : `in ${n} turns`;
  const incoming = eco.research + eco.bank;
  let current;
  if (eco.queue.length) {
    const t = R.TECH[eco.queue[0]];
    const prog = eco.techProg[t.id] || 0;
    const rest = eco.queue.slice(1).map((id, k) => {
      const q = R.TECH[id];
      return `<li><span class="q-num">${k + 2}</span><span class="q-name">${q.name}</span><span class="q-eta">${turns(eta[id])}</span>
        ${R.techAvailable(eco, id) ? `<button class="q-btn" ${act({ type: 'researchFirst', tech: id })} title="Research this next">Do next</button>` : ''}
        <button class="q-btn x" ${act({ type: 'unqueue', tech: id })} title="Remove from queue" aria-label="Remove ${q.name}">×</button></li>`;
    }).join('');
    current = `<div class="current">
      <div class="current-head"><div class="eyebrow">Researching</div><button class="q-btn x" ${act({ type: 'unqueue', tech: t.id })} title="Remove from queue" aria-label="Remove ${t.name}">×</button></div>
      <div class="current-title">${t.name} <span class="kind k-${t.kind}">${kindLabel[t.kind]}</span></div>
      <div class="bar"><i style="width:${Math.min(100, prog / t.cost * 100)}%"></i><i class="pending" style="width:${Math.min(100 - prog / t.cost * 100, incoming / t.cost * 100)}%"></i></div>
      <div class="current-meta"><span>${fmt(prog)} / ${t.cost}</span><span>+${fmt(incoming)} this turn · done ${turns(eta[t.id])}</span></div>
      ${rest ? `<div class="eyebrow q-label">Up next</div><ol class="queue">${rest}</ol>` : ''}
    </div>`;
  } else {
    current = `<div class="current idle"><div class="eyebrow">Nothing queued</div><div class="current-title">Pick technologies below</div>
      <div class="muted small">Research isn't wasted: points are saved until you queue something.${eco.bank ? ` You have <b>${fmt(eco.bank)}</b> saved.` : ''}</div></div>`;
  }
  const bank = eco.bank && eco.queue.length ? `<span class="bank" title="Saved research points. They go into your queue at the end of the turn.">${ICON.research}${fmt(eco.bank)} saved</span>` : '';
  const eras = [];
  for (const t of R.TECHS) (eras[t.era] ||= []).push(t);
  const grid = eras.map((list, e) => `<div class="era"><div class="era-label">Era ${e + 1}</div><div class="era-cards">${list.map(t => {
    const done = eco.techDone[t.id];
    const avail = R.techAvailable(eco, t.id);
    const qpos = eco.queue.indexOf(t.id);
    const prog = eco.techProg[t.id] || 0;
    const state = done ? 'done' : qpos === 0 ? 'active' : qpos > 0 ? 'queued' : avail ? 'avail' : 'locked';
    const missing = R.pathTo(eco, t.id).filter(id => id !== t.id);
    const needs = t.req.filter(r => !eco.techDone[r]).map(r => R.TECH[r].name).join(', ');
    const action = done ? '' : qpos >= 0 ? act({ type: 'unqueue', tech: t.id }) : act({ type: 'research', tech: t.id });
    const title = done ? 'Researched' : qpos >= 0 ? 'Click to remove from your queue'
      : missing.length ? `Click to queue this along with ${missing.map(id => R.TECH[id].name).join(', ')}` : 'Click to add to your research queue';
    return `<button class="tech ${state}" ${action} title="${esc(title)}">
      <span class="tech-top"><span class="tech-name">${t.name}</span>${done ? ICON.check : qpos >= 0 ? `<span class="q-badge">${qpos === 0 ? 'Now' : '#' + (qpos + 1)}</span>` : !avail ? ICON.lock : ''}</span>
      <span class="tech-sub"><span class="kind k-${t.kind}">${kindLabel[t.kind]}</span>${done ? '' : `<span class="tech-cost">${prog ? fmt(prog) + '/' : ''}${t.cost}</span>`}</span>
      ${!done && !avail && qpos < 0 ? `<span class="tech-needs">Needs ${esc(needs)}</span>` : ''}
      ${prog && !done ? `<span class="mini-bar"><i style="width:${prog / t.cost * 100}%"></i></span>` : ''}
    </button>`;
  }).join('')}</div></div>`).join('');
  return current + `<div class="section-head"><h3>Tech tree</h3>${bank}<span class="muted small">${Object.keys(eco.techDone).length}/${R.TECHS.length}</span></div>
    <p class="muted small tree-tip">Click a tech to queue it. Locked techs queue their prerequisites too.</p>` + grid;
}

function wondersHTML(eco) {
  const cards = R.WONDERS.map(w => {
    const built = eco.wonders[w.id];
    const known = eco.techDone[w.id];
    const ok = known && !built && eco.culture >= w.culture;
    let action;
    if (built) action = `<span class="done-note">${ICON.check} Built</span>`;
    else if (!known) action = `<span class="lock-note">${ICON.lock} Research ${w.name}</span>`;
    else action = `<button class="btn act ${ok ? 'glow' : ''}" data-act='${JSON.stringify({ type: 'wonder', id: w.id })}' ${ok ? '' : 'disabled'}>Build<span class="costs">${costHTML({ culture: w.culture })}</span></button>`;
    return `<div class="wonder ${built ? 'built' : known ? 'known' : ''}">
      <div class="wonder-vp">+${w.vp}<small>VP/turn</small></div>
      <div class="wonder-name">${w.name}</div>
      ${action}
    </div>`;
  }).join('');
  return `<p class="muted small">Wonders cost culture and give victory points every turn. First to ${R.VP_TO_WIN} VP wins. You're on <b>+${eco.vppt}</b> per turn.</p>
    <div class="wonders">${cards}</div>`;
}

$('#leftBody').addEventListener('click', e => {
  const q = e.target.closest('[data-qty]');
  if (q) { ui.qty = Number(q.dataset.qty); play('click'); renderLeft(); return; }
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const action = JSON.parse(b.dataset.act);
  play(action.type === 'build' ? 'build' : action.type === 'wonder' ? 'wonder' : action.n > 1 ? 'clicks' : 'click');
  dispatch(action);
});

// ----- army -----
function renderArmy() {
  const eco = myEco();
  const color = myPlayer().color;
  $('#army').innerHTML = R.UNITS.map(u => {
    const unlocked = R.unitUnlocked(eco, u.id);
    const afford = eco.citizen >= u.citizen && eco.gold >= u.gold;
    const sel = ui.selected === u.id;
    return `<button class="unit-card ${sel ? 'sel' : ''} ${unlocked ? '' : 'locked'} ${unlocked && !afford ? 'poor' : ''}" data-unit="${u.id}"
      title="${u.name}: ${u.hp} HP, ${u.atk} attack. ${R.RANGE_LABEL[u.range]}.${u.id === 'peon' ? ' Can be placed on any edge square.' : ''}${unlocked ? '' : ' Research ' + R.TECH[u.tech].name + ' to unlock.'}">
      ${spriteImg(color, u.id, 'unit-img')}
      <span class="unit-name">${u.name}</span>
      ${unlocked ? `<span class="unit-cost">${costHTML({ citizen: u.citizen, gold: u.gold })}</span>` : `<span class="unit-lock">${ICON.lock}${R.TECH[u.tech].name}</span>`}
      <span class="unit-stats"><span title="Health">♥ ${u.hp}</span><span title="Attack">⚔ ${u.atk}</span>${rangeGlyph(u.range)}</span>
    </button>`;
  }).join('');
}
function rangeGlyph(range) {
  const cells = new Set(R.RANGES[range].map(([dx, dy]) => `${dx},${dy}`));
  let s = '<span class="glyph" title="' + R.RANGE_LABEL[range] + '">';
  for (let dy = 2; dy >= -2; dy--) for (let dx = -2; dx <= 2; dx++) {
    s += `<i class="${dx === 0 && dy === 0 ? 'c' : cells.has(`${dx},${dy}`) ? 'h' : ''}"></i>`;
  }
  return s + '</span>';
}
$('#army').addEventListener('click', e => {
  const b = e.target.closest('[data-unit]');
  if (!b) return;
  const id = b.dataset.unit;
  const eco = myEco();
  if (!R.unitUnlocked(eco, id)) { toast(`Research ${R.TECH[R.UNIT[id].tech].name} to unlock the ${R.UNIT[id].name}.`, 'error'); play('error'); return; }
  ui.selected = ui.selected === id ? null : id;
  play('click');
  renderArmy();
  renderBoard();
});

// ----- board -----
function renderBoard() {
  const b = state.board;
  const sel = ui.selected;
  const hover = ui.hover;
  const placeable = new Set();
  if (sel && state.phase === 'playing') for (let i = 0; i < 64; i++) if (R.canPlace(state, me.pid, sel, i)) placeable.add(i);

  // Range preview: selected unit at hovered square, or the hovered unit itself.
  let rangeCells = new Set(), rangeColor = null;
  if (hover >= 0) {
    if (sel && placeable.has(hover)) { rangeCells = new Set(R.cellsInRange(hover, R.UNIT[sel].range)); rangeColor = colorOf(me.pid); }
    else if (b[hover]) { rangeCells = new Set(R.cellsInRange(hover, R.UNIT[b[hover].unit].range)); rangeColor = colorOf(b[hover].owner); }
  }
  const corners = new Set(R.CORNERS.map(R.cellIndex));
  let html = '';
  for (let i = 0; i < 64; i++) {
    const u = b[i];
    const cls = ['cell'];
    if ((R.colOf(i) + R.rowOf(i)) % 2) cls.push('alt');
    if (corners.has(i)) cls.push('corner');
    if (placeable.has(i)) cls.push(u ? 'can-replace' : 'can-place');
    if (rangeCells.has(i)) cls.push('in-range');
    if (i === hover) cls.push('hover');
    let inner = '';
    if (u) {
      const p = state.players[u.owner];
      const def = R.UNIT[u.unit];
      const pct = Math.max(0, Math.min(100, u.hp / def.hp * 100));
      cls.push('occupied');
      if (u.owner === me.pid) cls.push('mine');
      inner = `${spriteImg(p ? p.color : 'red', u.unit)}<span class="hp"><i style="width:${pct}%"></i><b>${u.hp}</b></span>`;
      if (u.tar !== null && i === hover && b[u.tar]) cls.push('targeting');
    }
    const style = `grid-area:${Math.floor(i / 8) + 1}/${(i % 8) + 1};` + (u ? `--pc:${colorOf(u.owner)};` : '') + (rangeColor ? `--rc:${rangeColor}` : '');
    html += `<div class="${cls.join(' ')}" data-i="${i}" style="${style}">${inner}</div>`;
  }
  // Zone outlines (cosmetic, as in the original).
  for (const z of R.ZONES) {
    const idxs = z.cells.map(R.cellIndex);
    const minC = Math.min(...idxs.map(R.colOf)), minR = Math.min(...idxs.map(i => Math.floor(i / 8)));
    const owner = R.zoneOwner(state, z);
    html += `<div class="zone ${owner ? 'held' : ''}" style="grid-column:${minC + 1}/span 2;grid-row:${minR + 1}/span 2;${owner ? `--zc:${colorOf(owner)}` : ''}"><span>${z.name}</span></div>`;
  }
  $('#board').innerHTML = html;
  $('#board').classList.toggle('placing', !!sel);
  renderHint(placeable);
}

function renderHint(placeable) {
  const hint = $('#boardHint');
  const hover = ui.hover;
  const u = hover >= 0 ? state.board[hover] : null;
  if (ui.selected) {
    const d = R.UNIT[ui.selected];
    const eco = myEco();
    const afford = eco.citizen >= d.citizen && eco.gold >= d.gold;
    hint.innerHTML = `Placing <b>${d.name}</b> (${costHTML({ citizen: d.citizen, gold: d.gold })}). ` +
      (!afford ? `<span class="warn">You can't afford another one.</span>` :
        placeable.size ? `Click a glowing square.${d.id === 'peon' ? ' Peons can go on any edge square.' : ''}` :
          `<span class="warn">No valid squares. Start with a Peon on an edge square, or wait a turn for your units' reach to grow.</span>`);
  } else if (u) {
    const d = R.UNIT[u.unit];
    hint.innerHTML = `<b style="color:${colorOf(u.owner)}">${esc(nameOf(u.owner))}</b>'s ${d.name} on ${R.cellName(hover)}: ${u.hp}/${d.hp} HP, ${d.atk} attack. ${R.RANGE_LABEL[d.range]}.`;
  } else if (hover >= 0) {
    const z = R.ZONES.find(z => z.cells.includes(R.cellName(hover)));
    hint.innerHTML = `${R.cellName(hover)}${R.CORNERS.includes(R.cellName(hover)) ? ': corner. Hold all four corners to win.' : ''}${z ? `: ${z.name} zone. Holding all 4 squares outlines it in your colour.` : ''}`;
  } else {
    hint.innerHTML = 'Hover a unit to see its attack range. Hold all four corners at the end of a turn to win.';
  }
}

$('#board').addEventListener('mousemove', e => {
  const c = e.target.closest('[data-i]');
  const i = c ? Number(c.dataset.i) : -1;
  if (i !== ui.hover) { ui.hover = i; renderBoard(); }
});
$('#board').addEventListener('mouseleave', () => { ui.hover = -1; renderBoard(); });
$('#board').addEventListener('click', e => {
  const c = e.target.closest('[data-i]');
  if (!c || state.phase !== 'playing') return;
  const i = Number(c.dataset.i);
  if (!ui.selected) {
    if (state.board[i]) return;
    toast('Pick a unit from the Army bar first.');
    return;
  }
  if (!R.canPlace(state, me.pid, ui.selected, i)) {
    toast(state.board[i] ? 'Another player holds that square.' : ui.selected === 'peon' ? 'Peons go on an edge square or next to your units.' : 'Place units on the glowing squares, next to your existing units.', 'error');
    play('error');
    return;
  }
  if (state.board[i] && state.board[i].owner === me.pid) {
    const old = R.UNIT[state.board[i].unit];
    if (!confirm(`Replace your ${old.name} on ${R.cellName(i)} with a new ${R.UNIT[ui.selected].name}?`)) return;
  }
  const eco = myEco();
  const d = R.UNIT[ui.selected];
  // keep the unit selected only if they can afford another one after this
  const canAffordAnother = eco.citizen >= d.citizen * 2 && eco.gold >= d.gold * 2;
  play('build');
  if (!canAffordAnother) ui.selected = null;
  dispatch({ type: 'place', unit: d.id, cell: i });
  if (!canAffordAnother) { renderArmy(); renderBoard(); }
});
$('#board').addEventListener('contextmenu', e => { if (ui.selected) { e.preventDefault(); ui.selected = null; renderArmy(); renderBoard(); } });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!$('#modal').hidden) { closeModal(); return; }
    if (ui.selected) { ui.selected = null; renderArmy(); renderBoard(); }
  }
});

// ----- right panel -----
function renderPlayers() {
  const cornerIdx = R.CORNERS.map(R.cellIndex);
  $('#players').innerHTML = state.order.map(pid => {
    const p = state.players[pid];
    const units = state.board.filter(c => c && c.owner === pid).length;
    const corners = cornerIdx.filter(i => state.board[i]?.owner === pid).length;
    const vp = p.isBot ? null : p.eco.vp;
    const status = p.isBot ? '<span class="st ai">AI</span>' : !p.connected ? '<span class="st off">Offline</span>' : p.ready ? `<span class="st ok">${ICON.check}Ready</span>` : '<span class="st plan">Planning…</span>';
    return `<li style="--pc:${R.COLORS[p.color].hex}" class="${pid === me.pid ? 'me' : ''}">
      <div class="pl-top"><span class="swatch"></span><span class="pname">${esc(p.name)}${pid === me.pid ? ' <small>(you)</small>' : ''}</span>${status}</div>
      <div class="pl-stats">
        ${vp === null ? '' : `<span class="vp-mini" title="Victory points">${ICON.vp}${fmt(vp)}<small>/${R.VP_TO_WIN}</small><span class="vpbar"><i style="width:${Math.min(100, vp)}%"></i></span></span>`}
        <span title="Units on the board">${units} unit${units === 1 ? '' : 's'}</span>
        <span title="Corners held (4 = military victory)">${corners}/4 corners</span>
      </div>
    </li>`;
  }).join('');
}

function renderBattle() {
  const ev = state.lastEvents || [];
  const hits = ev.filter(e => e.type === 'hit');
  if (!hits.length && !ev.some(e => e.type === 'kill')) {
    $('#battle').innerHTML = `<p class="muted small">${state.turn > 1 ? 'No fighting last turn.' : 'Battles happen when the turn ends.'}</p>`;
    return;
  }
  const lines = hits.slice(0, 40).map(h => {
    return `<li><span class="dot" style="background:${colorOf(h.owner)}"></span>${R.cellName(h.from)} → ${R.cellName(h.to)} <b>−${h.dmg}</b></li>`;
  });
  const kills = ev.filter(e => e.type === 'kill').map(k => `<li class="kill"><span class="dot" style="background:${colorOf(k.owner)}"></span>${esc(nameOf(k.owner))}'s ${R.UNIT[k.unit].name} fell on ${R.cellName(k.cell)}</li>`);
  $('#battle').innerHTML = `<ul class="battle-list">${kills.join('')}${lines.join('')}</ul>`;
}

function renderLog() {
  const items = state.log.slice(-40).reverse();
  $('#log').innerHTML = items.map(l => `<li${l.pid ? ` style="--pc:${colorOf(l.pid)}"` : ''}><span class="lt">T${l.turn}</span>${esc(l.text)}</li>`).join('');
}

// ---------- city view ----------
// Bounding boxes of the drawings inside the original images: [imgW, imgH, x, y, w, h].
const CROP = {
  house: [800, 400, 299, 102, 125, 179], farm2: [800, 400, 53, 178, 719, 173],
  granary: [382, 383, 29, 18, 327, 356], silo: [974, 730, 333, 33, 264, 692], aqueduct: [800, 400, 0, 0, 561, 367],
  market: [800, 400, 7, 43, 746, 280], harbor: [800, 400, 136, 15, 404, 315], treasury: [800, 400, 102, 8, 588, 314],
  merchant: [600, 400, 76, 0, 448, 400], shrine: [672, 503, 65, 3, 543, 493], temple: [943, 707, 50, 0, 851, 655],
  cathedral: [1024, 768, 105, 1, 717, 763], library: [800, 400, 18, 62, 764, 239], university: [427, 427, 19, 7, 381, 382],
  laboratory: [800, 400, 30, 10, 755, 304], lake: [800, 400, 346, 9, 439, 319],
};
const SCENE_RATIO = 0.625; // height / width of the scene
// Lots: x = left %, y = ground line % (where the drawing stands), w = width %.
const LOTS = {
  shrine: { x: 3, y: 41, w: 6.5 }, temple: { x: 10.5, y: 41, w: 10 }, cathedral: { x: 21.5, y: 41, w: 7.5 },
  granary: { x: 2.5, y: 63, w: 6 }, foodSilo: { x: 9.5, y: 63, w: 3.4, img: 'silo' }, aqueduct: { x: 0, y: 74, w: 40, back: true },
  market: { x: 41, y: 44, w: 15 }, harbor: { x: 60.5, y: 47, w: 9 }, treasury: { x: 61, y: 73, w: 11 },
  library: { x: 56, y: 94, w: 13 }, university: { x: 71, y: 94, w: 8 }, laboratory: { x: 81, y: 94, w: 15 },
};
const HOUSE_SLOTS = [];
for (const [row, y] of [[0, 61], [1, 69], [2, 77]]) for (let c = 0; c < 6; c++) HOUSE_SLOTS.push({ x: 33 + c * 4.4 + (row % 2) * 2.2, y });
const FIELD_SLOTS = [];
for (const y of [78, 85, 92, 99]) for (let c = 0; c < 3; c++) FIELD_SLOTS.push({ x: 1.5 + c * 10, y });

// The original drawings sit on white canvases. Cut the white away (flood-filled from the
// edges so white walls inside a drawing stay), crop to the drawing, and cache as data URLs.
const cityArt = {};
let cityArtLoading = null;
function loadCityArt() {
  if (cityArtLoading) return cityArtLoading;
  cityArtLoading = Promise.all(Object.entries(CROP).map(async ([name, [, , cx, cy, cw, ch]]) => {
    try {
      const img = new Image();
      img.src = `../images/${name}.png`;
      await img.decode();
      const scale = Math.min(1, 360 / Math.max(cw, ch));
      const w = Math.max(1, Math.round(cw * scale)), h = Math.max(1, Math.round(ch * scale));
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const g = c.getContext('2d');
      g.drawImage(img, cx, cy, cw, ch, 0, 0, w, h);
      const d = g.getImageData(0, 0, w, h);
      const px = d.data;
      const white = i => px[i * 4 + 3] < 20 || Math.min(px[i * 4], px[i * 4 + 1], px[i * 4 + 2]) > 232;
      const seen = new Uint8Array(w * h);
      const stack = [];
      for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
      for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
      while (stack.length) {
        const i = stack.pop();
        if (seen[i] || !white(i)) continue;
        seen[i] = 1;
        px[i * 4 + 3] = 0;
        const x = i % w;
        if (x > 0) stack.push(i - 1);
        if (x < w - 1) stack.push(i + 1);
        if (i >= w) stack.push(i - w);
        if (i < w * (h - 1)) stack.push(i + w);
      }
      g.putImageData(d, 0, 0);
      cityArt[name] = c.toDataURL('image/png');
    } catch { /* fall back to the raw image */ }
  })).then(() => { if (ui.view === 'city' && state && state.phase !== 'lobby') renderCity(); });
  return cityArtLoading;
}

function cityImg(name, x, y, w, { ghost = false, label = '', cls = '', z } = {}) {
  const [W, H, cx, cy, cw, ch] = CROP[name];
  const hPct = (w * (ch / cw)) / SCENE_RATIO;
  let art;
  if (cityArt[name]) art = `<img src="${cityArt[name]}" alt="" draggable="false">`;
  else {
    const pos = (o, full, part) => (full === part ? 0 : (o / (full - part)) * 100);
    art = `<i class="raw" style="background-image:url(../images/${name}.png);background-size:${(W / cw) * 100}% ${(H / ch) * 100}%;background-position:${pos(cx, W, cw)}% ${pos(cy, H, ch)}%"></i>`;
  }
  return `<div class="cs ${ghost ? 'ghost' : ''} ${cls}" style="left:${x}%;top:${(y - hPct).toFixed(2)}%;width:${w}%;aspect-ratio:${cw}/${ch};z-index:${z ?? Math.round(y)}"${label ? ` title="${esc(label)}"` : ''}>${art}${ghost && label ? `<span class="cs-label">${esc(label.replace(': not built', ''))}</span>` : ''}</div>`;
}

function wonderSVG(vp) {
  if (vp === 1) return '<svg viewBox="0 0 40 60" aria-hidden="true"><path d="M16 58V12l4-8 4 8v46z" fill="var(--stone)"/><path d="M20 4l4 8h-8z" fill="var(--gilt)"/><rect x="10" y="54" width="20" height="6" rx="1" fill="var(--stone-dark)"/></svg>';
  if (vp === 2) return '<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="8" y="52" width="44" height="8" rx="1" fill="var(--stone-dark)"/><rect x="12" y="26" width="5" height="26" fill="var(--stone)"/><rect x="27.5" y="26" width="5" height="26" fill="var(--stone)"/><rect x="43" y="26" width="5" height="26" fill="var(--stone)"/><path d="M6 26h48L30 8z" fill="var(--gilt)"/></svg>';
  return '<svg viewBox="0 0 70 60" aria-hidden="true"><path d="M2 60h66L56 46H14z" fill="var(--stone-dark)"/><path d="M14 46h42L46 32H24z" fill="var(--stone)"/><path d="M24 32h22L38 18h-6z" fill="var(--stone-dark)"/><path d="M32 18h6l-3-10z" fill="var(--gilt)"/></svg>';
}

function renderCity() {
  loadCityArt();
  const humans = state.order.filter(pid => !state.players[pid].isBot);
  if (!humans.includes(ui.cityPid)) ui.cityPid = me.pid;
  const p = state.players[ui.cityPid];
  const eco = p.eco;
  const mine = ui.cityPid === me.pid;

  $('#cityTitle').innerHTML = mine ? 'Your city' : `<span style="color:${colorOf(p.pid)}">${esc(p.name)}</span>'s city`;
  $('#cityPicker').innerHTML = humans.length > 1 ? humans.map(pid => `<button class="city-chip ${pid === ui.cityPid ? 'on' : ''}" data-city="${pid}" style="--pc:${colorOf(pid)}"><span class="swatch"></span>${pid === me.pid ? 'You' : esc(state.players[pid].name)}</button>`).join('') : '';

  const built = new Set();
  R.TRACKS.forEach(t => t.tiers.forEach((b, k) => { if (k < eco.buildings[t.id]) built.add(b.id); }));
  const prev = ui.cityBuilt[ui.cityPid];
  const fresh = id => prev && !prev.has(id);
  const parts = [];

  // Buildings on their lots; unbuilt ones are faded outlines.
  for (const t of R.TRACKS) for (const b of t.tiers) {
    const lot = LOTS[b.id];
    const has = built.has(b.id);
    parts.push(cityImg(lot.img || b.img, lot.x, lot.y, lot.w, {
      ghost: !has,
      label: has ? `${b.name} (×${b.mult} ${RES[t.id].name.toLowerCase()})` : `${b.name}: not built`,
      cls: (lot.back ? 'back ' : '') + (has && fresh(b.id) ? 'pop' : ''),
      z: lot.back ? 1 : undefined,
    }));
  }
  parts.push(cityImg('lake', 72, 64, 26, { z: 2, cls: 'scenery' }));

  // Farm fields and houses grow with the economy.
  const fields = Math.min(FIELD_SLOTS.length, eco.farm);
  FIELD_SLOTS.slice(0, fields).forEach(s => parts.push(cityImg('farm2', s.x, s.y, 9.4)));
  const people = eco.farm + eco.merchant + eco.artist + eco.scholar;
  const houses = Math.min(HOUSE_SLOTS.length, 1 + Math.floor(people / 4));
  HOUSE_SLOTS.slice(0, houses).forEach(s => parts.push(cityImg('house', s.x, s.y, 3.4)));
  const stalls = Math.min(4, eco.merchant);
  for (let k = 0; k < stalls; k++) parts.push(cityImg('merchant', 42.5 + k * 3.5, 52, 3.2));

  // Wonders on the hill.
  R.WONDERS.forEach((w, k) => {
    const has = eco.wonders[w.id];
    const x = 29 + k * 4.9 - (w.vp === 3 ? 1 : w.vp === 2 ? 0.6 : 0);
    parts.push(`<div class="wonder-mon ${has ? '' : 'ghost'} ${has && prev && !(ui.cityWonders[ui.cityPid] || new Set()).has(w.id) ? 'pop' : ''}" style="left:${x}%;width:${w.vp === 3 ? 6 : w.vp === 2 ? 5 : 3.4}%" title="${esc(w.name)}${has ? ` (+${w.vp} VP per turn)` : ': not built'}">${wonderSVG(w.vp)}</div>`);
  });

  // District names.
  const district = (txt, x, y) => parts.push(`<span class="district" style="left:${x}%;top:${y}%">${txt}</span>`);
  district('Temple hill', 3, 23);
  district('Wonders', 30, 2);
  district('Market', 41, 25);
  district('Homes', 34, 47);
  district('Farmland', 2, 64);
  district('Harbor', 61, 30);
  district('Learning', 57, 78);

  $('#cityScene').innerHTML = `<div class="sky"></div><div class="hill"></div>${parts.join('')}`;
  $('#cityScene').style.setProperty('--pc', colorOf(p.pid));

  ui.cityBuilt[ui.cityPid] = built;
  ui.cityWonders[ui.cityPid] = new Set(Object.keys(eco.wonders));

  const nb = built.size, nw = Object.keys(eco.wonders).length;
  $('#cityStats').innerHTML = [
    ['citizen', 'Farms', eco.farm],
    ['gold', 'Merchants', eco.merchant],
    ['culture', 'Artists', eco.artist],
    ['research', 'Scholars', eco.scholar],
  ].map(([k, label, n]) => `<div class="cstat"><span class="${RES[k].cls}">${ICON[k]}</span><b>${fmt(n)}</b><span>${label}</span></div>`).join('') +
    `<div class="cstat"><span class="r-citizen">${ICON.farm}</span><b>${nb}/12</b><span>Buildings</span></div>` +
    `<div class="cstat"><span class="r-vp">${ICON.vp}</span><b>${nw}/9</b><span>Wonders</span></div>`;
}

function setView(v) {
  ui.view = v;
  document.querySelectorAll('.view-switch [data-view]').forEach(b => {
    b.classList.toggle('on', b.dataset.view === v);
    b.setAttribute('aria-selected', b.dataset.view === v);
  });
  $('#boardView').hidden = v !== 'board';
  $('#cityView').hidden = v !== 'city';
  if (v === 'city') { ui.cityAttn = false; renderCity(); }
  document.querySelector('[data-view="city"]').classList.toggle('attn', !!ui.cityAttn);
}
document.querySelector('.view-switch').addEventListener('click', e => {
  const b = e.target.closest('[data-view]');
  if (b) { play('click'); setView(b.dataset.view); }
});
$('#cityPicker').addEventListener('click', e => {
  const b = e.target.closest('[data-city]');
  if (b) { ui.cityPid = b.dataset.city; play('click'); renderCity(); }
});

// ---------- end-of-turn feedback ----------
function afterResolve() {
  play('turn');
  const ev = state.lastEvents || [];
  const board = $('#board');
  const cells = board.querySelectorAll('[data-i]');
  for (const e of ev) {
    if (e.type === 'hit' || e.type === 'kill') {
      const cell = cells[e.type === 'hit' ? e.to : e.cell];
      if (!cell) continue;
      const f = document.createElement('span');
      f.className = 'floater' + (e.type === 'kill' ? ' kill' : '');
      f.textContent = e.type === 'hit' ? `−${e.dmg}` : '✕';
      cell.appendChild(f);
      cell.classList.add(e.type === 'kill' ? 'flash-kill' : 'flash-hit');
    }
  }
  const techs = ev.filter(e => e.type === 'tech' && e.pid === me.pid);
  for (const t of techs) toast(`Research complete: ${R.TECH[t.tech].name}`, 'good');
  if (state.phase === 'playing') {
    const banner = document.createElement('div');
    banner.className = 'turn-banner';
    banner.textContent = `Turn ${state.turn}`;
    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 1500);
  }
}

function showWinner() {
  const names = state.winners.map(pid => `<b style="color:${colorOf(pid)}">${esc(nameOf(pid))}</b>`).join(' and ');
  const iWon = state.winners.includes(me.pid);
  play(iWon ? 'wonder' : 'turn');
  openModal(`<div class="win">
    <div class="win-emblem">${ICON.vp}</div>
    <h2>${iWon ? 'Victory!' : 'Game over'}</h2>
    <p>${names} won by <b>${state.winReason}</b> on turn ${state.turn}.</p>
    <div class="modal-actions">
      <button class="btn" data-close>View board</button>
      ${role === 'host' ? '<button class="btn primary" id="mRestart">Back to lobby</button>' : '<span class="muted small">The host can start a new game.</span>'}
    </div></div>`);
  const r = $('#mRestart');
  if (r) r.onclick = () => { closeModal(); dispatch({ type: 'restart' }); };
}

// ---------- top bar ----------
$('#readyBtn').addEventListener('click', () => {
  const p = myPlayer();
  if (!p || state.phase !== 'playing') return;
  play(p.ready ? 'click' : 'ping');
  ui.selected = null;
  dispatch({ type: 'ready', value: !p.ready });
});
$('#roomChip').addEventListener('click', copyInvite);
$('#muteBtn').addEventListener('click', () => {
  ui.muted = !ui.muted;
  local.set('fg-muted', ui.muted ? '1' : '0');
  $('#muteBtn').innerHTML = ui.muted ? ICON.mute : ICON.sound;
});
window.addEventListener('beforeunload', e => {
  if (role === 'host' && state && state.order.some(p => p !== me.pid && !state.players[p].isBot)) { e.preventDefault(); e.returnValue = ''; }
});

showScreen('home');

// After a page reload, rejoin the room this tab was already in (keeps the same seat).
const invitedCode = normalizeCode(params.get('room'));
if (invitedCode && sess.get('fg-room') === invitedCode && me.name) startJoining(invitedCode);
