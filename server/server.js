const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started up at ${port}`)
});

module.exports = {app};
