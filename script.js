const contenedor = document.querySelector(".producto")
const nombreProducto = contenedor.querySelector("h3")
const precioProducto = contenedor.querySelector("p")
const boton = contenedor.querySelector("button")
const carrito = document.querySelector(".carro")
const list = carrito.querySelector("ul")
const totalPrecio = carrito.querySelector("p")

let objetoProducto = {
    nombre: nombreProducto.textContent,
    precio: precioProducto.textContent
}

boton.addEventListener("click", () => {
    totalPrecio.textContent = "TOTAL " + objetoProducto.precio
    let carritoActual =  []
    carritoActual.push(objetoProducto)
    localStorage.setItem("carritoDeCompras", JSON.stringify(objetoProducto))
    // nuevoLi.textContent = objetoProducto.nombre
    // let nuevoLi = document.createElement("li")
    // carrito.appendChild(nuevoLi)
})

