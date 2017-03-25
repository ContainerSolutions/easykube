'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 27017;


// App
const app = express();
app.get('/words', function (req, res) {
    if (req.query.user !== 'easykube-backend') {
        res.status(401).send('Unauthorised client');
        return;
    }
    if (req.query.pwd !== 'easykubepwd') {
        res.status(401).send('Invalid password');
        return;
    }
    var words = fs.readFileSync('/words/words.list').toString().split("\n");
    res.json(words);
});

app.get('/health', function (req, res) {
   res.send("OK");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);