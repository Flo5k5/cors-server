// JavaScript CORS Proxy
// Save this in a file like cors.js and run with `node cors [port]`
// It will listen for your requests on the port you pass in command line or port 8080 by default
// let port = process.argv.length > 2 ? parseInt(process.argv[2], 10) : 8080; // default
// require('cors-anywhere')
//   .createServer()
//   .listen(port, 'localhost');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

const cors_proxy = require('cors-anywhere');
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
