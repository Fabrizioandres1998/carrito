//QUIERO HACER UN CARRITO DE COMPRAS QUE SIGA GUARDADO AUN CUANDO HAGA RELOAD
//PASO 1 OBTENER LOS ELEMENTOS NECESARIOS DEL HTML PARA INTERACTUAR CON EL DOM
//PASO 2 CREAR OBJETO DE PRODUCTOS
//PASO 3 CREAR UN EVENTO QUE AL HACER CLICK EN EL BOTON SE AGREGUE AL CARRITO EL PRODUCTO Y EL PRECIO
//CARRITO DEBERIA SER UN ARRAY
//GUARDAR EN LOCALSTORAGE LOS OBJETOS O ARRAYS NECESARIOS PARA OBTENER LOS DATOS DEL CARRITO DESDE ALLI

const boton = document.querySelector("button")
const ul = document.querySelector("ul")
const total = document.querySelector(".total")

let producto1 = {
    nombre: "Madera tirantes",
    precio: 5000
}

let array = []

boton.addEventListener("click", () => {
    let totalActual = parseFloat(total.textContent);
    
    // Sumar el precio del producto al total actual
    totalActual += producto1.precio;

    // Asignar el nuevo total al contenido de total.textContent
    total.textContent = totalActual;
    let nuevoLi = document.createElement("li")
    nuevoLi.textContent = "Madera tirantes"
    ul.appendChild(nuevoLi)
})