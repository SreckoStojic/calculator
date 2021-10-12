//import {add, sub, mult, div} from './utils';

// color theme slider event
document.querySelector(".js-theme-slider").addEventListener("click", function() {
    const LIGHT = "LIGHT";
    const DARK = "DARK";
    const DEFAULT = "DEFAULT";
    let themeColor = DEFAULT;
    switch (Number(document.querySelector(".js-theme-slider").value)) {
        case 1: { themeColor = DEFAULT; break; }
        case 2: { themeColor = LIGHT; break; }
        case 3: { themeColor = DARK; break; }
        default:
            alert("Something went wrong...");
    }

    switch (themeColor) {
        case LIGHT: {
            document.querySelector(".js-main").classList.remove("css-main-default");
            document.querySelector(".js-main").classList.remove("css-main-dark");
            document.querySelector(".js-main").classList.add("css-main-light");
            break;
        }
        case DARK: {
            document.querySelector(".js-main").classList.remove("css-main-default");
            document.querySelector(".js-main").classList.remove("css-main-light");
            document.querySelector(".js-main").classList.add("css-main-dark");
            break;
        }
        
        case DEFAULT: {
            document.querySelector(".js-main").classList.remove("css-main-light");
            document.querySelector(".js-main").classList.remove("css-main-dark");
            document.querySelector(".js-main").classList.add("css-main-default");
            break;
        }
        default:
            alert("Something went wrong...");
    }
});

let input = [];
let inputString = "";
const result = document.querySelector('.js-calc-result');


function changeResult(param) {
    if (input.length === 0 && parseInt(param).toString() === 'NaN') {
        alert('Input must start with number.');
    } else {
        input.push(param);
        inputString = input.toString().replaceAll(',', '');
        result.value = inputString;
    }
}

function resetResult() {
    input = [];
    result.value = 0;
}

function deleteLast() {
    if (input.length > 1) {
        input.pop(input.length - 1);
        inputString = input.toString().replaceAll(',', '');
        result.value = inputString;
    } else {
        resetResult();
    }
}

function calculateResult() {
    //inputString = eval(result.value);
    //input = [];
    //input.push(inputString);
    //result.value = inputString;
    let divPriority = false;
    let multPriority = false;

    input = createNewInputWithRegexSplit(inputString);
    console.log(`${input}`);
    let res = 0;

    for (let i = 0; i < input.length; i++) {
        if (input.includes('/')) {
            divPriority = true;
        }
        if (input.includes('*')) {
            multPriority = true;
        }
    }

    console.log(`div priority = ${divPriority}    mult priority = ${multPriority}`);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '+' && divPriority === false && multPriority === false) {
            res = add(Number(input[i - 1]), Number(input[i + 1]));
            input[i] = res;
            input.splice(i + 1, 1);
            input.splice(i - 1, 1);
            inputString = input.toString().replaceAll(',', '');
            if  (input.length > 1){
                calculateResult();
            }
            break;
        } else if  (input[i] === '-' && divPriority === false && multPriority === false) {
            res = sub(Number(input[i - 1]), Number(input[i + 1]));
            input[i] = res;
            input.splice(i + 1, 1);
            input.splice(i - 1, 1);
            inputString = input.toString().replaceAll(',', '');
            if  (input.length > 1){
                calculateResult();
            }
            break;
        }
        else if (input[i] === '*' && divPriority === false) {
            res = mult(Number(input[i - 1]), Number(input[i + 1]));
            input[i] = res;
            input.splice(i + 1, 1);
            input.splice(i - 1, 1);
            inputString = input.toString().replaceAll(',', '');
            if  (input.length > 1){
                calculateResult();
            }
            break;
        }
        else if (input[i] === '/') {
            res = div(Number(input[i - 1]), Number(input[i + 1]));          
            input[i] = res;
            input.splice(i + 1, 1);
            input.splice(i - 1, 1);
            inputString = input.toString().replaceAll(',', '');
            if (input.length > 1) {
                calculateResult();
            }
            break;
        }
        
        
    }
    result.value = input[0];
}



function createNewInputWithRegexSplit(inputString) {
    return inputString.split(/(?=[+\-\/\*]+)|(?<=[+\-\/\*]+)/g);
}

function checkIfNumbers(a, b){
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return true;
    } else {
        throw new Error("Type error. Numbers only.")
    }
}

function add(a, b) {
    if (checkIfNumbers(a, b)) {
        return a + b;
    }
}

function sub(a, b) {
    if (checkIfNumbers(a, b)) {
        return a - b;
    }
}

function mult(a, b) {
    if (checkIfNumbers(a, b)) {
        return a * b;
    }
}

function div(a, b) {
    if (checkIfNumbers(a, b)) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("Cannot divide by 0.");
        }
    }
}
