let gameSeq = [] ; //track game sequence with user sqquence 
let userSeq = [] ; //user sequnce

let btnss = ["yellow" , "red" , "purple", "green"];

let started = false ;//Game not start
let level = 0 ; //after keypress track level
let h2 = document.querySelector("h2");

//Step 1 ) Game starting by keyPrees


//keypress on document for start game 
document.addEventListener( "keypress" , function () {
  //console.log("game start");   
//want to one time game start 
if (started == false) {
    console.log("game start"); 
    started = true;

    //after start next step
    levelup();
}


 });



 //Step 2 After game start Random btn flash and increase level


 //Auto flasing button
 function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
             btn.classList.remove("flash");     
    }, 250);
 }



    
 //increase level
 function levelup() {
    userSeq = [];
    //increase level
    level++;

    h2.innerText="Level "+level;
//after starign and level up start flasing btn
 
//This forr Game Sequnce



//game choose random btn 
let ranIdx = Math.floor(Math.random()*4);
let ranColr  = btnss[ranIdx]; //random color of btns array

//
let randombtn = document.querySelector(`.${ranColr}`);

gameSeq.push(ranColr);
console.log(gameSeq);
btnflash(randombtn);
 }








function checkAns(idx){
   // console.log("curr level "+level);
//    let idx = level-1;

   if (userSeq[idx] === gameSeq[idx]) {
   console.log(userSeq);
    //if check userSeq last btn and gameSeq last btn for
       if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);
       }
    console.log("same value");
    }else{
        h2.innerText=`Game over score ${level}  Press any key to start`;
         reset();

    }
}


//This for USER Sequence USER which color press btn
 //pressed on btn
 function btnPress() {
    // console.log(this); //clicked btn = this btn

    let btn = this;
    btnflash(btn);
    useColor = btn.getAttribute("id");
     userSeq.push(useColor);
   // console.log(useColor);
    checkAns(userSeq.length-1);
 }


function reset(){
  started =false;
  gameSeq =[] ;
  userSeq =[] ;
  level = 0;
}

 let allBtns = document.querySelectorAll(".btn");

 for( btn of allBtns){
   btn.addEventListener("click" , btnPress);  //<=                       btnPress
 }


 console.log(gameSeq);
  console.log(userSeq);