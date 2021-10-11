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

var input = [];
const result = document.querySelector('.js-calc-result');

function changeResult(param) {
    alert(param);
    result.innerHTML = param;
    console.log(param);
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
        return a + b;
    }
}

function mult(a, b) {
    if (checkIfNumbers(a, b)) {
        return a + b;
    }
}

function div(a, b) {
    if (checkIfNumbers(a, b)) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("Cannot divide by 0.")
        }
    }
}
