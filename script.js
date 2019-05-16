// var matrix = [];
// var grassArr = [];
// var grassEaterArr = [];
// var PredatorArr = [];
// var MostOfAllArr = [];
// var MenArr = [];

// var side = 15;
// var n = 55;
// var m = 60;


// function setup() {
//     for (var y = 0; y < n; y++) {
//         matrix[y] = [];
//         for (x = 0; x < m; x++) {
//             matrix[y][x] = Math.round(random(0.5, 5));
//         }
//     }
//     frameRate(17);

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 var grass = new Grass(x, y, 1);
//                 grassArr.push(grass);
//             }
//             else if (matrix[y][x] == 2) {
//                 var grassEater = new GrassEater(x, y, 2);
//                 grassEaterArr.push(grassEater);
//             }
//             else if (matrix[y][x] == 3) {
//                 var predator = new Predator(x, y, 3);
//                 PredatorArr.push(predator)
//             }
//             else if (matrix[y][x] == 4) {
//                 var mostOfAll = new MostOfAll(x, y, 4);
//                 MostOfAllArr.push(mostOfAll)
//             }
//             else if (matrix[y][x] == 5) {
//                 var men = new Men(x, y, 5);
//                 MenArr.push(men);
//             }

//         }
//     }
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');


// }


// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow")
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("blue");
//             }
//             if (matrix[y][x] == 5) {
//                 fill('#FAEBD7')
//             }
//             rect(x * side, y * side, side, side);

//         }


//     }

//     for (var i in grassArr) {
//         grassArr[i].mul();

//     }
//     for (var i in grassEaterArr) {
//         grassEaterArr[i].mul();
//         grassEaterArr[i].move();
//         grassEaterArr[i].eat();
//         grassEaterArr[i].die();
//     }
//     for (var i in PredatorArr) {
//         PredatorArr[i].mul();
//         PredatorArr[i].move();
//         PredatorArr[i].eat();
//         PredatorArr[i].die();
//     }
//     for (var i in MostOfAllArr) {
//         MostOfAllArr[i].mul();
//         MostOfAllArr[i].move();
//         MostOfAllArr[i].eat();
//         MostOfAllArr[i].die();
//     }
//     for (var i in MenArr) {
//         MenArr[i].mul();
//         MenArr[i].Walking();
//         MenArr[i].eat();
//         MenArr[i].die();
//     }
// }

var side = 20;
var socket = io();

function setup() {
    frameRate(5);
    createCanvas(20 * side, 20 * side);
    background("aqua");
}
function drawMatrix(Matrix) {
    background('#33FFFF');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            if (matrix[y][x] == 5) {
                fill('#FAEBD7')
            }
            rect(x * side, y * side, side, side);

        }
    }
}
socket.on("matrix",drawMatrix);