
// DOM stuff //
const body = document.querySelector('body');

const container = document.createElement('div');

container.setAttribute('id', 'container');

const newContainer = document.getElementById("container");

const linkClearButton = document.querySelector("#clearButton");

const sizeGrid = document.querySelector("#inputBox")

body.append(container);









// changes tile from white to black //
function changeColor(event) {
    event.target.style.backgroundColor = "black";
};




const size16 = document.getElementById("size16");
const size32 = document.getElementById("size32");
const size64 = document.getElementById("size64");

// Button changes grid to 16x16 //

function changeGridTo16() {
    for (i=0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
        div.addEventListener('mouseover', changeColor);

        

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }

        linkClearButton.addEventListener("click", clearData);
        size16.addEventListener("click", clearData);
        
        
    }
    
    console.log("Changing to 16x16 grid size.");
    
    
    
}

function createGridTo16() {
    container.style.gridTemplateColumns = "repeat(16, 6.25%)";
    container.style.gridTemplateRows = "repeat(16, 6.25%)";
}

size16.addEventListener("click", createGridTo16);


// Button changes grid to 32x32 //

function changeGridTo32() {
    for (i=0; i < 1024; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
        div.addEventListener('mouseover', changeColor);

        

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }

        linkClearButton.addEventListener("click", clearData);
        size32.addEventListener("click", clearData);
    
    }
    console.log("Changing to 32x32 grid size.");
    

}

function createGridTo32() {
    container.style.gridTemplateColumns = "repeat(32, 3.125%)";
    container.style.gridTemplateRows = "repeat(32, 3.125%)";
}

size32.addEventListener("click", createGridTo32);

// Button changes grid to 64x64 //

function changeGridTo64() {
    for (i=0; i < 4096; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
        div.addEventListener('mouseover', changeColor);

        
        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }
        

        linkClearButton.addEventListener("click", clearData);
        size64.addEventListener("click", clearData);
    
    }

    console.log("Changing to 64x64 grid size.");
    
}

function createGridTo64() {
    container.style.gridTemplateColumns = "repeat(64, 1.5625%)";
    container.style.gridTemplateRows = "repeat(64, 1.5625%)";
}

size64.addEventListener("click", createGridTo64);



// activates grid size change on button click //
size16.addEventListener("click", changeGridTo16);
size32.addEventListener("click", changeGridTo32);
size64.addEventListener("click", changeGridTo64);