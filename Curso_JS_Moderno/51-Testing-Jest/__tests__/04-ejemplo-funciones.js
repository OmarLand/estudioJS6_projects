function suma( a, b ){
    return a + b;
}

function resta( a, b ){
    return a - b;
}

describe('Testing a las funciones de suma y resta', () => {
    test('Suma de 20 y 30', () => {
        expect( suma(20,30) ).toBe(50);
    });

    test('Restar 10 y 5', () => {
        expect( resta(10,5) ).toBe(5);
    });
})