const numberButton1 = document.getElementById("numberButton1");
const numberButton2 = document.getElementById("numberButton2");
const numberButton3 = document.getElementById("numberButton3");
const numberButton4 = document.getElementById("numberButton4");
const numberButton5 = document.getElementById("numberButton5");
const numberButton6 = document.getElementById("numberButton6");
const numberButton7 = document.getElementById("numberButton7");
const numberButton8 = document.getElementById("numberButton8");
const numberButton9 = document.getElementById("numberButton9");
const numberButton0 = document.getElementById("numberButton0");
const history1 = document.getElementById("calc-history-box");


const sum = document.getElementById("plus");
const min = document.getElementById("minus");
const dev = document.getElementById("divide");
const multiply = document.getElementById("mult");
const dec = document.getElementById("dot");

const AC = document.getElementById("AC");
const HC = document.getElementById("HisCl");
const Delete = document.getElementById("Del");
const Fucktorial = document.getElementById("Fuc");
const leftBracket = document.getElementById("OpBr");
const rightBracket = document.getElementById("ClBr");
const Equals = document.getElementById("Equal")
const percent = document.getElementById("per")
const stepp = document.getElementById("step")

const output = document.getElementById("out");


numberButton1.addEventListener("click", () => {
   
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 1;
    }
    else  output.innerText += 1;
});

numberButton2.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 2;
    }
    else output.innerText += 2;
});

numberButton3.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 3;
    }
    else output.innerText += 3;
});

numberButton4.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 4;
    }
    else output.innerText += 4;
});

numberButton5.addEventListener("click", () => {
  
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 5;
    }
    else  output.innerText += 5;
});

numberButton6.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 6;
    }
    else output.innerText += 6;
});

numberButton7.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 7;
    }
    else output.innerText += 7;
});

numberButton8.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 8;
    }
    else output.innerText += 8;
});

numberButton9.addEventListener("click", () => {
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText+= 9;
    }
    else output.innerText+= 9;
    
});

numberButton0.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += 0;
    }
    else output.innerText += 0;
});
function keyboardHandler(e) {
    const buttonMap = {
        'Backspace': 'Del',
        'Delete': 'AC',
        '.': 'dot',
        '1': 'numberButton1',
        '2': 'numberButton2',
        '3': 'numberButton3',
        '4': 'numberButton4',
        '5': 'numberButton5',
        '6': 'numberButton6',
        '7': 'numberButton7',
        '8': 'numberButton8',
        '9': 'numberButton9',
        '0': 'numberButton0',
        '+': 'plus',
        '-': 'minus',
        '%': 'per',
        '*': 'mult',
        '/': 'divide',
        '^': 'step',
        '(': 'OpBr',
        ')': 'ClBr',
        'Enter': 'Equal',
        '=': 'Equal',
        '!': 'Fuc'
    };
    const id = buttonMap[e.key];
    if (id) {
        document.getElementById(id).click();
    }
}
window.addEventListener('keydown', keyboardHandler);
output.innerText="0";

function onKeyUp(e) { }
document.addEventListener('keyup', onKeyUp);
const checkIfLastOperator = () => {
    if (output.innerText[output.innerText.length - 1] === "+"
        || output.innerText[output.innerText.length - 1] === "/"
        || output.innerText[output.innerText.length - 1] === "*"
        || output.innerText[output.innerText.length - 1] === "-"
        || output.innerText[output.innerText.length - 1] === "^"
        || output.innerText[output.innerText.length - 1] === "."
        || output.innerText[output.innerText.length - 1] === "="        
    ) {
        return true;
    } else {
        return false;
    }
}

sum.addEventListener("click", () => {
    if (checkIfLastOperator()) {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "+";
    } else {
        output.innerText += "+";
    }
});

min.addEventListener("click", () => {
    if (checkIfLastOperator()) {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "-";
    } else {
        output.innerText += "-";
    }
});

dev.addEventListener("click", () => {
    if (checkIfLastOperator()) {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "/";
    } else {
        output.innerText += "/";
    }
});

multiply.addEventListener("click", () => {
    if (checkIfLastOperator()) {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "*";
    } else {
        output.innerText += "*"
    }
});

dec.addEventListener("click", () => {
    let tre = '';
        let a = output.innerText.lastIndexOf('+', '*', '/', '-');
        for (let i = output.innerText.length; i > 0; i--) {
            if (output.innerText[i] === '+' || output.innerText[i] === '-' || output.innerText[i] === '*' || output.innerText[i] === '/' || output.innerText[i] === ')' || output.innerText[i] === '(' || output.innerText[i] === '^' || output.innerText[i] === '%' || output.innerText.length == 0) {          
                break;
            } else {
                tre += output.innerText[i];
            }
        }
        if (tre.includes('.') || output.innerText[output.innerText.length - 1] === "+" || output.innerText[output.innerText.length - 1] === "-" || output.innerText[output.innerText.length - 1] === "*" || output.innerText[output.innerText.length - 1] === "/" || output.innerText[output.innerText.length - 1] === "%" || output.innerText[output.innerText.length - 1] === ".") {
           
        } else {
            output.innerText += ".";
        }  
});

