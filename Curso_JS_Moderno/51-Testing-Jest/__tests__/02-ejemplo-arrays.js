const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing al Carrito de Compras', () => {
    test('Probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });

    test('Verificar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    })
})