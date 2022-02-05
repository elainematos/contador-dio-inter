var currentNumberWrapp = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapp.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapp.innerHTML = currentNumber;
    
}
function mudaCor() {
    if(currentNumber >= 0 ) {
        document.getElementById ('currentNumber').style.cor = 'white';        

    }else {
        document.getElementById ('currentNumber').style.cor = 'red';
    }

  
}

mudaCor();

