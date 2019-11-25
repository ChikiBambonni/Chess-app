export const environment = {
  production: true,
  ws_uri: 'http://localhost:3000',
  socket_config: {
    'reconnection': true,
    'reconnectionDelay': 1000,
    'reconnectionDelayMax' : 5000,
    'reconnectionAttempts': 5
  },
  mongoapi: '/mapi',
};
