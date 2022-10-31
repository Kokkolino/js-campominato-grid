// variables
let x = 1;
let z;
// getting the element into the js
const container = document.getElementById('container');
const btnStart = document.getElementById('start');
const btnClear = document.getElementById('clear');
// linking the functions
btnStart.addEventListener('click', start);
btnStart.addEventListener('click', disableButton);
btnClear.addEventListener('click', clearBox);
btnClear.addEventListener('click', enableButton);


// function
function start(){
    // input
    squareNumber = parseInt(document.getElementById('inputNumber').value);
    
    
    
    if (squareNumber < 0){
        squareNumber = squareNumber * -1;
    }
    
    for (k = 1; k <= squareNumber; ++k) {
        // create row
        let div = document.createElement('div');
        div.setAttribute('class', 'sub-container');
        div.setAttribute('id', `row${k}` );
        document.getElementById('container').appendChild(div);

        for (let i = 1; i <= squareNumber; ++i) {
            // create element
            let div = document.createElement('div');
            div.setAttribute('id', x );
            div.setAttribute('class', 'cell');
            document.getElementById(`row${k}`).appendChild(div);
            document.getElementById(x).innerHTML = `<span>${x}</span>`;
            x++;
        }
    }
        
}

// clear buttons and other functionalities
function clearBox(){
    document.getElementById('container').innerHTML = "";
    document.getElementById("inputNumber").value = "";
    x = 1;
}

function disableButton() {
    document.getElementById("start").disabled = true;
    document.getElementById("clear").disabled = false;
}

function enableButton() {
    document.getElementById("start").disabled = false;
    document.getElementById("clear").disabled = true;
    
}
btnClear.disabled = true;