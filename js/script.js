let left = document.getElementById("left");
let right = document.getElementById("right");
let lbtn = document.body.firstElementChild.firstElementChild.nextElementSibling;
let rbtn = document.body.firstElementChild.lastElementChild.previousElementSibling;

left.addEventListener("focus", () => {
    lbtn.style.display = "block";
    rbtn.style.display = "none";
});

right.addEventListener("focus", () => {
    rbtn.style.display = "block";
    lbtn.style.display = "none";
    // console.log("123");
});

lbtn.addEventListener("click", () => {

    if (left.value == "") {
        alert("Please Enter anything in Left Textbox");
    }
    else {
        right.value = left.value;
        left.value = "";
        lbtn.style.display = "none";
        rbtn.style.display = "block";
    }

});

rbtn.addEventListener("click", () => {

    if (right.value == "") {
        alert("Please Enter anything in right Textbox");
    }
    else {
        left.value = right.value;
        right.value = "";
        rbtn.style.display = "none";
        lbtn.style.display = "block";
    }
});
