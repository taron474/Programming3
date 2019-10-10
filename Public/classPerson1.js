class Person1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.eng = 75;
        this.directions = [
        ];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
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
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 
            matrix[y][x] = 4;

            let person1 = new Person1(x, y);
            person1Arr.push(person1);

            this.eng = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);
        
        if (newCell) {
            this.eng++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.eng >= 3) {
                this.mul();
            }
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
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.eng < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in person1Arr) {
            if (person1Arr[i].x == this.x && person1Arr[i].y == this.y) {
                person1Arr.splice(i, 1)
            }
        }
    }
}