var LivingCreature = require("./LivingCreature.js");
module.exports = class Grass extends LivingCreature{
    mul() {
        this.multiply++;
        var newCell = function(arr){return arr[Math.floor(Math.random()*arr.length)];
        }
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}