const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node.js application deployed to Azure App Service using Git');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});