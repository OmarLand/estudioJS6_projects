// Iterador While

let i = 1;

// while( i < 100 ){
//     if( i % 3 === 0 && i % 5 === 0 ){
//         console.log("FizzBuzz", i);

//     } else if( i % 3 === 0 ){
//         console.log("Fizz", i);

//     } else if( i % 5 === 0 ){
//         console.log("Buzz", i);

//     }
//     i++

// }

while( i < 10 ){
    ( i % 2 === 0 ) ? console.log(`El número ${i} es par`) : console.log(`El número ${i} es impar`)
    i++;
}