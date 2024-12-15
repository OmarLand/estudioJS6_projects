// Namespace Pattern:

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo : 'Pizza',
        precio   : 25
    },
    {
        platillo : 'Arepas',
        precio   : 5
    },
    {
        platillo : 'Cachapas',
        precio   : 20
    },
];

restaurantApp.funciones = {
    mostrarMenu: () => {
        console.log(`Bienvenidos a nuestro menú...`);

        platillos.forEach( (platillo, index) => {
            console.log( `${index} : ${platillo.platillo} €${platillo.precio}` );
        });
    },
    ordenar : id => {
        console.log( `Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando` );
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo)
    }
}

restaurantApp.funciones.ordenar( 1 );
restaurantApp.funciones.agregarPlatillo('Sushi', 10 );

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu( platillos );
