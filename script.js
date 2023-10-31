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

let precioTotal = 0

boton.addEventListener("click", () => {
    let precio = parseInt(producto1.precio)
    precioTotal += precio
    total.textContent = "TOTAL: $" + precioTotal
    let nuevoLi = document.createElement("li")
    nuevoLi.textContent = "Madera tirantes"
    ul.appendChild(nuevoLi)
    array.push(precioTotal)
    localStorage.setItem("producto-1", JSON.stringify(array))
    console.log(array)
})



window.addEventListener("DOMContentLoaded", () => {
    let presio = JSON.parse(localStorage.getItem("producto-1"))
    total.textContent = "TOTAL: $" + presio
})
