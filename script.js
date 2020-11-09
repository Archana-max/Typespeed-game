window.addEventListener("load",init);

//available levels
const level ={
    easy:5,
    medium:3,
    hard:2
}

const currentLevel = level.easy;

//Global
let time=currentLevel;
let score=0;
let isPlaying;


//DOM Elements

const wordInput= document.querySelector("#word-input");
const currentWord=document.querySelector("#current-word");
const scoreDisplay=document.querySelector("#score");
const timeDisplay=document.querySelector("#time");
const message=document.querySelector("#message");
const seconds=document.querySelector("#seconds");

console.log(seconds);

const words=["echo","equality","dictionary","wounded","abduce","abhominable","galactoscope","Fadden","objectivism","relationship","sacristy","duplicitous","siblings","symptoms","definition","instructions","independent","extrovert","introvert"];

//Initialize the game
function init(){
   
    //show random words
    showWord(words);
    //check current word and input are same
    wordInput.addEventListener("input",startMatch);

    //timedisplay 
    setInterval(countdown,1000);
    //check Status
    setInterval(checkStatus,50);
}
//Get a random word
function showWord(words){
    let randomIndex=Math.floor((Math.random()*words.length));
    currentWord.innerHTML=words[randomIndex];
}

function startMatch(){
    if(matchWords()){
        isPlaying=true;
        time=6;
        showWord(words);
        wordInput.value='';
        score++;
    } 

    //if score is -1,display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
    scoreDisplay.innerHTML=score;
    }
}

//Match currentword to wordinput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML="Correct!!!";
        return true; 
    }else {
        message.innerHTML="";
        return false;
    }
}

//time display function
function countdown(){
    if(time > 0){
        time--;
    }
    else if(time === 0){
        //game over
        isPlaying==false;
    }
    timeDisplay.innerHTML=time;
}

function checkStatus(){
    
    if(!isPlaying && time === 0){
        message.innerHTML="Game Over!!!";
        score = -1;
    } else if(time=== 0)
    {
        message.innerHTML="Game Over!!!";
        score = -1;
    }
    
}