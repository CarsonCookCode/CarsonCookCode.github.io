// Farm Game Online — rules engine.
// Pure game logic ported from the original main.js. The host's browser runs this
// and is the single source of truth; clients only send actions.

export const VP_TO_WIN = 100;
export const MAX_PLAYERS = 4;

export const COLORS = {
  red:    { name: 'Red',    hex: '#d23b3b' },
  blue:   { name: 'Blue',   hex: '#2f6bd6' },
  green:  { name: 'Green',  hex: '#2c9a45' },
  yellow: { name: 'Yellow', hex: '#d9a400' },
};
export const COLOR_ORDER = ['red', 'blue', 'green', 'yellow'];

// Attack patterns as [dx, dy] where +dy is toward row 8 (top of the board).
// Order matters: a unit attacks the first enemy it finds, in this order (same as original).
export const RANGES = {
  melee:    [[0, 1], [1, 0], [0, -1], [-1, 0]],
  diagonal: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
  archer:   [[0, 1], [1, 0], [0, -1], [-1, 0], [0, 2], [2, 0], [0, -2], [-2, 0]],
  catapult: [[0, 2], [1, 2], [2, 1], [2, 0], [2, -1], [1, -2], [0, -2], [-1, -2], [-2, -1], [-2, 0], [-2, 1], [-1, 2]],
  around:   [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]],
  none:     [],
};
export const RANGE_LABEL = {
  melee: 'Hits 1 square up, down, left or right',
  diagonal: 'Hits 1 square diagonally',
  archer: 'Hits up to 2 squares in a straight line',
  catapult: 'Hits a ring 2 squares away',
  around: 'Hits every enemy in the 8 squares around it',
  none: 'Does not attack',
};

// def: each hit does (attack - defense) damage, at least 1.
export const UNITS = [
  { id: 'peon',        name: 'Peon',        sprite: 'hammer',    citizen: 1,  gold: 0,  hp: 20, atk: 1,  def: 0, range: 'melee',    tech: null },
  { id: 'warrior',     name: 'Warrior',     sprite: 'hatchet',   citizen: 1,  gold: 3,  hp: 40, atk: 5,  def: 1, range: 'melee',    tech: null },
  { id: 'footman',     name: 'Footman',     sprite: 'sword',     citizen: 3,  gold: 10, hp: 50, atk: 10, def: 2, range: 'melee',    tech: 'footman' },
  { id: 'brute',       name: 'Brute',       sprite: 'shield',    citizen: 5,  gold: 5,  hp: 80, atk: 5,  def: 3, range: 'melee',    tech: 'brute', ability: 'taunt' },
  { id: 'archer',      name: 'Archer',      sprite: 'bow',       citizen: 2,  gold: 10, hp: 30, atk: 5,  def: 0, range: 'archer',   tech: 'archer' },
  { id: 'ranger',      name: 'Ranger',      sprite: 'dagger',    citizen: 3,  gold: 12, hp: 30, atk: 15, def: 1, range: 'diagonal', tech: 'ranger' },
  { id: 'scout',       name: 'Scout',       sprite: 'boot',      citizen: 6,  gold: 10, hp: 20, atk: 1,  def: 4, range: 'melee',    tech: 'scout', ability: 'recon' },
  { id: 'knight',      name: 'Knight',      sprite: 'knight',    citizen: 3,  gold: 15, hp: 60, atk: 10, def: 3, range: 'melee',    tech: 'knight', ability: 'charge' },
  { id: 'conquerer',   name: 'Conqueror',   sprite: 'conq',      citizen: 8,  gold: 20, hp: 60, atk: 12, def: 3, range: 'melee',    tech: 'conquerer' },
  { id: 'catapult',    name: 'Catapult',    sprite: 'catapult',  citizen: 5,  gold: 30, hp: 30, atk: 10, def: 0, range: 'catapult', tech: 'catapult' },
  { id: 'priest',      name: 'Priest',      sprite: 'priest',    citizen: 10, gold: 30, hp: 30, atk: 0,  def: 1, range: 'none',     tech: 'priest', ability: 'heal' },
  { id: 'general',     name: 'General',     sprite: 'general',   citizen: 10, gold: 30, hp: 50, atk: 0,  def: 3, range: 'none',     tech: 'general', ability: 'command' },
  { id: 'goliath',     name: 'Goliath',     sprite: 'goliath',   citizen: 10, gold: 30, hp: 80, atk: 20, def: 5, range: 'melee',    tech: 'goliath', ability: 'crush' },
  { id: 'mage',        name: 'Mage',        sprite: 'mage',      citizen: 5,  gold: 50, hp: 50, atk: 15, def: 1, range: 'archer',   tech: 'mage', ability: 'arcane' },
  { id: 'infiltrator', name: 'Infiltrator', sprite: 'shiv',      citizen: 8,  gold: 60, hp: 40, atk: 20, def: 2, range: 'diagonal', tech: 'infiltrator', ability: 'infiltrate' },
  { id: 'berzerker',   name: 'Berserker',   sprite: 'berzerker', citizen: 10, gold: 50, hp: 50, atk: 12, def: 0, range: 'around',   tech: 'berzerker', ability: 'frenzy' },
];
export const ABILITIES = {
  heal:       { name: 'Heal',        text: 'At the end of each turn, restores 10 health to every friendly unit in the 8 squares around it (not itself).' },
  command:    { name: 'Command',     text: 'Friendly units in the 8 squares around it get +3 attack. Your placement reach around it is 2 squares.' },
  frenzy:     { name: 'Frenzy',      text: 'Hits every enemy in the 8 squares around it, then takes 5 damage itself.' },
  recon:      { name: 'Recon',       text: 'Your placement reach around it is 2 squares instead of 1.' },
  taunt:      { name: 'Taunt',       text: 'Enemies that can reach it must attack it first.' },
  infiltrate: { name: 'Infiltrate',  text: 'Can be placed on any empty square that is not next to an enemy.' },
  charge:     { name: 'Charge',      text: 'Double damage on its first attack after being placed.' },
  arcane:     { name: 'Arcane bolt', text: 'Hits up to 2 different enemies each turn.' },
  crush:      { name: 'Crush',       text: 'Every other enemy next to its target also takes a 5-damage hit.' },
};
export const HEAL_AMOUNT = 10;
export const COMMAND_BONUS = 3;
export const FRENZY_SELF_DAMAGE = 5;
export const CRUSH_DAMAGE = 5;
export const UNIT = Object.fromEntries(UNITS.map(u => [u.id, u]));

