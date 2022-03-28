const body = document.querySelector('body');


const container = document.createElement('div');

container.setAttribute('id', 'container');

o = (16 * 16); // have an input box for how many boxes user wants or even have a few button choices //

body.append(container);
for (i=0; i < o; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.append(div);
    div.addEventListener("mouseover", function() {
        document.getElementsByClassName("square")[5].style.backgroundColor = "black";
    })
    

    div.addEventListener('mouseover', changeColor);


    
};
function changeColor(event) {
    event.target.style.backgroundColor = "black";
};


changeColor();

// const div = document.getElementsByClassName("square");

// function runGame() {
    
// runGame()

// div.addEventListener("mouseover", changeColor);