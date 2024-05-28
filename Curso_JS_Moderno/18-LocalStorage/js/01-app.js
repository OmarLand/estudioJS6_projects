localStorage.setItem('nombre','Omar'); // Almacenamos datos en el local Storage

// sessionStorage.setItem('Apellido', 'Landaeta'); // Almacenamos informacion de la sesión

const producto = {
    nombre : "Camara Canon Rebel 1000D 18",
    precio : 450
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);


const meses = ['enero','febrero','marzo'];
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString)