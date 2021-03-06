let board = [
    ['X', 'X', 'X'],
    ['X', 'X', 'O'],
    ['X', 'O', 'X'],
]; 

let player1 = 'x';
let player2 = 'o';

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);
    let w = width / 3 ;
    let h = height /3 ;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let x = w * i; + w/2;
            let y = h * j; + h/2;
            let spot = board[i][j];
            textSize(32);
            strokeWeight(4);
            if (spot == player2) {
                nofill();
                elipse(x, y, w/2);
            } else if (spot == player1) {
                let xr = w/4;
                line(x - xr, y-xr, x + xr, y + xr);
                line(x + xr, y-xr , x-xr ,y + xr);
            }
        }
    }
}