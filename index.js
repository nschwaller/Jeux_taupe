const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false // false si pas fini, true si fini
let score=0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min) + min);
}

function randomCloud(clouds){
    const uniqueCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[uniqueCloud];

    if(cloudSelect === lastCloud) {
        return randomCloud(clouds);
    }

    lastCloud = cloudSelect;

    return cloudSelect;
}

function showhead1() {
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(()=> {
        if(!timeUp) showhead1();
        cloud.classList.remove("up");
    },time);
}

function showhead2() {
    const time = randomTime(400,800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(()=> {
        if(!timeUp) showhead2();
        cloud.classList.remove("up");
    },time);
}

function showhead3() {
    const time = randomTime(250,500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(()=> {
        if(!timeUp) showhead3();
        cloud.classList.remove("up");
    },time);
}

function playerScore(e){
    if(!e.isTrusted) return ;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

heads.forEach(head => head.addEventListener("click",playerScore));

function startGame1(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    document.getElementById("morty-play").innerHTML= "Attraper les lapins";
    showhead1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "END";
            document.getElementById("morty-play").innerHTML= "JOUER";
            re();
        },2000);
    },10000);
}

function startGame2(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    document.getElementById("morty-play").innerHTML= "Attraper les lapins";
    showhead2();
    setTimeout(() => {
        timeUp = true;       
        setTimeout(() => {
            scoreBoard.textContent = "END";
            document.getElementById("morty-play").innerHTML= "JOUER";
            re();
        },2000);
    },10500);
}

function startGame3(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    document.getElementById("morty-play").innerHTML= "Attraper les lapins"
    showhead3();
    setTimeout(() => {
        timeUp = true;     
        setTimeout(() => {
            scoreBoard.textContent = "END";
            document.getElementById("morty-play").innerHTML= "JOUER";
            re();
        },2000);
    },11000);
}

//startGame1();
//showhead();

/* NIVEAUX */

const speed = 50;
var i = 0;
var text1 = "Novice";
var j = 0;
var text2 = "Intermédiaire";
var k =0;
var text3 = "Expert";

function typewriter1(){
    if(i < text1.length){
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typewriter1,speed);
    }
    else
    {
        i=0;
    }
}

function typewriter2(){
    if(j < text2.length){
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typewriter2,speed);
    }
    else
    {
        j=0;
    }
}

function typewriter3(){
    if(k < text3.length){
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typewriter3,speed);
    }
    else
    {
        k=0;
    }
}

function myClick() {
    for(var i =1;i<=3; i++){
        document.getElementById("demo"+i).addEventListener("click",function(){
            document.getElementById("demo1").innerHTML = "";
            document.getElementById("demo2").innerHTML = "";
            document.getElementById("demo3").innerHTML = "";
        })
    }
}

document.getElementById("morty-play").addEventListener("click",function(){
    typewriter1();
    typewriter2();
    typewriter3();
    myClick();
});

function re(){
      
    typewriter1();
    typewriter2();
    typewriter3();
    myClick();
}
