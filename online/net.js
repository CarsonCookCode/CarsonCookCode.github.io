// Peer-to-peer networking via PeerJS (global `Peer` from the CDN script).
// The host's browser owns the game state; clients send actions and receive state.

const PREFIX = 'farmgame-online-v1-';
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function randomCode() {
  let s = '';
  for (let i = 0; i < 5; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return s;
}

export function normalizeCode(code) {
  return String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);
}

function describeError(err) {
  switch (err && err.type) {
    case 'peer-unavailable': return "Couldn't find a game with that code. Check it, or ask the host for a new link.";
    case 'network':
    case 'server-error':
    case 'socket-error':
    case 'socket-closed': return 'Lost connection to the matchmaking server. Check your internet and try again.';
    case 'browser-incompatible': return 'This browser does not support WebRTC. Try a recent Chrome, Firefox, Edge or Safari.';
    default: return (err && err.message) || 'Connection error.';
  }
}

// Host: opens a room and relays messages.
// handlers: { onOpen(code), onHello(conn, msg), onMessage(conn, msg), onClose(conn), onError(text) }
export function hostRoom(handlers, code = randomCode(), attempt = 0) {
  const peer = new Peer(PREFIX + code);
  const conns = new Set();
  let opened = false;

  peer.on('open', () => { opened = true; handlers.onOpen(code); });
  peer.on('connection', conn => {
    conn.on('open', () => conns.add(conn));
    conn.on('data', msg => {
      if (!msg || typeof msg !== 'object') return;
      if (msg.t === 'hello') handlers.onHello(conn, msg);
      else handlers.onMessage(conn, msg);
    });
    const drop = () => { if (conns.delete(conn)) handlers.onClose(conn); };
    conn.on('close', drop);
    conn.on('error', drop);
  });
  peer.on('disconnected', () => { if (!peer.destroyed) peer.reconnect(); });
  peer.on('error', err => {
    if (err.type === 'unavailable-id' && !opened && attempt < 4) {
      peer.destroy();
      Object.assign(api, hostRoom(handlers, randomCode(), attempt + 1));
      return;
    }
    handlers.onError(describeError(err));
  });

  const api = {
    peer,
    broadcast(msg) { for (const c of conns) if (c.open) c.send(msg); },
    send(conn, msg) { if (conn.open) conn.send(msg); },
    close() { peer.destroy(); },
  };
  return api;
}

// Client: joins a room.
// handlers: { onConnected(), onMessage(msg), onClose(), onError(text) }
export function joinRoom(code, hello, handlers) {
  const peer = new Peer();
  let conn = null;
  let closed = false;
  const finish = () => { if (!closed) { closed = true; handlers.onClose(); } };

  peer.on('open', () => {
    conn = peer.connect(PREFIX + code, { reliable: true, serialization: 'json' });
    conn.on('open', () => { conn.send({ t: 'hello', ...hello }); handlers.onConnected(); });
    conn.on('data', msg => handlers.onMessage(msg));
    conn.on('close', finish);
    conn.on('error', finish);
  });
  peer.on('error', err => handlers.onError(describeError(err)));

  return {
    peer,
    send(msg) { if (conn && conn.open) conn.send(msg); },
    close() { closed = true; peer.destroy(); },
  };
}
