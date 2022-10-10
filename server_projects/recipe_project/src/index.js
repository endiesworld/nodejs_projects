const express = require('express') ;
const path = require('path');

const app = express()

const port = process.env.PORT || 8080;

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.send("Hello Express Student!");

});

app.get("/:name", (req, res) => {
    res.send(`Welcome to Express Recipes, ${req.params.name}!`);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});