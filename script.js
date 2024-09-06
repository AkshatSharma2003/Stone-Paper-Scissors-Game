let userScore=0;
let compScore=0;

const user=document.querySelector("#userscore")
const comp=document.querySelector("#computerscore")

const choices=document.querySelectorAll(".choice");

/** @type {HTMLDivElement} */
const msg=document.querySelector('#msg');


const genComputerChoice= () =>{
    let options=["rock","paper","scissor"]
    let chosenVal=Math.floor(Math.random() * 3)
    return options[chosenVal]
}

const drawGame =() =>{
    msg.innerText="Game Draw! Play Again!"
    msg.style.backgroundColor="yellow"
}

const showWinner =(userWin) =>{
    if(userWin){
        msg.innerText="Congrats! You Win!"
        msg.style.backgroundColor="green"
        userScore++
        user.innerHTML=userScore
        
    }
    else{
        msg.innerText="You lose"
        msg.style.backgroundColor="red"
        compScore++
        comp.innerHTML=compScore
    }
};

const playGame = (userChoice) =>{
    console.log("your choice = ",userChoice)
    // computer generated choice
    const compChoice=genComputerChoice()
    console.log("computer choice =" ,compChoice)
    
    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin=true
        if(userChoice ==="rock"){
            userWin = compChoice === "paper"? false:true
        }
        else if(userChoice ==="paper"){
            userWin = compChoice === "scissor"?false:true
        }
        else{
            userWin = compChoice === "rock"?false:true
        }
        showWinner(userWin)
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    });
});