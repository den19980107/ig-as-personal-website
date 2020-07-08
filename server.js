const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = 3000
app.get("/", function (req, res) {
    res.sendFile('/index.html', { root: __dirname })
});

//start server
server.listen(port, function () {
    console.log("Server started on port" + port);
});