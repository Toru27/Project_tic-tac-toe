
let numberSwitch = 1;
let squares = [];
let circles = [];
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
                        return alert('hello');
                    }
                    else if(test4.classList.contains("square") && test5.classList.contains("square") && test6.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test7.classList.contains("square") && test8.classList.contains("square") && test9.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test1.classList.contains("square") && test4.classList.contains("square") && test7.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test2.classList.contains("square") && test5.classList.contains("square") && test8.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test3.classList.contains("square") && test6.classList.contains("square") && test9.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test1.classList.contains("square") && test5.classList.contains("square") && test9.classList.contains("square")) {
                        return alert('hello');
                    }
                    else if(test3.classList.contains("square") && test5.classList.contains("square") && test7.classList.contains("square")) {
                        return alert('hello');
                    }
                }
            }
            else {
                if(!box.classList.contains("square") && !box.classList.contains("circle")) {
                    box.classList.add("circle");
                    numberSwitch++;

                    if(test1.classList.contains("circle") && test2.classList.contains("circle") && test3.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test4.classList.contains("circle") && test5.classList.contains("circle") && test6.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test7.classList.contains("circle") && test8.classList.contains("circle") && test9.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test1.classList.contains("circle") && test4.classList.contains("circle") && test7.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test2.classList.contains("scircle") && test5.classList.contains("circle") && test8.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test3.classList.contains("circle") && test6.classList.contains("circle") && test9.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test1.classList.contains("circle") && test5.classList.contains("circle") && test9.classList.contains("circle")) {
                        return alert('hello');
                    }
                    else if(test3.classList.contains("circle") && test5.classList.contains("circle") && test7.classList.contains("circle")) {
                        return alert('hello');
                    }
                }
            }
        })

    })
};

tablePlay();

// console.log(test3)
// console.log(elemBy);
// console.log(elemBy);
// console.log(test4);



// if((box.dataset.box == 'one' && box.dataset.box == 'two' && box.dataset.box == 'three') && box.classList.contains("square")) {
//     alert('hello');
// }



// test2 = elemBy.filter(elem => elem.classList.contains('square'));



// function findWin() {
//     document.querySelectorAll(".square").forEach(box => elemBy.push(box));    
//     console.log(elemBy);
// };

// findWin();


// console.log(squares);
// console.log(circles);



// function tablePlay() {
//     document.querySelectorAll(".box").forEach(box => {
//         box.addEventListener("click", () => {
//             if(numberSwitch % 2 == 0) {
//                 if(!box.classList.contains("square") && !box.classList.contains("circle")) {
//                     box.classList.add("square");
//                     numberSwitch++;
//                 }
//             }
//             else {
//                 if(!box.classList.contains("square") && !box.classList.contains("circle")) {
//                     box.classList.add("circle");
//                     numberSwitch++;
//                 }
//             }
//         })
//     });
// }

// document.querySelectorAll(".box").forEach(elem => {
//     elemBy.push(elem);
//     test3 = elemBy.indexOf(elem);
//     while (test3 != -1) {
//         elemBy.push(test3);
//         test3 = elemBy.indexOf(elem, test3 + 1);
//     }
// })
    








