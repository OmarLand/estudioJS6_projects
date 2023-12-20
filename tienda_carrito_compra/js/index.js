const CART_PRODUCTS = "cartProductsId";

document.addEventListener("DOMContentLoaded", () =>{
    loadProducts();
    loadProductCart();
});

function getProductsDb() {
    const url = "../dbProducts.json";

    return fetch(url)
    .then( response =>{
        return response.json();
    })
    .then( result =>{
        // console.log( result )
        return result;
    })
    .catch( error => {
        console.log("Error al traer los datos...>>>", error)
    });
}

async function loadProducts() {
    // console.log("Función loadProducts ejecutada correctamente..!!!");
    const products = await getProductsDb();
    
    let html = '';
    products.forEach( product => {
        html += `
            <div class="col-3 product-container">
                <div class="card product">
                    <img 
                        src="${product.image}"
                        class="card-img-top"
                        alt="${product.name}"
                    />
                    <div class="card-body">
                        <h5 class="card-title"> ${product.name} </h5>
                        <p class="card-text"> ${product.extraInfo} </p>
                        <p class="card-text"> ${product.price} €/Ud </p>
                        <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${product.id})"> Añadir al carrito </button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart(){
    const containerCart = document.getElementsByClassName("cart-products")[0];
    // console.log(btnCart);
    // console.log( containerCartProdutcs.classList );

    containerCart.classList.forEach( item => {

        if( item === "hidden"){
            containerCart.classList.remove("hidden")
            containerCart.classList.add("active")
        } 
        if( item === "active"){
            containerCart.classList.remove("active")
            containerCart.classList.add("hidden")
        } 

    })   

}

function addProductCart( idProduct ){
    // console.log( "Añadiendo el producto con el ID: ", idProduct );

    let arrayProductsId = [];
    let localStorageItems = localStorage.getItem(CART_PRODUCTS);

    if( localStorageItems === null ){
        arrayProductsId.push( idProduct );
        localStorage.setItem( CART_PRODUCTS, arrayProductsId )
    } else {
        // console.log( "Ya hay contenido en el localStorage..." );
        // console.log( localStorage.getItem(CART_PRODUCTS) );
        let productsId = localStorage.getItem( CART_PRODUCTS )

        if( productsId.length > 0 ){
            productsId +=  "," + idProduct;
        } else{
            productsId = productsId;
        }
        localStorage.setItem( CART_PRODUCTS, productsId )
    }

    loadProductCart();
}

async function loadProductCart(){
    console.log(" >>> Cargando producto en el carrito!!!");
    const products = await getProductsDb();
    // console.log( products );

    // Convertimos el resultado del localStorage en un Array
    const localStorageItems = localStorage.getItem( CART_PRODUCTS )

    let html = "";
    if( !localStorageItems ){
        html = `
            <div class="cart-product empty">
                <p> Carrito vacío... </p>
            </div>
        `;
    } else {
        
            const idProductsSplit = localStorageItems.split(',');
        
            //Eliminamos los ID's duplicados
            const idProductsCart = Array.from( new Set(idProductsSplit) );
        
            // console.log( idProductsCart );
        
            idProductsCart.forEach( id => {
                products.forEach( product =>{
                    if( id == product.id ){
                        const quantity = countDuplicateID(id, idProductsSplit);
                        const totalPrice = product.price * quantity;
                        html += `
                            <div class="cart-product">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="cart-product-info">
                                    <span class="quantity">${quantity}</span>
                                    <p>${product.name}</p>
                                    <p>${totalPrice.toFixed(2)}</p>
                                    <p class="change-quantity">
                                        <button onClick="decreaseQuantity( ${product.id} )"> - </button>
                                        <button onClick="increaseQuantity( ${product.id} )"> + </button>
                                    </p>
                                    <p class="cart-product-delete">
                                        <button onClick="deleteProductCart( ${product.id} )">Eliminar</button>
                                    </p>
                                </div>
                            </div>
                        `;
                    }
                });
            });

    }
    // Renderizo en el HTML los elementos


    document.getElementsByClassName("cart-products")[0].innerHTML = html;
}

function countDuplicateID( value, arrayIDs ){
    let count = 0;

    arrayIDs.forEach( id =>{
        if(value == id){
            count ++;
        }
    });
    return count;
}

function deleteProductCart( idProduct ){
    // console.log( "Eliminando el producto: ", idProduct );  
    const idProductsCart  = localStorage.getItem( CART_PRODUCTS );
    const arrayProductCart = idProductsCart.split(','); 
    const resultIDDelete = deleteAllIds( idProduct, arrayProductCart );

    if( resultIDDelete ){
        let count = 0;
        let idString = "";

        resultIDDelete.forEach( id =>{
            count++;
            if( count < resultIDDelete.length ){
                idString += id + ','
            } else {
                idString += id;
            }
        });
       localStorage.setItem( CART_PRODUCTS, idString );
    }

    const idsLocalStorage = localStorage.getItem( CART_PRODUCTS );

    if( !idsLocalStorage ){
        localStorage.removeItem( CART_PRODUCTS );
    }

    loadProductCart();
}

function deleteAllIds( id, arrayIds ){
    return arrayIds.filter( itemId =>{
        return itemId != id;
    } )
}

function increaseQuantity( idProduct ){
    console.log( " > Incrementamos el valor Quantity del producto..!" );
    const idProductCart = localStorage.getItem( CART_PRODUCTS );
    const arrayIdProductsCart = idProductCart.split(',');

    arrayIdProductsCart.push( idProduct );

    let count = 0;
    let idString = "";

    arrayIdProductsCart.forEach( id =>{
        count++;
        if( count < arrayIdProductsCart.length ){
            idString += id + ",";
        } else {
            idString += id;
        }
    });
    localStorage.setItem( CART_PRODUCTS, idString );
    loadProductCart();
}

function decreaseQuantity( idProduct ){

    const idProductCart = localStorage.getItem( CART_PRODUCTS );
    const arrayIdProductsCart = idProductCart.split(',');

    const deleteItem = idProduct.toString();
    let index = arrayIdProductsCart.indexOf( deleteItem );
    if( index > -1 ){
        arrayIdProductsCart.splice(index, 1);
    }

    let count = 0;
    let idString = "";
    arrayIdProductsCart.forEach( id =>{
        count++;
        if( count < arrayIdProductsCart.length ){
            idString += id + ",";
        } else {
            idString += id;
        }
        localStorage.setItem( CART_PRODUCTS, idString );
        loadProductCart();
    } );

}