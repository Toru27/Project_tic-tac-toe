winbar = document.querySelector(".winbar");
let numberSwitch = 1;
let elemBy = [];

let test1;
let test2;
let test3;
let test4;
let test5;
let test6;
let test7;
let test8;

function tablePlay() {
    document.querySelectorAll(".box").forEach(box => {
        elemBy.push(box);
        test1 = elemBy[0];
        test2 = elemBy[1];
        test3 = elemBy[2];
        test4 = elemBy[3];
        test5 = elemBy[4];
        test6 = elemBy[5];
        test7 = elemBy[6];
        test8 = elemBy[7];
        test9 = elemBy[8];
        
        box.addEventListener("click", () => {
            if(numberSwitch % 2 == 0) {
                if(!box.classList.contains("square") && !box.classList.contains("circle")) {
                    box.classList.add("square");
                    numberSwitch++;

                    if(test1.classList.contains("square") && test2.classList.contains("square") && test3.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test4.classList.contains("square") && test5.classList.contains("square") && test6.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test7.classList.contains("square") && test8.classList.contains("square") && test9.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test1.classList.contains("square") && test4.classList.contains("square") && test7.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test2.classList.contains("square") && test5.classList.contains("square") && test8.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test3.classList.contains("square") && test6.classList.contains("square") && test9.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test1.classList.contains("square") && test5.classList.contains("square") && test9.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                    else if(test3.classList.contains("square") && test5.classList.contains("square") && test7.classList.contains("square")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("playerXwon");
                        document.querySelector(".player").innerHTML = "Player X won!";
                    }
                }
            }
            else {
                if(!box.classList.contains("square") && !box.classList.contains("circle")) {
                    box.classList.add("circle");
                    numberSwitch++;

                    if(test1.classList.contains("circle") && test2.classList.contains("circle") && test3.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test4.classList.contains("circle") && test5.classList.contains("circle") && test6.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test7.classList.contains("circle") && test8.classList.contains("circle") && test9.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test1.classList.contains("circle") && test4.classList.contains("circle") && test7.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test2.classList.contains("scircle") && test5.classList.contains("circle") && test8.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test3.classList.contains("circle") && test6.classList.contains("circle") && test9.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test1.classList.contains("circle") && test5.classList.contains("circle") && test9.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                    else if(test3.classList.contains("circle") && test5.classList.contains("circle") && test7.classList.contains("circle")) {
                        winbar.classList.remove("hidden");
                        winbar.classList.add("player0won");
                        document.querySelector(".player").innerHTML = "Player 0 won!";
                    }
                }
            }
        })

        let resetButton = document.querySelector(".reset");
        resetButton.addEventListener("click", () => {
        winbar.classList.remove("player0won");
        winbar.classList.remove("playerXwon");
        winbar.classList.add("hidden");
        box.classList.remove("square");
        box.classList.remove("circle");
        })
    })
};

tablePlay();
