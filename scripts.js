const body = document.querySelector('body');


const container = document.createElement('div');

container.setAttribute('id', 'container');

const newContainer = document.getElementById("container");

o = (16 * 16); // have an input box for how many boxes user wants or even have a few button choices //

const linkClearButton = document.querySelector("#clearButton");

const sizeGrid = document.querySelector("#inputBox")

body.append(container);

// function runGame() {
//     for (i=0; i < o; i++) {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'square');
//         container.append(div);
    

//         div.addEventListener('mouseover', changeColor);

//         container.addEventListener('click', clearData);

//         function clearData() {
//             div.setAttribute('style', 'backgroundColor: white');
            
//         }

//         linkClearButton.addEventListener("click", clearData);

      
//     };

    





// };


function changeColor(event) {
    event.target.style.backgroundColor = "black";
};






// const size16 = document.getElementById("size16");
// const size32 = document.getElementById("size32");
// const size64 = document.getElementById("size64");

// function changeGridSize() {
// // add something like this: if the submit button is clicked, then do this: //
//     if (size16.checked == true) {
//         for (i=0; i < 256; i++) {
//             const div = document.createElement('div');
//             div.setAttribute('class', 'square');
//             container.append(div);
        
    
//             div.addEventListener('mouseover', changeColor);
    
//             container.addEventListener('click', clearData);
    
//             function clearData() {
//                 div.setAttribute('style', 'backgroundColor: white');
                
//             }
    
//             linkClearButton.addEventListener("click", clearData);
//         console.log("Changing to 16x16 grid size.");
//         }
//     }
//     else if (size32.checked == true) {
//         for (i=0; i < 1024; i++) {
//             const div = document.createElement('div');
//             div.setAttribute('class', 'square');
//             container.append(div);
        
    
//             div.addEventListener('mouseover', changeColor);
    
//             container.addEventListener('click', clearData);
    
//             function clearData() {
//                 div.setAttribute('style', 'backgroundColor: white');
                
//             }
    
//             linkClearButton.addEventListener("click", clearData);
//         console.log("Changing to 32x32 grid size.");
//         }
//     }
//     else if (size64.checked == true) {
//         for (i=0; i < 4096; i++) {
//             const div = document.createElement('div');
//             div.setAttribute('class', 'square');
//             container.append(div);
        
    
//             div.addEventListener('mouseover', changeColor);
    
//             container.addEventListener('click', clearData);
    
//             function clearData() {
//                 div.setAttribute('style', 'backgroundColor: white');
                
//             }
    
//             linkClearButton.addEventListener("click", clearData);
//         console.log("Changing to 64x64 grid size.");
//         }
//     } 
//     else {
//         console.log("NOOOOOOOOOOOOOOOOOO!!!!!")
//     }
// };


// const submitButton = document.getElementById("submitButton");

// submitButton.addEventListener('click', changeGridSize);




// runGame();


const size16 = document.getElementById("size16");
const size32 = document.getElementById("size32");
const size64 = document.getElementById("size64");


function changeGridTo16() {
    for (i=0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);


        div.addEventListener('mouseover', changeColor);

        container.addEventListener('click', clearData);

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }

        linkClearButton.addEventListener("click", clearData);
        
        
    }
    
    console.log("Changing to 16x16 grid size.");
    linkClearButton.addEventListener("click", clearData);
    
    
}

function createGridTo16() {
    container.style.gridTemplateColumns = "repeat(16, 6.25%)";
}

size16.addEventListener("click", createGridTo16);

function changeGridTo32() {
    for (i=0; i < 1024; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
    

        div.addEventListener('mouseover', changeColor);

        container.addEventListener('click', clearData);

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }

        linkClearButton.addEventListener("click", clearData);
        container.setAttribute('style', "gridTemplateColumns: repeat(32, 3.125%")
    
    }
    console.log("Changing to 32x32 grid size.");
    linkClearButton.addEventListener("click", clearData);

}

function createGridTo32() {
    container.style.gridTemplateColumns = "repeat(32, 3.125)";
}

size32.addEventListener("click", createGridTo32);

function changeGridTo64() {
    for (i=0; i < 4096; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.append(div);
    

        div.addEventListener('mouseover', changeColor);

        container.addEventListener('click', clearData);

        function clearData() {
            div.setAttribute('style', 'backgroundColor: white');
            
        }
        size16.addEventListener("click", clearData);

        linkClearButton.addEventListener("click", clearData);
    
    }

    console.log("Changing to 64x64 grid size.");
    linkClearButton.addEventListener("click", clearData);
}

function createGridTo64() {
    container.style.gridTemplateColumns = "repeat(64, 1.5625%)";
}

size64.addEventListener("click", createGridTo64);




size16.addEventListener("click", changeGridTo16);
size32.addEventListener("click", changeGridTo32);
size64.addEventListener("click", changeGridTo64);





function clearData() {
    div.setAttribute('style', 'backgroundColor: white');
    
}