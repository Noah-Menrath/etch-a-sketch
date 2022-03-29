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

    // if (sizeGrid <= 100) {
    //     for (i=0; i < sizeGrid; i++) {
    //         const div = document.createElement('div');
    //         div.setAttribute('class', 'square');
    //         container.append(div);
        

    //         div.addEventListener('mouseover', changeColor);

    //         container.addEventListener('click', clearData);

    //         function clearData() {
    //             div.setAttribute('style', 'backgroundColor: white');
                
    //         };
    //     };

    //         linkClearButton.addEventListener("click", clearData);
    // } else {
    //     console.log("WOOO");
    // }



const size16 = document.getElementById("size16");





const form = document.getElementById('form');
form.addEventListener('submit', changeGridSize);

function changeGridSize(event) {
    if (form == size16) {
        console.log("YOOOOOOOOO");
    }
    else if (form == 1024) {
        console.log("HMMMMMMMMMMM");
    }
    else if (form == 4096) {
        console.log("DUDUUDDUDUUDUDU");
    } else {
        console.log("WHATTT????");
    }
    event.preventDefault();
}
   

};
function changeColor(event) {
    event.target.style.backgroundColor = "black";
};




















runGame();