/*
This is a simple Node.js application that can be deployed to Azure App Service using Git.
It uses the Express framework to create a basic web server.
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node.js application deployed to Azure App Service using Git.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});