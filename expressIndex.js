const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Welcome to Express JS");
})
app.get("/about", (req, res) => {
    res.send("Created by EXPRESS.JS");  
});
app.get("/htmlFile", (req, res) => {
    res.sendFile("  ");
})

app.listen(3000, () => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port 3000");
});