// Building tracks: each tier multiplies one resource. Tier N+1 needs tier N built.
export const TIER_COST = [{ citizen: 10, gold: 30 }, { citizen: 50, gold: 200 }, { citizen: 200, gold: 1000 }];
export const TRACKS = [
  { id: 'citizen',  name: 'Food',     worker: 'farm', tiers: [
    { id: 'granary',    name: 'Granary',    img: 'granary',    mult: 1.5 },
    { id: 'foodSilo',   name: 'Food Silo',  img: 'silo',       mult: 2 },
    { id: 'aqueduct',   name: 'Aqueduct',   img: 'aqueduct',   mult: 3 }] },
  { id: 'gold',     name: 'Trade',    worker: 'merchant', tiers: [
    { id: 'market',     name: 'Market',     img: 'market',     mult: 2 },
    { id: 'harbor',     name: 'Harbor',     img: 'harbor',     mult: 3 },
    { id: 'treasury',   name: 'Treasury',   img: 'treasury',   mult: 4 }] },
  { id: 'culture',  name: 'Faith',    worker: 'artist', tiers: [
    { id: 'shrine',     name: 'Shrine',     img: 'shrine',     mult: 2 },
    { id: 'temple',     name: 'Temple',     img: 'temple',     mult: 3 },
    { id: 'cathedral',  name: 'Cathedral',  img: 'cathedral',  mult: 4 }] },
  { id: 'research', name: 'Learning', worker: 'scholar', tiers: [
    { id: 'library',    name: 'Library',    img: 'library',    mult: 2 },
    { id: 'university', name: 'University', img: 'university', mult: 3 },
    { id: 'laboratory', name: 'Laboratory', img: 'laboratory', mult: 4 }] },
];

