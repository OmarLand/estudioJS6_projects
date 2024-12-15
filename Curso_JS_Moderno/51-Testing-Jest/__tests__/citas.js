import Citas from "../js/classes/Citas";

describe('Probar la clave de citas', () => {

    const citas = new Citas();

    test('Agregar nueva cita', () => {
        const citaObj = {
            mascota : 'Pelosa',
            propietario : 'Omar',
            telefono : '123456789',
            fecha : '15/12/2024',
            hora : '23:12',
            sintomas : 'Esta enfermo'
        };

        citaObj.id = Date.now();
        citas.agregarCita( citaObj );

        // Prueba
        expect(citas).toMatchSnapshot();
    });

});