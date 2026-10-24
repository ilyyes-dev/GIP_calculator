
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");

const buttonPlus = document.getElementById("+");
const buttonMinus = document.getElementById("-");
const buttonMultiply = document.getElementById("*");
const buttonDivide = document.getElementById("/");
const buttonEquals = document.getElementById("=");
const buttonClear = document.getElementById("c");
const buttonDecimal = document.getElementById(".");
const buttonOpenParen = document.getElementById("(");
const buttonCloseParen = document.getElementById(")");
const buttonBackspace = document.getElementById("x");

const screen = document.getElementsByClassName("screen")[0];

screen.textContent = "0";

buttonBackspace.addEventListener("click", () => {
    if (screen.textContent.length > 1) {
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        screen.textContent = "0";
    }
});

buttonClear.addEventListener("click", () => {
    screen.textContent = "0";
});

buttonDecimal.addEventListener("click", () => {
    const parts = screen.textContent.split(/[+\-*\/()]/);
    const currentNumber = parts[parts.length - 1];

    if (!currentNumber.includes(".")) {
        if (currentNumber === "") {
            screen.textContent += "0";
        }

        screen.textContent += ".";
    }
});

buttonOpenParen.addEventListener("click", () => {
    if (screen.textContent === "0") {
        screen.textContent = "";
    }

    screen.textContent += "(";
});

buttonCloseParen.addEventListener("click", () => {
    if (screen.textContent === "0") {
        screen.textContent = "";
    }

    screen.textContent += ")";
});

button1.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "1";
});

button2.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "2";
});

button3.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "3";
});

button4.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "4";
});

button5.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "5";
});

button6.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "6";
});

button7.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "7";
});

button8.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "8";
});

button9.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "9";
});

button0.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "0";
});

buttonPlus.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "+";
});

buttonMinus.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "-";
});

buttonMultiply.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "*";
});

buttonDivide.addEventListener("click", () => {
    if (screen.textContent === "0") screen.textContent = "";
    screen.textContent += "/";
});

buttonEquals.addEventListener("click", () => {
    try {
        const result = eval(screen.textContent);

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        screen.textContent = String(result);
    } catch (err) {
        screen.textContent = "Error";

        setTimeout(() => {
            if (screen.textContent === "Error") {
                screen.textContent = "0";
            }
        }, 500);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
        document.getElementById(event.key).click();
    } else if (event.key === "+") {
        buttonPlus.click();
    } else if (event.key === "-") {
        buttonMinus.click();
    } else if (event.key === "*" || event.key === "x" || event.key === "X") {
        buttonMultiply.click();
    } else if (event.key === "/") {
        buttonDivide.click();
    } else if (event.key === "=" || event.key === "Enter") {
        event.preventDefault();
        buttonEquals.click();
    } else if (event.key === "c" || event.key === "C" || event.key === "Escape") {
        buttonClear.click();
    } else if (event.key === "Backspace") {
        buttonBackspace.click();
    } else if (event.key === ".") {
        buttonDecimal.click();
    } else if (event.key === "(") {
        buttonOpenParen.click();
    } else if (event.key === ")") {
        buttonCloseParen.click();
    }
});
