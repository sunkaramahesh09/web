let started = false;

let h2 = document.querySelector("h2");
let btn = document.querySelector(".btn");

let btns = document.querySelectorAll(".btn");

let test = document.querySelector(".test");


document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        h2.innerText = "Game started !";

        startGame();
    }
});


function userOne(){
    for(btnone of btns){
        btnone.addEventListener("click",)
    }
}

function userTwo(){
    for(btnone of btns){
        btnone.addEventListener("click",function(){
            btnone.classList.add("userColorTwo");
        })
    }
}

function startGame(){
    userOne();
    userTwo();
}