export const WONDERS = [
  { id: 'bloodSacrifice', name: 'Blood Sacrifice', culture: 50,  vp: 1 },
  { id: 'ritual',         name: 'Ritual',          culture: 50,  vp: 1 },
  { id: 'chants',         name: 'Chants',          culture: 50,  vp: 1 },
  { id: 'religion',       name: 'Religion',        culture: 200, vp: 2 },
  { id: 'classicalArt',   name: 'Classical Art',   culture: 200, vp: 2 },
  { id: 'lawAndOrder',    name: 'Law and Order',   culture: 200, vp: 2 },
  { id: 'freeTrade',      name: 'Free Trade',      culture: 500, vp: 3 },
  { id: 'abstractArt',    name: 'Abstract Art',    culture: 500, vp: 3 },
  { id: 'enlightenment',  name: 'Enlightenment',   culture: 500, vp: 3 },
];
export const WONDER = Object.fromEntries(WONDERS.map(w => [w.id, w]));

// Tech tree: cost in research points and prerequisites (from the original click* functions).
const T = (id, name, cost, req, kind) => ({ id, name, cost, req, kind });
export const TECHS = [
  T('market', 'Market', 10, [], 'building'),
  T('footman', 'Footman', 8, [], 'unit'),
  T('library', 'Library', 12, [], 'building'),
  T('granary', 'Granary', 14, ['market'], 'building'),
  T('ritual', 'Ritual', 20, ['market'], 'wonder'),
  T('brute', 'Brute', 14, ['footman'], 'unit'),
  T('knight', 'Knight', 24, ['footman'], 'unit'),
  T('ranger', 'Ranger', 16, ['library'], 'unit'),
  T('scout', 'Scout', 22, ['library'], 'unit'),
  T('archer', 'Archer', 20, ['library'], 'unit'),
  T('bloodSacrifice', 'Blood Sacrifice', 22, ['granary'], 'wonder'),
  T('shrine', 'Shrine', 20, ['granary'], 'building'),
  T('university', 'University', 40, ['ritual'], 'building'),
  T('chants', 'Chants', 24, ['knight'], 'wonder'),
  T('classicalArt', 'Classical Art', 50, ['ritual', 'knight', 'archer'], 'wonder'),
  T('harbor', 'Harbor', 32, ['archer'], 'building'),
  T('temple', 'Temple', 42, ['university'], 'building'),
  T('conquerer', 'Conqueror', 60, ['classicalArt'], 'unit'),
  T('catapult', 'Catapult', 60, ['harbor'], 'unit'),
  T('lawAndOrder', 'Law and Order', 65, ['harbor'], 'wonder'),
  T('religion', 'Religion', 40, ['temple'], 'wonder'),
  T('priest', 'Priest', 80, ['temple'], 'unit'),
  T('freeTrade', 'Free Trade', 120, ['temple', 'conquerer'], 'wonder'),
  T('general', 'General', 110, ['catapult'], 'unit'),
  T('laboratory', 'Laboratory', 130, ['lawAndOrder'], 'building'),
  T('foodSilo', 'Food Silo', 80, ['lawAndOrder'], 'building'),
  T('aqueduct', 'Aqueduct', 160, ['freeTrade'], 'building'),
  T('cathedral', 'Cathedral', 200, ['freeTrade'], 'building'),
  T('treasury', 'Treasury', 210, ['freeTrade'], 'building'),
  T('goliath', 'Goliath', 250, ['freeTrade', 'general'], 'unit'),
  T('mage', 'Mage', 300, ['general', 'laboratory'], 'unit'),
  T('abstractArt', 'Abstract Art', 400, ['cathedral'], 'wonder'),
  T('infiltrator', 'Infiltrator', 400, ['treasury'], 'unit'),
  T('berzerker', 'Berserker', 400, ['goliath'], 'unit'),
  T('enlightenment', 'Enlightenment', 400, ['mage'], 'wonder'),
];
export const TECH = Object.fromEntries(TECHS.map(t => [t.id, t]));
// Era = depth in the tree, used for layout.
for (const t of TECHS) t.era = t.req.length ? 1 + Math.max(...t.req.map(r => TECH[r].era)) : 0;

