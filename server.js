var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html')
});
server.listen(3000, function () {
    console.log("this page is a runnining");

});

var Grass = require("./Modul/Grass.js");
var GrassEater = require("./Modul/GrassEater.js");
var Predator = require("./Modul/Predator.js");
var MostOfAll = require("./Modul/MostOfAll.js");
var Men = require("./Modul/Men.js");


var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var MostOfAllArr = [];
var MenArr = [];

var w = 50;
var h = 60;

function getMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y]=[];
        for (var x = 0; x < w; x++) {
            matrix[y][x]=[];
            var r = Math.floor(Math.random() * 75);
            if (r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2;
            else if (r < 75) r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
Random =function(arr){return arr[Math.floor(Math.random()*arr.length)];
}
matrix = getMatrix(w, h);

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var grass = new Grass(x, y, 1);
            grassArr.push(grass);
        }
        else if (matrix[y][x] == 2) {
            var grassEater = new GrassEater(x, y, 2);
            grassEaterArr.push(grassEater);
           
        }
        else if (matrix[y][x] == 3) {
            var predator = new Predator(x, y, 3);
            PredatorArr.push(predator);

        }
        else if (matrix[y][x] == 4) {
            var mostOfAll = new MostOfAll(x, y, 4);
            MostOfAllArr.push(mostOfAll)
        }
        else if (matrix[y][x] == 5) {
            var men = new Men(x, y, 5);
            MenArr.push(men);
        }

    }
}

function drawserver() {
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }
    for (var i in PredatorArr) {
        PredatorArr[i].mul();
        PredatorArr[i].move();
        PredatorArr[i].eat();
        PredatorArr[i].die();
    }
    for (var i in MostOfAllArr) {
        MostOfAllArr[i].mul();
        MostOfAllArr[i].move();
        MostOfAllArr[i].eat();
        MostOfAllArr[i].die();
    }
    for (var i in MenArr) {
        MenArr[i].mul();
        MenArr[i].Walking();
        MenArr[i].eat();
        MenArr[i].die();
    }
    io.sockets.emit("matrix", matrix);

}
setInterval(drawserver, 3000);