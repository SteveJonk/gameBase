const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api/appdetails', { target: 'https://store.steampowered.com' }));
};
