let gameSeq = [];
let userSeq = [];

let btns = ["pb1","pb2","pb3","pb4"];
let body = document.querySelector("body");
let h2 = document.querySelector(".level-indicator");
let scoreCard = document.querySelector(".score-card");
let highScorePanel = document.querySelector(".highscore-panel")
let started  = false;
let level = 0;
let scoreChild=0;


let scoreCounter = document.createElement("h2");


userName = prompt("Whats your name?");
userNameCounter = 0;

document.addEventListener("keypress",function(){
    let allBtns = document.querySelectorAll(".btn");
    // console.log(allBtns);
    for (btn of allBtns){
    btn.addEventListener("click", btnPress);
    }
    if(started==false){
        console.clear();
        if(scoreChild!=0){
            userName = prompt("Whats your name?");
        }
      
        if(scoreChild!=0){
            scoreCard.removeChild(scoreCounter);
        }
      
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    
    userSeq=[]
    level = level+1;
    h2.innerText = "Level "+level;
    
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);

    randomBtnId = randomBtn.getAttribute("id");
    // console.log(randomBtnId)

    gameSeq.push(randomBtnId);
   
    console.log("Game Sequenece",gameSeq);
    gameFlash(randomBtn);

}

function btnPress(){
    let pressedButton = this;
    userFlash(pressedButton);

    userColor = pressedButton.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log("User Sequenece",userSeq);

    checkAns(userSeq.length-1);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    }, 100);
}



function checkAns(checkerId){
    // console.log("Current Level : ", level);
    // let checkerId = level-1;

    if(userSeq[checkerId]==gameSeq[checkerId]){
        // console.log("Same value");
        if(userSeq.length==gameSeq.length){
            body.classList.add("level-up");
        setTimeout(function (){
        body.classList.remove("level-up");
        },180)
           setTimeout(levelUp,1000);
           
        }
    }
        else{
            body.classList.add("game-over");
            setTimeout(function gameOver(){
                body.classList.remove("game-over");
            },150);

            let score = level-1;
            // scoreCounter.innerText = "Score : "+score;
            if(level==0){
                // console.log("ntry");
               scoreCounter.innerText = "Score : "+level;
            }else{
            scoreCounter.innerText = "Score : "+score;
            }
            let currentPlayer = document.createElement("li");
            currentPlayer.innerText = userName+" : "+score;
            highScorePanel.appendChild(currentPlayer);
            scoreCard.appendChild(scoreCounter);
            scoreChild = scoreChild+1;
            userNameCounter = userNameCounter+1;
            h2.innerHTML="GAME OVER!! PRESS ANY KEY TO START";
            resetGame();
        }
    
}
function resetGame(){
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0;
    
}


