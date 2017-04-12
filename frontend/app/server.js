'use strict';

const express = require('express');
const request = require('request');
const os = require("os");

// Constants
const PORT = 8080;

function hostname() {
    return "<br><br>host:" + os.hostname();
}

// App
const app = express();
app.get('/', function (req, res) {
    request("http://backend/randomword", function(error, backendResp, backendRespBody) {
        if (!error) {
            res.send("Backend says: " + backendRespBody + hostname());
        } else {
            res.send("Backend unreachable: " + error + hostname());
        }
    });
});

app.get('/health', function (req, res) {
   res.send("OK");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);