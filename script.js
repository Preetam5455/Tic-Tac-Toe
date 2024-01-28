const cells = document.querySelectorAll('.cell');
const statuseText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restart_button');
console.log();
const winCondition = [
    [0,1,3],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let option = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click",restartGame);
    statuseText.textContent = `${currentPlayer}'s turn`;
    running = true; 
}

function cellClicked(){
console.log("clicked");
const cellIndex = this.getAttribute('cellIndex')
console.log(cellIndex);
if(option[cellIndex] != "" || !running){
    // console.log("heree");
    return;
}
updateCell(this,cellIndex);
// changePlayer()
checkWinner();
}

function updateCell(cell,index){
    console.log(cell);
    option[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statuseText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;
    for(let i=0; i<winCondition.length; i++){
        const condition = winCondition[i];
        let cellA = option[condition[0]];
        let cellB = option[condition[1]];
        let cellC = option[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB &&  cellB == cellC){
            roundWon = true;
            break;
        }
    }
        if(roundWon){
        statuseText.textContent = `${currentPlayer} wins!`;
        running = false;
        // var img = document.createElement('img');
        // img.src = './Animation - 1706460562997.gif';
        // img.width = 200;
        // img.height = 120;
        // var container = document.querySelector('.main_container');
        // var button = document.getElementById('restart_button');
        // container.insertBefore(img,button);
        }
        else if(!option.includes("")){
            statuseText.textContent = "Game Draw!...Please restart to play again";
            running = false;
            // var img = document.createElement('img');
            // img.src = './Animation - 1706460749253.gif';
            // img.width = 200;
            // img.height = 120;
            // var container = document.querySelector('.main_container');
            // var button = document.getElementById('restart_button');
            // container.insertBefore(img,button);
        }
        else{
            changePlayer();
        }

}

function restartGame(){
    console.log("restartGame");
    currentPlayer = "X";
     option = ["", "", "", "", "", "", "", "", ""];
    statuseText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running =true;
    // var button = document.querySelector('img');
    // button.remove();
}

