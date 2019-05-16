var socket;
function setup() {
    createCanvas(600, 400);
    background('#acacac');

    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing);

}
function newDrawing(data) {
    stroke("aqua");
    fill(0,0,0);
    ellipse(data.x, data.y, 36, 36);
}
function mouseDragged() {
    console.log('Sending:' + mouseX + ',' + mouseY);
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
    stroke("aqua");
    fill(255);
    ellipse(data.x, data.y, 36, 36)

}
function draw() {

}