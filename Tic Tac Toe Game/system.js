let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgm");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

//2D array or Array of Array
let winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2 ,4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


//add event listner for each box

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) { //player o
            box.innerText = "O";
            turnO = false;
    
        }
        else { //player X
            box.innerText = "X";
            turnO = true;
  
        }
        box.disabled = true;

        checkWinner();
    })
})
const showWinner = (winner) =>{
msg.innerText = `Congratulation! Our Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{ 
    for(let box of boxes){
        box.disabled = false; //for new game

        box.innerText = ""; //remove all value from it
    }
}
const checkWinner=() => {
    for(pattern of winningpattern) {  //will check the pattern from the winng pattern array winning list 
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            console.log("winner" ,  pos1val);

            showWinner(pos1val);
            
        }
    }
}
}

const resetGame = () => {
    turnO=true;
    msg.innerText = "";
    enableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);