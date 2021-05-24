const express = require('express');

const server = express();

server.all('/', (req, res) => {
  res.send('Bot is running!');
});

function keepAlive() {
  server.listen(5000, () => {
    console.log("It's Running");
  });
}

module.exports = keepAlive;