// Zones from the original. Holding all 4 squares gives a bonus while you hold them:
// the four resource zones double that resource's income; Military gives 1.5x damage.
export const ZONES = [
  { id: 'growth',   name: 'Growth',   cells: ['D8', 'E8', 'D7', 'E7'], key: 'citizen',  mult: 2,   bonus: '2x citizens' },
  { id: 'gold',     name: 'Gold',     cells: ['G5', 'H5', 'G4', 'H4'], key: 'gold',     mult: 2,   bonus: '2x gold' },
  { id: 'culture',  name: 'Culture',  cells: ['D2', 'E2', 'D1', 'E1'], key: 'culture',  mult: 2,   bonus: '2x culture' },
  { id: 'research', name: 'Research', cells: ['A5', 'B5', 'A4', 'B4'], key: 'research', mult: 2,   bonus: '2x research' },
  { id: 'military', name: 'Military', cells: ['D5', 'E5', 'D4', 'E4'], key: 'damage',   mult: 1.5, bonus: '1.5x damage' },
];
export const NO_ZONES = Object.freeze({ citizen: 1, gold: 1, culture: 1, research: 1, damage: 1 });
export const CORNERS = ['A8', 'H8', 'A1', 'H1'];

// ---------- board geometry ----------
// Index 0 is A8 (top-left), 63 is H1 (bottom-right) — same order as the original squareArray.
export const colOf = i => i % 8;
export const rowOf = i => 8 - Math.floor(i / 8);
export const idx = (col, row) => (col < 0 || col > 7 || row < 1 || row > 8) ? -1 : (8 - row) * 8 + col;
export const cellName = i => 'ABCDEFGH'[colOf(i)] + rowOf(i);
export const cellIndex = name => idx('ABCDEFGH'.indexOf(name[0]), Number(name.slice(1)));
export const isEdge = i => colOf(i) === 0 || colOf(i) === 7 || rowOf(i) === 1 || rowOf(i) === 8;
export function cellsInRange(i, range) {
  const out = [];
  for (const [dx, dy] of RANGES[range]) {
    const j = idx(colOf(i) + dx, rowOf(i) + dy);
    if (j >= 0) out.push(j);
  }
  return out;
}

// ---------- state ----------
export function newPlayerEconomy() {
  return {
    citizen: 10, gold: 0, culture: 0, research: 0,
    farm: 1, farmCost: 3, merchant: 0, artist: 0, scholar: 0,
    mult: { citizen: 1, gold: 1, culture: 1, research: 1 },
    buildings: { citizen: 0, gold: 0, culture: 0, research: 0 },
    techDone: {}, techProg: {},
    queue: [],  // research queue; queue[0] is being researched
    bank: 0,    // research points saved while nothing is queued
    wonders: {}, vp: 0, vppt: 0,
  };
}

export function newGame() {
  return { phase: 'lobby', turn: 0, players: {}, order: [], board: Array(64).fill(null), walk: {}, log: [], lastEvents: [], winners: null, winReason: null, rev: 0 };
}

export function addPlayer(state, pid, name, isBot = false) {
  if (state.players[pid]) { state.players[pid].connected = true; if (name) state.players[pid].name = name; return null; }
  if (state.phase !== 'lobby') return 'That game has already started.';
  if (state.order.length >= MAX_PLAYERS) return 'That game is full (4 players).';
  const taken = new Set(state.order.map(p => state.players[p].color));
  const color = COLOR_ORDER.find(c => !taken.has(c));
  state.players[pid] = { pid, name: name || COLORS[color].name, color, isBot, connected: true, ready: false, eco: null };
  state.order.push(pid);
  return null;
}

export function removePlayer(state, pid) {
  delete state.players[pid];
  state.order = state.order.filter(p => p !== pid);
}

export function startGame(state) {
  state.phase = 'playing';
  state.turn = 1;
  state.board = Array(64).fill(null);
  state.walk = {};
  state.log = [];
  state.lastEvents = [];
  state.winners = null;
  state.winReason = null;
  for (const pid of state.order) {
    const p = state.players[pid];
    p.eco = newPlayerEconomy();
    p.ready = p.isBot;
    state.walk[pid] = Array(64).fill(0);
  }
  log(state, 'The game has started. Plan your turn, then press End turn.');
}

