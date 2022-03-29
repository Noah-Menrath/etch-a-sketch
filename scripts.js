const body = document.querySelector('body');


const container = document.createElement('div');

container.setAttribute('id', 'container');

o = (16 * 16); // have an input box for how many boxes user wants or even have a few button choices //

const linkClearButton = document.querySelector("#clearButton");

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




















runGame();





// const div = document.getElementsByClassName("square");

// function runGame() {
    
// runGame()

// div.addEventListener("mouseover", changeColor);