AC.addEventListener("click", () => {
    output.innerText = "0";
})

Delete.addEventListener("click", () => {
    output.innerText = output.innerText.split("").filter((el, index) => {
        return index < output.innerText.length - 1
    }).join("");
    if ( output.innerText.length===0) {
        output.innerText = "0";
    }    
})

Fucktorial.addEventListener("click", () => {
    if (checkIfLastOperator() || output.innerText[output.innerText.length - 1] === "!" || output.innerText[output.innerText.length - 1] === "%") {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "!";
    } else {
        output.innerText += "!"
    }
})

leftBracket.addEventListener("click", () => {
    
    if (output.innerText[0]==="0"&&output.innerText.length===1){
        output.innerText="";
        output.innerText += "(";
    }
    else output.innerText += "(";
})

rightBracket.addEventListener("click", () => {
    if (!(output.innerText.length<2)) {
        output.innerText += ")";       
    } 
})

let his=[]; 

Equals.addEventListener("click", () => {
    if (GetAnswer(output.innerText) == undefined || isNaN(GetAnswer(output.innerText))) {
        output.innerText = "Ошибка"
    }
    else { 
        let caaa=output.innerText+" = "+GetAnswer(output.innerText)
        his.push(caaa);
        output.innerText = GetAnswer(output.innerText);
        GetHistory();        
     }
})

percent.addEventListener("click", () => {
    if (checkIfLastOperator() || output.innerText[output.innerText.length - 1] === "!" || output.innerText[output.innerText.length - 1] === "%") {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "%"
    } else {
        output.innerText += "%"
    }
})

stepp.addEventListener("click", () => {
    if (checkIfLastOperator()) {
        output.innerText = output.innerText.split("").filter((el, index) => {
            return index < output.innerText.length - 1
        }).join("");
        output.innerText += "^"
    } else {
        output.innerText += "^"
    }
})
HC.addEventListener("click",()=>{
    while(his.length!==0){
        his.pop();
    }
    history1.innerText="";
    
})

