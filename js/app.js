function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('btn-gen-pin').addEventListener('click',function(){
    const pin = getPin();
    const pinField = document.getElementById('gen-pin-field');
    pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const numberDisplay = document.getElementById('calculator-display');
    const previousTypedNumber = numberDisplay.value;
    if(isNaN(number)){
        if(number === 'C'){
            numberDisplay.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remaining = digits.join('');
            numberDisplay.value = remaining;
        }
    }
    else{
        numberDisplay.value = previousTypedNumber + number;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const currentPinField = document.getElementById('gen-pin-field');
    const currentPin = currentPinField.value;
    const typedPinField = document.getElementById('calculator-display');
    const typedPin = typedPinField.value;

    

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
    if(currentPin == typedPin){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';

        // let tryLeftNumber = document.getElementById('try-left');
        // let tryLeft = parseInt(tryLeftNumber.innerText);
        // tryLeft = tryLeft - 1 ;
        // console.log(tryLeft);
        // tryLeftNumber.innerText = tryLeft;
        // if(tryLeft<=0){
        //     alert('Generate New Pin');
        //     return;
        // }
    }
})