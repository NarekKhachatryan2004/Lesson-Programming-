var LivingCreature = require("./LivingCreature.js");
module.exports = class Men extends LivingCreature{
    constructor(x,y,index){
        super(x,y,index)
        this.energy=13;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
       return super.chooseCell(character)
    }
    mul(){
        var newCell = function(arr){return arr[Math.floor(Math.random()*arr.length)];}
        if (this.energy >= 15 && newCell) {
            var newMen = new Men(newCell[0], newCell[1], this.index);
            MenArr.push(newMen);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 13;
        }
    }
    Walking(){
        var walking = [];
        var newCell = function(arr){return arr[Math.floor(Math.random(1)*arr.length)];}
        var newCell1 = function(arr){return arr[Math.floor(Math.random(0)*arr.length)];}
        walking.push(newCell, newCell1);
        var wal = function(arr){return arr[Math.floor(Math.random(walking)*arr.length)];}
        if (wal) {
            if (wal == newCell) {
                this.energy--;
                var x = newCell[0];
                var y = newCell[1];
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 1;
                var newMen = new Men(newCell[0], newCell[1], this.index);
                MenArr.push(newMen);
                this.x = x;
                this.y = y;
            }
            else if (wal == newCell1) {
                this.energy--;
                var x1 = newCell1[0];
                var y1 = newCell1[1];
                matrix[y1][x1] = this.index;
                matrix[this.y][this.x] = 0;
                var newMen = new Men(newCell1[0], newCell1[1], this.index);
                MenArr.push(newMen);
                this.x = x1;
                this.y = y1;
            }
        }
    }

    eat() {
        var utel = [];
        var newCell = function(arr){return arr[Math.floor(Math.random(4)*arr.length)];}
        var newCell1 = function(arr){return arr[Math.floor(Math.random(2)*arr.length)];}
        var newCell2 = function(arr){return arr[Math.floor(Math.random(3)*arr.length)];};
        utel.push(newCell, newCell1, newCell2);
        var eat = function(arr){return arr[Math.floor(Math.random(utel)*arr.length)];}
        if (eat) {
            if (newCell) {
                var x = newCell[0];
                var y = newCell[1];
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in MostOfAllArr) {
                    if (x == MostOfAllArr[i].x && y == MostOfAllArr[i].y) {
                        MostOfAllArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x;
                this.y = y;
            }
            else if (newCell1) {
                var x1 = newCell1[0];
                var y1 = newCell1[1];
                matrix[y1][x1] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x1;
                this.y = y1;
            }
            else if (newCell2) {
                var x2 = newCell2[0];
                var y2 = newCell2[1];
                matrix[y2][x2] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x2;
                this.y = y2;
            }
                this.energy += 2;

        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in MenArr) {
                if (this.x == MenArr[i].x && this.y == MenArr[i].y)
                    MenArr.splice(i, 1);
                break;
            }
        }
    }
}