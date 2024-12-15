const cliente = {
    nombre : 'Omar',
    balance : 500,
};

describe('Testing al cliente', () => {
    test('El cliente es Premium', () =>{
        expect(cliente.balance).toBeGreaterThan(400)
    });

    test('Es Omar', () => {
        expect(cliente.nombre).toBe('Omar')
    });
    
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro')
    });

    test('No tiene 500', () => {
        expect( cliente.balance ).not.toBe(400)
    })

    
})