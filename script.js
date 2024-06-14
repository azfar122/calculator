const number= document.querySelectorAll(".buttons")
const display = document.querySelector(".screen")
let previous;
let current;
let operator;

number.forEach(number => {
    number.addEventListener('click',function(){
        if(display.innerHTML == "0") {
            display.innerHTML = number.value;
        }
        else {
            display.innerHTML += number.value;
            previous=display.innerHTML

            if(number.value === "+" ||number.value === "-" || number.value === "*" || number.value === "/"){
                operator = number.value
                if(number.value === "+" ||number.value === "-" || number.value === "*" || number.value === "/"){

                    
                }

            }
        }

        

     });




});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        display.innerHTML = display.innerHTML.slice(0, -1);
        if(display.innerHTML == '') {
            display.innerHTML = 0;
        }
    }
    else if (event.keyCode >= 48 && event.keyCode <= 57) {
        if(display.innerHTML == 0) {
            display.innerHTML = event.key;
        }
        else {
            display.innerHTML += event.key;
        }
}})