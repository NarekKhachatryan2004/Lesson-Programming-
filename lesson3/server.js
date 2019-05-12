// var express = require("express");
// var app = express();


// app.get("/google.com",function(req ,res){
//     var google = req.params.google;
//     res.redirect('https://www.google.com/');

// });
// app.get("/search/:search",function(req,res){
//     var search = req.params.search;
//     res.redirect('https://www.google.com/search?q=' +search+'&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZn8n8_YbiAhVDI1AKHVbkADUQ_AUIDigB&biw=1920&bih=898')
// });
// app.get("/*",function(req,res){
//     res.send("<h1>Error 404</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
 });

 