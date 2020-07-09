//Select all Divs
let playerTurn = true;
let divAllBtn = document.querySelectorAll(".grid-item");
let resetBtn = document.querySelector(".button");
let counterMoves = 0;
let bluePlayerScore = 0;
let redPlayerScore = 0;
let winnerCombinations = ["012", "345", "678", "258", "147", "036", "246", "048"];
let divBlueScore = document.querySelector("#blue-score");
let divRedScore = document.querySelector("#red-score");
let defaultCurrentPlayer = "Current player: ";
let divMessage = document.querySelector("#message");
let divCurrentPlayer = document.querySelector("#current-player");
let message = "";
let clickReset = false;


window.addEventListener("load", loadValues);

function loadValues() {
    divCurrentPlayer.innerHTML = `<b>Current player: </b> red`;
    divMessage.style.background = "lightseagreen";
};

console.log(divAllBtn);
let changeColor = (event) => {
    event.preventDefault();
    //console.log("2 " + playerTurn);
    counterMoves++;

    if (event.target.style.background !== "" && !clickReset) {
        alert("Please select diferent square, square has been clicked and you should not be able to click it again");
        counterMoves--;
    } else if (clickReset) {
        alert("Please reset the game");
        resetBtn
        counterMoves--;
    } else {
        if (playerTurn) {
            event.target.style.background = "red";
            divCurrentPlayer.innerHTML = `<b>Current player: </b> blue`;
            divCurrentPlayer.style.background = "blue";

        } else {
            event.target.style.background = "blue";
            divCurrentPlayer.innerHTML = `<b>Current player: </b> red`;
            divCurrentPlayer.style.background = "red";
        }
        playerTurn = !playerTurn;

        //Validate winner
        validateWinner();

    }


};

let resetColor = (event) => {
    counterMoves = 0;
    message = "";
    //console.log("reset button");
    divCurrentPlayer.innerHTML = `<b>Current player: </b> red`;
    divCurrentPlayer.style.background = "red";
    clickReset = false;
    divMessage.style.background = "lightseagreen";
    divMessage.innerHTML = `Message:`;
    divAllBtn.forEach(myDiv => {
        myDiv.setAttribute("style", `background-color: white`);
    });
};

divAllBtn.forEach(myDiv => {
    myDiv.addEventListener('click', changeColor);
});

resetBtn.addEventListener('click', resetColor);


function validateWinner() {

    let displayMessage = "";
    let winPlayer = "";

    if ((divAllBtn[0].style.background === divAllBtn[1].style.background && divAllBtn[0].style.background === divAllBtn[2].style.background && divAllBtn[0].style.background !== "") ||
        (divAllBtn[0].style.background === divAllBtn[4].style.background && divAllBtn[0].style.background === divAllBtn[8].style.background && divAllBtn[0].style.background !== "") ||
        (divAllBtn[0].style.background === divAllBtn[3].style.background && divAllBtn[0].style.background === divAllBtn[6].style.background && divAllBtn[0].style.background !== "")) {
        winPlayer = divAllBtn[0].style.background;
        //console.log(winPlayer);
    }
    else if ((divAllBtn[3].style.background === divAllBtn[4].style.background && divAllBtn[3].style.background === divAllBtn[5].style.background && divAllBtn[3].style.background !== "") ||
        (divAllBtn[2].style.background === divAllBtn[4].style.background && divAllBtn[2].style.background === divAllBtn[6].style.background && divAllBtn[2].style.background !== "") ||
        (divAllBtn[1].style.background === divAllBtn[4].style.background && divAllBtn[1].style.background === divAllBtn[7].style.background && divAllBtn[1].style.background !== "")) {
        winPlayer = divAllBtn[4].style.background;
        //console.log(winPlayer);
    }
    else if ((divAllBtn[6].style.background === divAllBtn[7].style.background && divAllBtn[6].style.background === divAllBtn[8].style.background && divAllBtn[6].style.background !== "") ||
        (divAllBtn[2].style.background === divAllBtn[5].style.background && divAllBtn[2].style.background === divAllBtn[8].style.background && divAllBtn[2].style.background !== "")) {
        winPlayer = divAllBtn[8].style.background;
        //console.log(winPlayer);

    }
    else {
        if (counterMoves === 9 && winPlayer === "") {
            message = "Message: it's a tie";
        }
        else if (winPlayer !== "") {
            console.log("No winner!!");
        }
    }

    if (winPlayer !== "") {
        displayMessage = `Message: ${winPlayer} player won!`;
        divMessage.innerHTML = displayMessage;
        divMessage.style.background = `${winPlayer}`;
        clickReset = true;

        if (winPlayer === "blue") {
            bluePlayerScore++;
            divBlueScore.innerHTML = bluePlayerScore;
        } else {
            redPlayerScore++;
            divRedScore.innerHTML = redPlayerScore;
        }
        //console.log(displayMessage);
    }
    if (message !== "") {
        divMessage.innerHTML = message;
        divMessage.style.background = "lightseagreen";
    }


}

