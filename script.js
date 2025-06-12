const inputPlayer = document.getElementById("inputPlayer");
const addPlayer = document.getElementById("addPlayer");
const startGameBtn = document.getElementById("startGame");
const playerChoosing = document.querySelector(".output h2") ;
const output = document.querySelector(".output")
// frankly or dare btns :
const franklybtn = document.getElementById("frankly");
const dareybtn = document.getElementById("dare");

const doIt = document.getElementById("do-it") ;
// list players :
const playersList = document.querySelector(".playersList");
const showListBtn = document.getElementById("showPlayersList");
const hideListBtn = document.getElementById("hidePlayerList")
const list = document.querySelector(".list");

const choosePlayer = document.getElementById("choosePlayer")

showListBtn.addEventListener("click" , showList) ;
function showList(){
    playersList.style.left = "5px" ;
}
hideListBtn.addEventListener("click" , hideList) ;
function hideList(){
    playersList.style.left = "-100%" ;
}

// ...existing code...

let players = [];
let playerIndex = 1 ;

addPlayer.addEventListener("click", addPlayerToGame);

function addPlayerToGame() {
    const inputValue = inputPlayer.value;
    if (inputValue.length > 0 && players.length < 8) {
        playerIndex++ ;
        inputPlayer.placeholder = `player ${playerIndex}`  ;
        if(playerIndex > 8){
            inputPlayer.placeholder ="no more players"  ;
            inputPlayer.disabled = true; 
        }
        players.push(inputValue);
        let playerItem = document.createElement("li");
        playerItem.textContent = inputValue;
        list.appendChild(playerItem);
        console.log(players);
        inputPlayer.value = "";
    } else {
        alert("Write name's player and remember (you can't add a players more than 8 !)");
    }
}

// Move this function and event listener OUTSIDE addPlayerToGame
function startGame() {
    if (players.length === 0) {
        alert("You must add players before starting game");
        return;
    }
    let randomNumb = Math.floor(Math.random() * players.length);
    let randomPlayer = players[randomNumb];
    playerChoosing.textContent = `It's "${randomPlayer}" pls choose one`;

    // Remove old buttons if they exist
    
    // Create new buttons
    const franklyBtn = document.createElement("button");
    franklyBtn.classList.add("btn");
    franklyBtn.setAttribute("id", "frankly");
    franklyBtn.innerHTML = "Frankly";

    const dareBtn = document.createElement("button");
    dareBtn.classList.add("btn");
    dareBtn.setAttribute("id", "dare");
    dareBtn.innerHTML = "Dare";

    const divBtns = document.createElement("div");
    divBtns.classList.add("franklyOrDare");

    divBtns.appendChild(franklyBtn);
    divBtns.appendChild(dareBtn);
    output.appendChild(divBtns);

    startGameBtn.disabled = true ;
    inputPlayer.disabled = true ;
    inputPlayer.placeholder = "game started" ;
    // Add event listeners to the new buttons :
    franklyBtn.addEventListener("click" , ()=>{
        let randomFrankly = Math.floor(Math.random() * franklyArray.length);
        output.innerHTML += `
            <div class="outputText">
                <p id="do-it"><b>${randomPlayer}</b> ${franklyArray[randomFrankly]}</p>
            </div>
        `;
        startGameBtn.disabled = true ;
    }) ;
    dareBtn.addEventListener("click" , ()=>{
        let randomDare = Math.floor(Math.random() * dareArray.length);
        output.innerHTML += `
            <div class="outputText">
                <p id="do-it"><b>${randomPlayer}</b> ${dareArray[randomDare]}</p>
            </div>
        `;
        startGameBtn.disabled = true ;
    })
}

startGameBtn.addEventListener("click", startGame);

