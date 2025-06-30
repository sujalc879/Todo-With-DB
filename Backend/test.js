const express = require('express');
const app = express();
const { z } = require("zod");

app.use(express.json());

app.post("/", async(req, res) => {
    

});

app.listen(3002);