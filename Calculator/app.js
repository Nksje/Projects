let runningTotal = 0;
let buffer = "0";
let previousOpeartor;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if(isNaN(value)){
        hadleSymbol(value);
    }else {
        hadleNumber(value);
    }
    screen.innerText = buffer;
}

function hadleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOpeartor === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOpeartor = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            hadleMath(symbol);
            break;
    }
}

function hadleMath(symbol){
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else {
        flushOperation(intBuffer);
    }
    previousOpeartor = symbol;
    buffer = '0';
}


function flushOperation(intBuffer){
    if (previousOpeartor === '+') {
        runningTotal += intBuffer;
    }else if(previousOpeartor === '−'){
        runningTotal -= intBuffer;
    }else if(previousOpeartor === '×'){
        runningTotal *= intBuffer;
    }else if(previousOpeartor === '÷'){
        runningTotal /= intBuffer;
    }
}

function hadleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else {
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}


init();