let matrix = [];
let side = 20;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let person1Arr = [];
let person2Arr = [];
function setup() {
    matrixGenerator(30, 150, 100, 60, 15, 5 );
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
           if (matrix[y][x] == 3) {
                let a = new Predator(x, y);
                predatorArr.push(a); 
            }
            if (matrix[y][x] == 4) {
                let person1 = new Person1(x, y);
                person1Arr.push(person1); 
            }

            if (matrix[y][x] == 5) {
                let person2 = new Person2(x, y);
                person2Arr.push(person2); 
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater, predator, person1, person2) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize)); // 0 - 49
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }

        for (let i = 0; i < predator; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }

        for (let i = 0; i < person1; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }

        for (let i = 0; i < person2; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
      
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("violet");
            }
            rect(x * side, y * side, side, side);
        }
    }

    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in grassArr) {
        grassArr[i].mul(); //80
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (var i in predatorArr) {
        predatorArr[i].eat();
    
    }
    
    for (var i in person1Arr) {
        person1Arr[i].eat();
    }

    for (var i in person2Arr) {
        person2Arr[i].eat();
    
    }

}
