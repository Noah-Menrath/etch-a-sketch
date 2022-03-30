const body = document.querySelector('body');


const container = document.createElement('div');

container.setAttribute('id', 'container');

o = (16 * 16); // have an input box for how many boxes user wants or even have a few button choices //

const linkClearButton = document.querySelector("#clearButton");

const sizeGrid = document.querySelector("#inputBox")

body.append(container);

function runGame() {
    for (i=0; i < o; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
    

        div.addEventListener('mouseover', changeColor);

        container.addEventListener('click', clearData);

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }

        linkClearButton.addEventListener("click", clearData);

      
    };

    





};


function changeColor(event) {
    event.target.style.backgroundColor = "black";
};






const size16 = document.getElementById("size16");
const size32 = document.getElementById("size32");
const size64 = document.getElementById("size64");

function changeGridSize() {
// add something like this: if the submit button is clicked, then do this: //
    if (size16.checked == true) {
        console.log("Changing to 16x16 grid size.");
    }
    else if (size32.checked == true) {
        console.log("Changing to 32x32 grid size.");
    }
    else if (size64.checked == true) {
        console.log("Changing to 64x64 grid size.");
    } 
    else {
        console.log("NOOOOOOOOOOOOOOOOOO!!!!!")
    }
};


const submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', changeGridSize);




runGame();