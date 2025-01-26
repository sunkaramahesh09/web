let gameseq = [];
let userseq = [];
let highScore =[];

let started = false;
let level = 0;
let highest=0;

let btns = ["yellow","red","green","purple"];


let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelup();
    }
}); 

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    },250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
};

function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
};

function checkAns(idx){
    if(gameseq[idx]==userseq[idx])
    {
        if(gameseq.length==userseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h3.innerHTML = `Game Over! <b>Your score ${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
};

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

let h2 = document.querySelector("h2");


function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    highScore.push(level);
    highest = Math.max(...highScore);
    console.log(highScore);
    console.log(highest);
    h2.innerText = `Highest score is ${highest}`;
    
    level =0;
};