function log(state, text, pid = null) {
  state.log.push({ turn: state.turn, text, pid });
  if (state.log.length > 120) state.log.splice(0, state.log.length - 120);
}

// ---------- queries ----------
// Zone multipliers for a player, from who holds each zone right now.
export function zoneMult(state, pid) {
  const m = { ...NO_ZONES };
  for (const z of ZONES) if (zoneOwner(state, z) === pid) m[z.key] = z.mult;
  return m;
}

export function income(eco, zm = NO_ZONES) {
  return {
    citizen: eco.farm * eco.mult.citizen * zm.citizen,
    gold: eco.merchant * eco.mult.gold * zm.gold,
    culture: eco.artist * eco.mult.culture * zm.culture,
    research: eco.scholar * eco.mult.research * zm.research,
  };
}

export function techAvailable(eco, id) {
  const t = TECH[id];
  return !eco.techDone[id] && t.req.every(r => eco.techDone[r]);
}

// Techs that must be queued (in order) to reach `id`, including `id` itself.
export function pathTo(eco, id, acc = []) {
  if (eco.techDone[id] || eco.queue.includes(id) || acc.includes(id)) return acc;
  for (const r of TECH[id].req) pathTo(eco, r, acc);
  acc.push(id);
  return acc;
}

// Remove queued techs whose prerequisites are neither researched nor earlier in the queue.
function pruneQueue(eco) {
  const kept = [];
  for (const id of eco.queue) {
    if (TECH[id].req.every(r => eco.techDone[r] || kept.includes(r))) kept.push(id);
  }
  eco.queue = kept;
}

// Turns until each queued tech finishes, assuming scholars stay the same.
export function queueEta(eco, zm = NO_ZONES) {
  const rate = eco.scholar * eco.mult.research * zm.research;
  let pts = eco.research + eco.bank;
  let turn = 1;
  const out = {};
  for (const id of eco.queue) {
    let need = TECH[id].cost - (eco.techProg[id] || 0);
    while (need > pts) {
      if (rate <= 0) return out;
      need -= pts;
      pts = rate;
      turn++;
    }
    pts -= need;
    out[id] = turn;
  }
  return out;
}

export function unitUnlocked(eco, unitId) {
  const u = UNIT[unitId];
  return !u.tech || !!eco.techDone[u.tech];
}

export function canPlace(state, pid, unitId, i) {
  const cell = state.board[i];
  if (cell && cell.owner !== pid) return false;
  if (cell && cell.owner === pid) return true; // replacing your own unit (allowed in original)
  if (state.walk[pid] && state.walk[pid][i] >= 1) return true;
  if (unitId === 'infiltrator') return !cellsInRange(i, 'around').some(j => state.board[j] && state.board[j].owner !== pid);
  return unitId === 'peon' && isEdge(i);
}

const fmt = n => Math.floor(n).toLocaleString();
function need(eco, cost) {
  const missing = [];
  if (cost.citizen && eco.citizen < cost.citizen) missing.push(`${fmt(cost.citizen - eco.citizen)} more citizens`);
  if (cost.gold && eco.gold < cost.gold) missing.push(`${fmt(cost.gold - eco.gold)} more gold`);
  if (cost.culture && eco.culture < cost.culture) missing.push(`${fmt(cost.culture - eco.culture)} more culture`);
  return missing.length ? 'You need ' + missing.join(' and ') + '.' : null;
}

