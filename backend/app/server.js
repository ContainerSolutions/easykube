'use strict';

const express = require('express');
const fs = require('fs');
const request = require('request');

const PORT = 8080;

const app = express();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/randomword', function (req, res) {
    const user = process.env.DB_USER;
    const pwd = process.env.DB_PASSWORD;

    console.log("user=" + user + ", pwd=" + pwd);
    request({url:"http://words-db:27017/words", qs: {user: user, pwd: pwd}}, function(error, dbResp, dbRespBody) {
        console.log("dbResp=" + JSON.stringify(dbResp) + ", dbRespBody=" + dbRespBody);
        if (error) {
            res.status(500).send("Error calling db: " + error + "\n<br>" + dbResp + "\n<br>" + dbRespBody);
        } else {
            const words = JSON.parse(dbRespBody);
            res.send(words[getRandomInt(0, words.length - 1)]);
        }
    })
});

app.get('/health', function (req, res) {
   res.send("OK");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);