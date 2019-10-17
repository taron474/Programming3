var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Predator extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 75;
    }


getNewCoordinates() {
    this.directions = [
        [this.x - 3, this.y - 3],
        [this.x, this.y - 3],
        [this.x + 3, this.y - 3],
        [this.x - 3, this.y],
        [this.x + 3, this.y],
        [this.x - 3, this.y + 3],
        [this.x, this.y + 3],
        [this.x + 3, this.y + 3]
    ];
}
chooseCell(character) {
    this.getNewCoordinates()
    var found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}

eat() {
    let emptyCells = this.chooseCell(4);
    let emptyCells1 = this.chooseCell(1);
    let newCell = random(emptyCells.concat(emptyCells1));
    
    if (newCell) {
        this.eng++;
        let x = newCell[0];
        let y = newCell[1];

        matrix[y][x] = 5;
        matrix[this.y][this.x] = 0;

        for (let i in person1Arr) {
            if (person1Arr[i].x == x && person1Arr[i].y == y) {
                person1Arr.splice(i, 1)
            }
        }

     
        for (let i in grassArr) {
            if (grassArr[i].x == x && grassArr[i].y == y) {
                grassArr.splice(i, 1)
            }
        }

        this.x = x;
        this.y = y;

      
    } else {
        
        this.move()
    }
}
move() {
    this.eng--;

    let emptyCells = this.chooseCell(0);
    let emptyCells1 = this.chooseCell(1);
    let newCell = random(emptyCells.concat(emptyCells1));

    if (newCell) {
        let x = newCell[0];
        let y = newCell[1];

        // matrixi mej gru mem MEK -> 1
        matrix[y][x] = 5;
        matrix[this.y][this.x] = 0;

        this.y = y;
        this.x = x;
    }
   
}

}