// ---------- actions (validated; return an error string or null) ----------
export function applyAction(state, pid, a) {
  const p = state.players[pid];
  if (!p) return 'You are not in this game.';

  if (a.type === 'setColor') {
    if (state.phase !== 'lobby') return 'Colours are locked once the game starts.';
    if (!COLORS[a.color]) return 'Unknown colour.';
    if (state.order.some(o => o !== pid && state.players[o].color === a.color)) return 'Someone already has that colour.';
    p.color = a.color;
    return null;
  }
  if (a.type === 'setName') {
    p.name = String(a.name || '').slice(0, 20) || p.name;
    return null;
  }

  if (state.phase !== 'playing') return 'The game is not running.';
  const eco = p.eco;

  switch (a.type) {
    case 'ready':
      p.ready = !!a.value;
      return null;

    case 'buyFarm': {
      const n = clampQty(a.n);
      let bought = 0;
      while (bought < n && eco.citizen >= eco.farmCost) {
        eco.citizen -= eco.farmCost;
        eco.farm++;
        eco.farmCost += 3;
        bought++;
      }
      if (!bought) return need(eco, { citizen: eco.farmCost });
      return null;
    }

    case 'hire': {
      const n = clampQty(a.n);
      if (!['merchant', 'artist', 'scholar'].includes(a.role)) return 'Unknown worker.';
      if (eco.citizen < n) return need(eco, { citizen: n });
      eco.citizen -= n;
      eco[a.role] += n;
      if (a.role === 'artist') eco.culture += n;   // original: hiring an artist gives culture right away
      if (a.role === 'scholar') eco.research += n; // original: hiring a scholar adds research right away
      return null;
    }

    case 'build': {
      const track = TRACKS.find(t => t.id === a.track);
      if (!track) return 'Unknown building.';
      const tier = eco.buildings[track.id];
      if (tier >= 3) return `You have built every ${track.name} building.`;
      const b = track.tiers[tier];
      if (!eco.techDone[b.id]) return `Research ${b.name} first.`;
      const cost = TIER_COST[tier];
      const err = need(eco, cost);
      if (err) return err;
      eco.citizen -= cost.citizen;
      eco.gold -= cost.gold;
      eco.buildings[track.id] = tier + 1;
      eco.mult[track.id] = b.mult;
      log(state, `${p.name} built a ${b.name}.`, pid);
      return null;
    }

    case 'research': {
      // Add a tech (and any missing prerequisites) to the end of the queue.
      if (!TECH[a.tech]) return 'Unknown technology.';
      if (eco.techDone[a.tech]) return 'You already know that.';
      if (eco.queue.includes(a.tech)) return null;
      eco.queue.push(...pathTo(eco, a.tech));
      return null;
    }
    case 'unqueue': {
      // Remove a tech from the queue, plus anything queued that depended on it.
      eco.queue = eco.queue.filter(id => id !== a.tech);
      pruneQueue(eco);
      return null;
    }
    case 'researchFirst': {
      if (!eco.queue.includes(a.tech)) return 'That tech is not in your queue.';
      if (!techAvailable(eco, a.tech)) return `Research ${TECH[a.tech].req.filter(r => !eco.techDone[r]).map(r => TECH[r].name).join(' and ')} first.`;
      eco.queue = [a.tech, ...eco.queue.filter(id => id !== a.tech)];
      return null;
    }

    case 'wonder': {
      const w = WONDER[a.id];
      if (!w) return 'Unknown wonder.';
      if (eco.wonders[w.id]) return `You already built ${w.name}.`;
      if (!eco.techDone[w.id]) return `Research ${w.name} first.`;
      const err = need(eco, { culture: w.culture });
      if (err) return err;
      eco.culture -= w.culture;
      eco.wonders[w.id] = true;
      eco.vppt += w.vp;
      log(state, `${p.name} completed the ${w.name} wonder (+${w.vp} VP per turn).`, pid);
      return null;
    }

    case 'place': {
      const u = UNIT[a.unit];
      const i = a.cell;
      if (!u) return 'Unknown unit.';
      if (!(i >= 0 && i < 64)) return 'Pick a square on the board.';
      if (!unitUnlocked(eco, u.id)) return `Research ${TECH[u.tech].name} first.`;
      const err = need(eco, { citizen: u.citizen, gold: u.gold });
      if (err) return err;
      if (!canPlace(state, pid, u.id, i)) {
        const cell = state.board[i];
        if (cell) return 'Another player holds that square.';
        return u.id === 'peon' ? 'Peons go on an edge square or next to your units.'
          : u.id === 'infiltrator' ? 'Infiltrators can go on any empty square that is not next to an enemy.'
          : 'Place units next to your existing units (the glowing squares).';
      }
      eco.citizen -= u.citizen;
      eco.gold -= u.gold;
      state.board[i] = { owner: pid, unit: u.id, hp: u.hp, tar: null, fresh: true };
      return null;
    }
  }
  return 'Unknown action.';
}

function clampQty(n) {
  return [1, 10, 100].includes(n) ? n : 1;
}

