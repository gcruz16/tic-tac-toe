//Select all Divs
let playerTurn = true;
let divAllBtn = document.querySelectorAll(".grid-item");
let resetBtn = document.querySelector(".button");
let counterMoves = 0;
let winnerCombinations = ["012", "345", "678", "258", "147", "036", "246", "048"];

console.log(divAllBtn);
let changeColor = (event) => {
    //console.log("2 " + playerTurn);
    counterMoves++;

    if (event.target.style.background !== "") {
        alert("Please select diferent square, square has been clicked and you should not be able to click it again");
    } else {
        if (playerTurn) {
            event.target.style.background = "red";

        } else {
            event.target.style.background = "blue";
        }
        playerTurn = !playerTurn;


        //console.log("3 " + playerTurn);
    }
    //Validate winner
    validateWinner();

};

let resetColor = (event) => {
    counterMoves = 0;
    //console.log("reset button");
    divAllBtn.forEach(myDiv => {
        myDiv.setAttribute("style", `background-color: white`);
    });
};

divAllBtn.forEach(myDiv => {
    console.log("item -->" + myDiv);
    myDiv.addEventListener('click', changeColor);
});

resetBtn.addEventListener('click', resetColor);


function validateWinner() {
    console.log("Validate winner: divAllBtn[0] background " + divAllBtn[0].style.background);
    console.log("Validate winner: divAllBtn[1] background " + divAllBtn[1].style.background);
    console.log("Validate winner: divAllBtn[2] background " + divAllBtn[2].style.background);
    console.log("Validate winner: divAllBtn[3] background " + divAllBtn[3].style.background);
    console.log("Validate winner: divAllBtn[4] background " + divAllBtn[4].style.background);
    console.log("Validate winner: divAllBtn[5] background " + divAllBtn[5].style.background);
    console.log("Validate winner: divAllBtn[6] background " + divAllBtn[6].style.background);
    console.log("Validate winner: divAllBtn[7] background " + divAllBtn[7].style.background);
    console.log("Validate winner: divAllBtn[8] background " + divAllBtn[8].style.background);

    if (divAllBtn[0].style.background === divAllBtn[1].style.background && divAllBtn[0].style.background === divAllBtn[2].style.background && divAllBtn[0].style.background !== "") {
        console.log(`1 Winner is ${divAllBtn[0].style.background} player`);
    }
    else if (divAllBtn[3].style.background === divAllBtn[4].style.background && divAllBtn[3].style.background === divAllBtn[5].style.background && divAllBtn[3].style.background !== "") {
        console.log(`2 Winner is ${divAllBtn[3].style.background} player`);

    }
    else if (divAllBtn[6].style.background === divAllBtn[7].style.background && divAllBtn[6].style.background === divAllBtn[8].style.background && divAllBtn[6].style.background !== "") {
        console.log(`3 Winner is ${divAllBtn[6].style.background} player`);
    }
    else if (divAllBtn[2].style.background === divAllBtn[5].style.background && divAllBtn[2].style.background === divAllBtn[8].style.background && divAllBtn[2].style.background !== "") {
        console.log(` 4 Winner is ${divAllBtn[2].style.background} player`);
    }
    else if (divAllBtn[1].style.background === divAllBtn[4].style.background && divAllBtn[1].style.background === divAllBtn[7].style.background && divAllBtn[1].style.background !== "") {
        console.log(`5 Winner is ${divAllBtn[1].style.background} player`);
    }
    else if (divAllBtn[0].style.background === divAllBtn[3].style.background && divAllBtn[0].style.background === divAllBtn[6].style.background && divAllBtn[0].style.background !== "") {
        console.log(`6 Winner is ${divAllBtn[0].style.background} player`);
    }
    else if (divAllBtn[2].style.background === divAllBtn[4].style.background && divAllBtn[2].style.background === divAllBtn[6].style.background && divAllBtn[2].style.background !== "") {
        console.log(`7 Winner is ${divAllBtn[2].style.background} player`);
    }
    else if (divAllBtn[0].style.background === divAllBtn[4].style.background && divAllBtn[0].style.background === divAllBtn[8].style.background && divAllBtn[0].style.background !== "") {
        console.log(`8 Winner is ${divAllBtn[0].style.background} player`);
    }
    else if (counterMoves === 9) {
        console.log("9 No winner yet");
    } else {
        console.log("No winner!!");
    }

}

