const express = require("express")

const app = express();
app.get('/status', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Servidor Corriendo'
    })
  });

module.exports = app;