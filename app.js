winbar = document.querySelector(".winbar");
let numberSwitch = 1;
let playerXscore = 0;
let player0score = 0;
let tilesContainer = [];

let tile1;
let tile2;
let tile3;
let tile4;
let tile5;
let tile6;
let tile7;
let tile8;
let tile9;

function tablePlay() {
    document.querySelectorAll(".box").forEach(box => {
        tilesContainer.push(box);
        tile1 = tilesContainer[0];
        tile2 = tilesContainer[1];
        tile3 = tilesContainer[2];
        tile4 = tilesContainer[3];
        tile5 = tilesContainer[4];
        tile6 = tilesContainer[5];
        tile7 = tilesContainer[6];
        tile8 = tilesContainer[7];
        tile9 = tilesContainer[8];
        
        box.addEventListener("click", () => {
            if(numberSwitch % 2 == 0) {
                if(!box.classList.contains("playerX") && !box.classList.contains("player0")) {
                    box.classList.add("playerX");
                    numberSwitch++;

                    if((tile1.classList.contains("playerX") && tile2.classList.contains("playerX") && tile3.classList.contains("playerX")) || (tile4.classList.contains("playerX") && tile5.classList.contains("playerX") && tile6.classList.contains("playerX"))
                    || (tile7.classList.contains("playerX") && tile8.classList.contains("playerX") && tile9.classList.contains("playerX")) || (tile1.classList.contains("playerX") && tile4.classList.contains("playerX") && tile7.classList.contains("playerX"))
                    || (tile2.classList.contains("playerX") && tile5.classList.contains("playerX") && tile8.classList.contains("playerX")) || (tile3.classList.contains("playerX") && tile6.classList.contains("playerX") && tile9.classList.contains("playerX"))
                    || (tile1.classList.contains("playerX") && tile5.classList.contains("playerX") && tile9.classList.contains("playerX")) || (tile3.classList.contains("playerX") && tile5.classList.contains("playerX") && tile7.classList.contains("playerX"))) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");                      
                        playerXscore++;
                        document.querySelector(".showWinner").innerHTML = "Player X won!";
                        document.querySelector("#playerXscore").innerHTML = `Player <span>X</span> wins: ${playerXscore}`;
                    }
                
                    else if((tile1.classList.contains("playerX") || tile1.classList.contains("player0")) && (tile2.classList.contains("playerX") || tile2.classList.contains("player0")) && (tile3.classList.contains("playerX") || tile3.classList.contains("player0")) && (tile4.classList.contains("playerX") || tile4.classList.contains("player0")) && (tile5.classList.contains("playerX") || tile5.classList.contains("player0")) && (tile6.classList.contains("playerX") || tile6.classList.contains("player0")) && (tile7.classList.contains("playerX") || tile7.classList.contains("player0")) && (tile8.classList.contains("playerX") || tile8.classList.contains("player0")) && (tile9.classList.contains("playerX") || tile9.classList.contains("player0"))) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("tie");
                        document.querySelector(".showWinner").innerHTML = "Tie!";
                    }
                }
            }
            else {
                if(!box.classList.contains("playerX") && !box.classList.contains("player0")) {
                    box.classList.add("player0");
                    numberSwitch++;

                    if((tile1.classList.contains("player0") && tile2.classList.contains("player0") && tile3.classList.contains("player0")) || (tile4.classList.contains("player0") && tile5.classList.contains("player0") && tile6.classList.contains("player0"))
                    || (tile7.classList.contains("player0") && tile8.classList.contains("player0") && tile9.classList.contains("player0")) || (tile1.classList.contains("player0") && tile4.classList.contains("player0") && tile7.classList.contains("player0"))
                    || (tile2.classList.contains("player0") && tile5.classList.contains("player0") && tile8.classList.contains("player0")) || (tile3.classList.contains("player0") && tile6.classList.contains("player0") && tile9.classList.contains("player0"))
                    || (tile1.classList.contains("player0") && tile5.classList.contains("player0") && tile9.classList.contains("player0")) || (tile3.classList.contains("player0") && tile5.classList.contains("player0") && tile7.classList.contains("player0"))) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");               
                        player0score++;
                        document.querySelector(".showWinner").innerHTML = "Player 0 won!";
                        document.querySelector("#player0score").innerHTML = `Player <span>0</span> wins: ${player0score}`;
                    }
                    
                    else if((tile1.classList.contains("playerX") || tile1.classList.contains("player0")) && (tile2.classList.contains("playerX") || tile2.classList.contains("player0")) && (tile3.classList.contains("playerX") || tile3.classList.contains("player0")) && (tile4.classList.contains("playerX") || tile4.classList.contains("player0")) && (tile5.classList.contains("playerX") || tile5.classList.contains("player0")) && (tile6.classList.contains("playerX") || tile6.classList.contains("player0")) && (tile7.classList.contains("playerX") || tile7.classList.contains("player0")) && (tile8.classList.contains("playerX") || tile8.classList.contains("player0")) && (tile9.classList.contains("playerX") || tile9.classList.contains("player0"))) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("tie");
                        document.querySelector(".showWinner").innerHTML = "Tie!";
                    }
                }
            }
        })

        let resetTableButton = document.querySelector(".resettable");
        resetTableButton.addEventListener("click", () => {
        winbar.classList.remove("player0won");
        winbar.classList.remove("playerXwon");
        winbar.classList.remove("tie");
        winbar.classList.add("hidden");
        box.classList.remove("playerX");
        box.classList.remove("player0");
        })

        let resetScoreButton = document.querySelector(".resetscore");
        resetScoreButton.addEventListener("click", () => {
        player0score = 0;
        playerXscore = 0;
        document.querySelector("#player0score").innerHTML = `Player <span>0</span> wins: ${player0score}`;
        document.querySelector("#playerXscore").innerHTML = `Player <span>X</span> wins: ${playerXscore}`;
        })
    })
};

tablePlay();
