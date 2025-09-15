let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll('.choice');
const message=document.querySelector('#message');
const userscorePara=document.querySelector('#user-score');
const computerscorePara=document.querySelector('#computer-score');


const genCompChoice=()=>{
    const options =["rock", "paper", "scissors"];
    randIdx =Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    message.innerText="game was draw";
    message.style.backgroundColor="brown";
};
const showWinner = (userWins,userChoice, compChoice)=>{
    if(userWins){
        userscore++;
        userscorePara.innerText= userscore;
        message.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorePara.innerText=computerscore;
        message.innerText=`you lose! ${compChoice} beats  your ${userChoice}`;
        message.style.backgroundColor="red";
    }

};
const playGame=(userChoice)=>{
    console.log ("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=", compChoice);

    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWins= true;
        if(userChoice==="rock"){
            userWins=compChoice==="paper"? false: true;
        }else if(userChoice==="paper"){
            userWins= compChoice==="sicssors"?false: true;
        }else{
            userWins= compChoice==="rock"? false: true;
        }
         showWinner(userWins,userChoice, compChoice);
    }
   

};
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
})