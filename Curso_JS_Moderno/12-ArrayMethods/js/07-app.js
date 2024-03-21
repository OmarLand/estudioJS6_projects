// Uso del método .concat
const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "Octubre"];
const meses3 = ["Noviembre", "Diciembre"];

// .concat()
const mesesComp = meses1.concat(meses2, meses3);
console.log( `Concatenados con .concat() >>> ${mesesComp}` );

//Con Spread Operator:
const concatWithSpread = [...meses1, ...meses2, ...meses3]
console.log( `Con el Spread: ${ concatWithSpread }` );