export function allReady(state) {
  const live = state.order.map(p => state.players[p]).filter(p => p.isBot || p.connected);
  return live.length > 0 && live.every(p => p.ready);
}

// ---------- end of turn (original endTurn order) ----------
export function resolveTurn(state) {
  const events = [];

  const zonesAtEnd = Object.fromEntries(state.order.map(pid => [pid, zoneMult(state, pid)]));

  // 1. Research, then income and victory points (endTurnCiv + endTurnResources).
  //    Research works through the queue; leftover points carry into the next
  //    tech, and points with nothing queued are banked for later.
  for (const pid of state.order) {
    const p = state.players[pid];
    if (p.isBot) continue;
    const eco = p.eco;
    let pts = eco.research + eco.bank;
    eco.bank = 0;
    while (pts > 0 && eco.queue.length) {
      const t = TECH[eco.queue[0]];
      const prog = eco.techProg[t.id] || 0;
      const needed = t.cost - prog;
      if (pts >= needed) {
        eco.techProg[t.id] = t.cost;
        eco.techDone[t.id] = true;
        eco.queue.shift();
        pts -= needed;
        log(state, `${p.name}'s scholars discovered ${t.name}.`, pid);
        events.push({ type: 'tech', pid, tech: t.id });
      } else {
        eco.techProg[t.id] = prog + pts;
        pts = 0;
      }
    }
    eco.bank = pts;
    const inc = income(eco, zonesAtEnd[pid]);
    eco.citizen += inc.citizen;
    eco.gold += inc.gold;
    eco.culture += inc.culture;
    eco.research = inc.research;
    eco.vp += eco.vppt;
  }

  // 2. Combat: units attack at the same time; deaths are applied afterwards.
  const b = state.board;
  resolveCombat(state, events, zonesAtEnd);
  removeDead(state, events);

  // Berserkers that attacked take their self-damage, then Priests heal.
  for (let i = 0; i < 64; i++) {
    const u = b[i];
    if (u && u.frenzied) {
      u.hp -= FRENZY_SELF_DAMAGE;
      events.push({ type: 'self', cell: i, dmg: FRENZY_SELF_DAMAGE, owner: u.owner });
    }
    if (u) delete u.frenzied;
  }
  removeDead(state, events);
  for (let i = 0; i < 64; i++) {
    const pr = b[i];
    if (!pr || UNIT[pr.unit].ability !== 'heal') continue;
    for (const j of cellsInRange(i, 'around')) {
      const t = b[j];
      if (!t || t.owner !== pr.owner) continue;
      const amt = Math.min(HEAL_AMOUNT, UNIT[t.unit].hp - t.hp);
      if (amt > 0) { t.hp += amt; events.push({ type: 'heal', from: i, to: j, amt, owner: pr.owner }); }
    }
  }
  for (const u of b) if (u && u.tar !== null && !b[u.tar]) u.tar = null;

  // 3. Reach: squares next to each of your units become placeable.
  recomputeWalk(state);

  // 4. Original AI: drop a free warrior on the first empty square.
  for (const pid of state.order) {
    if (!state.players[pid].isBot) continue;
    const i = b.findIndex(c => c === null);
    if (i >= 0) {
      b[i] = { owner: pid, unit: 'warrior', hp: 40, tar: null, fresh: false };
      events.push({ type: 'spawn', cell: i, owner: pid });
    }
  }

  // 5. Win checks.
  const corners = CORNERS.map(c => b[cellIndex(c)]);
  if (corners.every(c => c && c.owner === corners[0].owner)) {
    state.winners = [corners[0].owner];
    state.winReason = 'military';
  } else {
    const humans = state.order.filter(pid => !state.players[pid].isBot);
    const top = Math.max(...humans.map(pid => state.players[pid].eco.vp));
    if (top >= VP_TO_WIN) {
      state.winners = humans.filter(pid => state.players[pid].eco.vp === top);
      state.winReason = 'victory points';
    }
  }

  const hits = events.filter(e => e.type === 'hit').length;
  const kills = events.filter(e => e.type === 'kill').length;
  if (hits) log(state, `Battle: ${hits} attack${hits > 1 ? 's' : ''}, ${kills} unit${kills === 1 ? '' : 's'} lost.`);

  if (state.winners) {
    state.phase = 'over';
    const names = state.winners.map(pid => state.players[pid].name).join(' and ');
    log(state, `${names} won by ${state.winReason}!`);
  } else {
    state.turn++;
  }
  for (const pid of state.order) state.players[pid].ready = state.players[pid].isBot;
  state.lastEvents = events;
  return events;
}

