function validateBinary(){  
    let binary = document.getElementById('binary').value;
    let isBinary;

    for (binarys of binary) {
        if (binarys != 0 && binarys !=1) {
            isBinary = false;
            break
        } else {
            isBinary = true;
        }
    }
    return isBinary; 
}

function binToDec() {
    let result = 0;
    let indexBinary = 0;
    let binary = document.getElementById('binary').value;
    let binLength = binary.length;
    for (binLength; binLength > 0; binLength--, indexBinary++) { 
        result = result + (Number(binary[indexBinary]) * Math.pow(2, binLength - 1));
    }
    return result; 
}

function validate() {
    let binary = document.getElementById('binary').value;
    const isBinary = validateBinary();
    const form = document.getElementById('form');
    const result = document.getElementById('result');
    const span = document.querySelector('.container > span');
    
    if (binary == "") {
        form.classList.remove('invalid');
        form.classList.remove('valid');
        result.classList.remove('invalid');
        result.innerHTML = "";
    } else if (!isBinary){
        form.classList.remove('valid');
        form.classList.add('invalid');
        result.classList.add('invalid');
        result.innerHTML = " Enter only 0's and 1's";
    } else {
        form.classList.remove('invalid')
        form.classList.add('valid')
        result.classList.remove('invalid');
        const resultDec = binToDec();
        result.innerHTML = " " + resultDec;
        console.log(spanResult)
    }
}

