//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 20;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
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
                    else if (matrix[y][x] == 6) {
                        fill("purple");
                    }
                    rect(x * side, y * side, side, side);
                }
            }   
        
    }
}