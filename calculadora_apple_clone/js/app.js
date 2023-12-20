var operator = null;
var inputValueMemo = 0;

// Capturamos el valor del click con el target.innerHTML
function getContentClick( event ){
    const value = event.target.innerHTML;
    filterAction( value );
}

// Filtramos las funciones dependiendo lo que se quiera hacer
const filterAction = value =>{
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;


    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "x" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;

    value === "=" ? calculator() : null;
    value === "AC" ? resetCalculator() : null;
}

function addNumberInput( value ){
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    // Evaluamos si el valor es 0 y la longitud es 1 y una coma, concatenamos los valores
    if ( inputValue === "0" && inputValue.length === 1 && value != "," ){
        inputScreen.value = value;
        return;
    }
    if ( inputScreen.value === "" && value === "," ) {
        inputScreen.value = 0 + value;
        return;
    }

    inputScreen.value = inputValue + value;
}

function setOperation( operator ) {

    const inputScreenValue = document.getElementsByClassName('calculator__screen')[0].value;
    // this.inputValueMemo = parseInt(inputValueMemo);
    this.inputValueMemo = inputValueMemo;
    this.operator = operator;

    if (inputScreenValue !== 0) {
        calculator();
    }

}

function calculator() {

    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valueOne = transformCommaToPoint(this.inputValueMemo);
    let valueTwo = transformCommaToPoint(inputScreen.value);
    let total = 0;
    
    // console.log("ValueOne ->", typeof valueOne, valueOne);
    // console.log("ValueTwo ->", typeof valueTwo, valueTwo);
    // console.log("Dentro del Calculator...");
    
    //Suma
    if( this.operator === "+" && inputScreen.value !== "" ){
        // console.log("Dentro de la suma...");
        total = valueOne + valueTwo;
    }
    
    // Resta
    if( this.operator === "-" && inputScreen.value !== "" ){
        if( valueOne !== 0 ){
            total = valueOne - valueTwo;
        } else {
            total = valueTwo;
        }
    }

    // Multiplicación
    if( this.operator === "*" && inputScreen.value !== "" ){
        if( valueOne !== 0 ){
            total = valueOne * valueTwo;
        } else {
            total = valueTwo;
        }
    }

    // División
    if( this.operator === "/" && inputScreen.value !== "" ){
        if( valueOne !== 0 ){
            total = valueOne / valueTwo;
        } else {
            total = valueTwo;
        }
    }

    // Porcentaje
    if( this.operator === "%" && inputScreen !== "" ){
        total = valueTwo / 100;
    }

    // Poner un valor en negativo
    if( this.operator === "+/-" && inputScreen !== "" ){
        if( valueTwo > 0 ){
            total = -valueTwo;
        }
    }

    total = transformPointToComma( total )
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;

}

function transformCommaToPoint( value ) {
    if( typeof value !== "number" ){
        let resultTransform = value.replace(",", ".");
        return parseFloat( resultTransform );
    }
    return value;
}

function transformPointToComma( value ){
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace( ".", "," );
    return resultTransform;
}

const resetCalculator = () => {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0]
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operator = null;
}