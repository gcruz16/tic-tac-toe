//Select all Divs
let playerTurn = true;
let divAllBtn = document.querySelectorAll(".grid-item");
let resetBtn = document.querySelector(".button");

console.log(divAllBtn);
let changeColor = (event) => {
    //console.log("2 " + playerTurn);
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
};

let resetColor = (event) => {
    console.log("reset button");
    divAllBtn.forEach(myDiv => {
        myDiv.setAttribute("style", `background-color: white`);
    });
};

let selectWinner = (event) => {
    console.log("Select winner");
}

divAllBtn.forEach(myDiv => {
    console.log("item -->" + myDiv);
    myDiv.addEventListener('click', changeColor);
});

resetBtn.addEventListener('click', resetColor);