function GetHistory(){  
    history1.innerText="";
    let num=his.length-1
    for (let index = num; index >= 0; index--) {
        history1.innerText+="\n"+his[index];  
    }     
}
function GetAnswer(stroka) {
    let stack_p = [];
    let stack_o = [];
    Bracket();
    Minus();
    Umnojeniye();
    Plus();
    while (stroka.length !== 0) {
        StackByStep();
    }
    while (stack_o.length !== 0) {
        MathsCalculate();
    }

    function MathsCalculate() {        
        if ((stack_o[stack_o.length - 1]) !== "!" && (stack_o[stack_o.length - 1]) !== "%") {       
            let a = stack_p.pop();
            let b = stack_p.pop();
            switch (stack_o.pop()) {
                case "*":
                    let p = b * a;
                    stack_p.push(parseFloat(p));
                    break;
                case "/":
                    if (a !== 0) {
                        let d = b / a;
                        stack_p.push(parseFloat(d));
                    }
                    else window.location.href = "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%82%D0%B0%D0%BB%D0%B5%D1%86"

                    break;
                case "-":
                    let r = b - a
                    stack_p.push(parseFloat(r));
                    break;
                case "+":
                    let sa = b + a;
                    stack_p.push(parseFloat(sa));
                    break;
                case "^":
                    let ca = 1;
                    for (let index = 1; index <= a; index++) {
                        ca = ca * b;
                    }
                    stack_p.push(parseFloat(ca));
                    break;
                default:
                    break;
            }
        }
        if (stack_o[stack_o.length - 1] === "!" || stack_o[stack_o.length - 1] == "%") {
            let kek = stack_p.pop();
            switch (stack_o.pop()) {
                case "!":
                    let ex = 1;
                    for (let i = 1; i <= kek; i++) {
                        ex = ex * i;
                    }
                    stack_p.push(parseFloat(ex));
                    break;
                case "%":
                    let per = kek / "100";
                    stack_p.push(parseFloat(per));
                    break;
                default:
                    break;
            }
        }
    }
    function Priority(s) {
        switch (s) {
            case "+":
            case "-":
                return 1;
            case "*":
            case "/":
                return 2;
            case "^":
                return 3;
            case "!":
            case "%":
                return 4;
            default:
                return 5;
        }
    }
    function Olala() {
        if (stroka[0] === "!" || stroka[0] === "%") {
            stack_o.push(stroka[0]);
            stroka = stroka.substr(1);
            MathsCalculate();
        }
        else {
            let temp = stroka[0];      
            if (stack_o.length === 0 || (stack_o[stack_o.length - 1]) === "(") {
                stack_o.push(temp);             
                stroka = stroka.substr(1);       
            }
            else {
                if (Priority(stack_o[stack_o.length - 1]) > Priority(temp)) {                  
                    MathsCalculate();     
                }
                else if (Priority(stack_o[stack_o.length - 1]) < Priority(temp)) {
                    stack_o.push(temp);
                    stroka = stroka.substr(1);
                }
                else if (Priority(stack_o[stack_o.length - 1]) === Priority(temp)) {
                    MathsCalculate();

                    stack_o.push(temp);
                    stroka = stroka.substr(1);
                }
            }
        }
    }
    function GetNumberAndSymbol() {
        let k = 0;
        for (let i = 0; i < stroka.length; i++) {
            if (stroka[i] === "." || (stroka[i] >= "0" && stroka[i] <= "9")) {
                k++;           
            }
            else {
                i = stroka.length + 1; 
            }
        }
        if (k !== 0) {
            stack_p.push(parseFloat(stroka.split("").filter((el, index) => {
                return index < k;
            }).join("")))
            stroka = stroka.split("").filter((el, index) => {
                return index >= k
            }).join("");
        }
    }
    function StackByStep() {
        if (stroka[0] === "(") {
            stack_o.push("(");
            stroka = stroka.substr(1);
        }
        if (stroka[0] === "." || (stroka[0] >= "0" && stroka[0] <= "9")) {
            GetNumberAndSymbol();
        }

        if (stroka[0] === ")") {
            while (stack_o[stack_o.length - 1] !== "(") {
                MathsCalculate();
            }
            stack_o.pop();
            stroka = stroka.substr(1);
        }
        if (stroka[0] === "%" || stroka[0] === "+" || stroka[0] === "!" || stroka[0] === "^" || stroka[0] === "-" || stroka[0] === "*" || stroka[0] === "/") {
            Olala();
        }
    }
    function Minus() {
        for (let i = 0; i < stroka.length; i++) {
            if (stroka[0] === "-") {
                stroka = "0" + stroka.substring(0); i++;
            }
            if (stroka[i] == "(" && stroka[i + 1] == "-") {
                stroka = stroka.substring(0, i + 1) + "0" + stroka.substring(i + 1); i++;
            }
            if (stroka[0] === "+" || stroka[0] === "/" || stroka[0] === "*" || stroka[0] === "!" || stroka[0] === "^" || stroka[0] === "%") {
                stroka = stroka.substring(1);
            }
        }
    }
    function Umnojeniye() {
        for (let i = 0; i < stroka.length; i++) {
            if (stroka[i] == ")" && (stroka[i + 1] >= "0" && stroka[i + 1] <= "9")) {
                stroka = stroka.substring(0, i + 1) + "*" + stroka.substring(i + 1); i++;
            }
            if (stroka[i] == ")" && stroka[i + 1] == "(") {
                stroka = stroka.substring(0, i + 1) + "*" + stroka.substring(i + 1); i++;
            }
            if ((stroka[i] >= "0" && stroka[i] <= "9") && stroka[i + 1] == "(") {
                stroka = stroka.substring(0, i + 1) + "*" + stroka.substring(i + 1); i++;
            }
            if (stroka[i] == "(" && stroka[i + 1] == ")") {
                stroka = stroka.substring(0, i + 1) + "0" + stroka.substring(i + 1); i++;
            }           
        }
    }
    function Plus() {
        for (let i = 0; i < stroka.length; i++) {
            if (stroka[i] == "(" && (stroka[i + 1] >= "0" && stroka[i + 1] <= "9") && stroka[i + 1] !== "0") {
                stroka = stroka.substring(0, i + 1) + "0+" + stroka.substring(i + 1); i++;
            }
        }
    }
    function Bracket() {
        let otk = 0;
        let zak = 0;
        for (let i = 0; i < stroka.length; i++) {
            if (stroka[i] == "(") {
                otk = otk + 1;
            }
            if (stroka[i] == ")") {
                zak = zak + 1;
            }
        }
        while (otk != zak) {
            if (otk > zak) {
                stroka = stroka + ")"; 
                zak++;
            }
            if (otk < zak) {    
                stroka = "(" + stroka;
                otk++;
            }
        }
    }
    return stack_p;
}