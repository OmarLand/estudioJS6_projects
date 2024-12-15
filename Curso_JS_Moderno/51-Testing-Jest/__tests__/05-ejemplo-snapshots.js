const cliente = {
    nombre  : 'Omar Jesus',
    balance : 500,
    tipo    : 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Omar Jesus', () => {
        expect( cliente.nombre ).toMatchSnapshot()
    })
});