// Attack bonus from friendly Generals next to a square (does not stack).
export function commandBonus(state, i, owner) {
  return cellsInRange(i, 'around').some(j => state.board[j] && state.board[j].owner === owner && UNIT[state.board[j].unit].ability === 'command') ? COMMAND_BONUS : 0;
}

export function damage(atk, targetUnitId) {
  return Math.max(1, atk - UNIT[targetUnitId].def);
}

function resolveCombat(state, events, zones) {
  const b = state.board;
  const hit = (from, to, atk, kind) => {
    const dmg = damage(atk, b[to].unit);
    b[to].hp -= dmg;
    events.push({ type: 'hit', from, to, dmg, owner: b[from].owner, kind });
  };
  for (let i = 0; i < 64; i++) {
    const u = b[i];
    if (!u) continue;
    const d = UNIT[u.unit];
    if (!d.atk) continue;
    const enemies = cellsInRange(i, d.range).filter(j => b[j] && b[j].owner !== u.owner);
    if (!enemies.length) continue;
    const bonus = commandBonus(state, i, u.owner);
    const zm = (zones[u.owner] || NO_ZONES).damage;
    let atk = Math.floor((d.atk + bonus) * zm);
    let kind = null;
    if (d.ability === 'charge' && u.fresh) { atk = Math.floor((d.atk * 2 + bonus) * zm); kind = 'charge'; }
    u.fresh = false;

    if (d.ability === 'frenzy') {
      for (const j of enemies) hit(i, j, atk, 'frenzy');
      u.frenzied = true;
      continue;
    }
    // Taunt: if an enemy Brute is in range, it must be targeted first.
    const taunters = enemies.filter(j => UNIT[b[j].unit].ability === 'taunt');
    const pool = taunters.length ? taunters : enemies;
    const first = (u.tar !== null && pool.includes(u.tar)) ? u.tar : pool[0];
    u.tar = first;
    hit(i, first, atk, kind);
    if (d.ability === 'arcane') {
      const second = [...pool, ...enemies].find(j => j !== first);
      if (second !== undefined) hit(i, second, atk, 'arcane');
    }
    if (d.ability === 'crush') {
      for (const j of cellsInRange(first, 'around')) {
        if (j !== i && b[j] && b[j].owner !== u.owner) hit(i, j, Math.floor(CRUSH_DAMAGE * zm), 'crush');
      }
    }
  }
}

function removeDead(state, events) {
  const b = state.board;
  for (let i = 0; i < 64; i++) {
    const u = b[i];
    if (u && u.hp <= 0) {
      events.push({ type: 'kill', cell: i, unit: u.unit, owner: u.owner });
      const victim = state.players[u.owner];
      log(state, `${victim ? victim.name : 'A'}'s ${UNIT[u.unit].name} on ${cellName(i)} was destroyed.`, u.owner);
      b[i] = null;
    }
  }
}

// Placement reach in squares around each unit (Recon and Command reach 2).
export function reachOf(unitId) {
  const a = UNIT[unitId].ability;
  return a === 'recon' || a === 'command' ? 2 : 1;
}

export function recomputeWalk(state) {
  for (const pid of state.order) state.walk[pid] = Array(64).fill(0);
  state.board.forEach((u, i) => {
    if (!u || !state.walk[u.owner]) return;
    const r = reachOf(u.unit);
    for (let dx = -r; dx <= r; dx++) for (let dy = -r; dy <= r; dy++) {
      if (!dx && !dy) continue;
      const j = idx(colOf(i) + dx, rowOf(i) + dy);
      if (j >= 0) state.walk[u.owner][j]++;
    }
  });
}

export function zoneOwner(state, zone) {
  const owners = zone.cells.map(c => state.board[cellIndex(c)]?.owner ?? null);
  return owners[0] && owners.every(o => o === owners[0]) ? owners[0] : null;
}
