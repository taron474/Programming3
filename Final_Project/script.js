//! Setup function fires automatically
function setup() {
    

    var socket = io();

    var side = 20;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');

    let person1CountElement = document.getElementById('person1Count');
    let person1LiveCountElement = document.getElementById('person1LiveCount');

    let person2CountElement = document.getElementById('person2Count');
    let person2LiveCountElement = document.getElementById('person2LiveCount');

    let amenakerCountElement = document.getElementById('amenakerCount');
    let amenakerLiveCountElement = document.getElementById('amenakerLiveCount');
    
    let weatherElement = document.getElementById('weather');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
        person1CountElement.innerText = data.person1Counter;
        person1LiveCountElement.innerText = data.person1LiveCounter;
        person2CountElement.innerText = data.person2Counter;
        person2LiveCountElement.innerText = data.person2LiveCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        amenakerLiveCountElement.innerText = data.amenakerLiveCounter;
        weatherElement.innerText = data.weather;
        
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 0) {
                        fill("#acacac");
                    }
                    else if (matrix[y][x] == 1) {
                        if(data.weather == "summer"){
                            fill("#00fd00");
                        }
                        if(data.weather == "automn"){
                            fill("#adfd00");
                        }
                        if(data.weather == "winter"){
                            fill("#adfdff");
                        }
                        if(data.weather == "spring"){
                            fill("#00a300");
                        }    
                    }
                   
                    else if (matrix[y][x] == 2) {
                        if(data.weather == "summer"){
                            fill("#ffff33");
                        }
                        if(data.weather == "automn"){
                            fill("#ffffb3");
                        }
                        if(data.weather == "winter"){
                            fill("#999900");
                        }
                        if(data.weather == "spring"){
                            fill("#ffff66");
                        }    
                    }
                    else if (matrix[y][x] == 3) {
                        if(data.weather == "summer"){
                            fill(" #ff0000");
                        }
                        if(data.weather == "automn"){
                            fill("#ff9999");
                        }
                        if(data.weather == "winter"){
                            fill("#800000");
                        }
                        if(data.weather == "spring"){
                            fill(" #ff4d4d");
                        }    
                    }
                    else if (matrix[y][x] == 4) {
                        if(data.weather == "summer"){
                            fill("#0000ff");
                        }
                        if(data.weather == "automn"){
                            fill("#9999ff");
                        }
                        if(data.weather == "winter"){
                            fill("#000080");
                        }
                        if(data.weather == "spring"){
                            fill("#6666ff");
                        }    
                    }
                    else if (matrix[y][x] == 5) {
                        if(data.weather == "summer"){
                            fill("#ff00ff");
                        }
                        if(data.weather == "automn"){
                            fill("#ff99ff");
                        }
                        if(data.weather == "winter"){
                            fill("#990099");
                        }
                        if(data.weather == "spring"){
                            fill("#ff66ff");
                        }    
                    }
                    else if (matrix[y][x] == 6) {
                        if(data.weather == "summer"){
                            fill("#cc00ff");
                        }
                        if(data.weather == "automn"){
                            fill("#eb99ff");
                        }
                        if(data.weather == "winter"){
                            fill("#660080");
                        }
                        if(data.weather == "spring"){
                            fill("#e066ff");
                        }    
                    }
                    rect(x * side, y * side, side, side);
                }
            }   
        
    }
}