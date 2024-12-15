import { suma } from '../js/funciones.js';

describe('Sum de 2 numeros', () => {
    test('Sumar 10 y 20, debe dar como resultado 30', () => {
        expect(suma(10,20)).toBe(30);
    })
})