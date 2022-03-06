
let numberSwitch = 1;

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        if(numberSwitch % 2 == 0) {
            if(!box.classList.contains("square") && !box.classList.contains("circle")) {
                box.classList.add("square");
                numberSwitch++;
            }
        }

        else {
            if(!box.classList.contains("square") && !box.classList.contains("circle")) {
                box.classList.add("circle");
                numberSwitch++;
            }
        }
    })
});
