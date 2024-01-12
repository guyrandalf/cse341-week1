const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.use('/', require('./routes'))

app.listen(PORT);
console.log(`Web server running on port: ${PORT}`);
