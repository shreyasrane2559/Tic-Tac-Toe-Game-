let button = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset");
let winmsg = document.querySelector(".winmsg");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".new-btn");
let turnO = true;

const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

button.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enablebuttons();
  
    winmsg.classList.add("hide");

};

const disablebuttons = () => {
    for(let box of button){
        box.disabled = true;
    }
}

const enablebuttons = () => {
    for(let box of button){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    winmsg.classList.remove("hide");
    disablebuttons();
};


const checkWinner = () => {
    for (let pattern of winpat) {
      let pos1Val = button[pattern[0]].innerText;
      let pos2Val = button[pattern[1]].innerText;
      let pos3Val = button[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            
          showWinner(pos1Val);
          return true;
                
            }
        }

    }
};

newbtn.addEventListener("click", resetGame);
resetbutton.addEventListener("click",resetGame);

