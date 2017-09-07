'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

// Constants
const PORT = 27017;


// App
const app = express();

app.use(bodyParser.text());

app.get('/words', function (req, res) {
    var words = fs.readFileSync('/words/words.list').toString().split("\n");
    res.json(words);
});

app.put('/words', function (req, res) {
    var words = fs.readFileSync('/words/words.list').toString().split("\n");
    console.log('Saving word ' + req.body)
    words.push(req.body);
    fs.writeFileSync('/words/words.list', words.join('\n'))
    res.send('Saved word ' + req.body)
});

app.get('/health', function (req, res) {
   res.send("OK");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);