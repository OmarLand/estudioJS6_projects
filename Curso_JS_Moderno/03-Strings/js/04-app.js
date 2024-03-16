const test = ' Testeando como quitar los espacios en blanco    ';

console.log( test );

console.log( test.trimEnd() );
console.log( test.trimStart());

console.log( test.trimEnd().trimStart() );


console.log( test.trim() );