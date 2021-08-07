const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

const url = require('url');
const proxy = require('express-http-proxy');

const apiProxy = proxy('https://store.steampowered.com/api/appdetails', {
  proxyReqPathResolver: (req) => url.parse(req.baseUrl).path,
});

app.use('/api/appdetails', apiProxy);

app.use('/gameapi', proxy('https://store.steampowered.com/'));

app.use('/test', proxy('https://google.nl'));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
