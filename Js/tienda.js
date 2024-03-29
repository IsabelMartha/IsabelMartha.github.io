const PAGE_SIZE = 1;

getProductos(showProducto, 1, PAGE_SIZE, "", "Title");

let listProductos = {};



const txtQuery = document.getElementById("txt_query");
txtQuery.addEventListener("input", (evt) => {
    console.log("Botón de siguiente clickeado");
    getProductos(showProducto, 1, PAGE_SIZE, txtQuery.value, "Title");
})



  

const firstProducto = document.getElementById("first_producto");
firstProducto.addEventListener("click", (evt) => {
    getProductos(showProducto, 1, PAGE_SIZE, txtQuery.value, "Title");
});



const prevProducto = document.getElementById("prev_producto");
prevProducto.addEventListener("click", (evt) => {
    getProductos(showProducto, listProductos.prevPage, PAGE_SIZE, txtQuery.value, "Title");
});



const nextProducto = document.getElementById("next_producto");
nextProducto.addEventListener("click", (evt) => {
    getProductos(showProducto, listProductos.nextPage, PAGE_SIZE, txtQuery.value, "Title");
});




const lastProducto = document.getElementById("last_producto");
lastProducto.addEventListener("click", (evt) => {
    getProductos(showProducto, listProductos.totalPage, PAGE_SIZE, txtQuery.value, "Title");
});







function showProducto(productos){

    listProductos = productos;

    const pageProducto = document.getElementById("page_producto");
    pageProducto.innerText = listProductos.page;

    nextProducto.style.display = listProductos.hasNextPage ? "block" : "none";
    lastProducto.style.display = listProductos.hasNextPage ? "block" : "none";
    prevProducto.style.display = listProductos.hasPrevPage ? "block" : "none";
    firstProducto.style.display = listProductos.hasPrevPage ? "block" : "none";

    const listaProducto = document.getElementById("producto_list");

    listaProducto.innerHTML = "";
    for(const producto of productos.list) {
        const product = new Producto(producto);
        const template = getTemplate(product);
        listaProducto.append(template);
    }
}


function getTemplate(producto) {
    const div = document.createElement("div");
div.className = "col-xs-4 col-md-4 col-lg-4 col-sm-6";
div.innerHTML =  `
<div class="card card-cascade card-ecommerce wider shadow mb-5">
    <!--Card image-->
    <div class="view view-cascade overlay text-center image-container">
        <img class="card-img-top img-background" src="https://localhost:7074${producto.img}" alt="piloto">
        <img class="card-img-top img-front" src="https://localhost:7074${producto.img}" alt="piloto">
    </div>
    <!--Card Body-->
    <div class="card-body card-body-cascade text-center">
        <!--Card Title-->
        <h3 class="card-title container-fluid"><strong><a href="">${producto.title}</a></strong></h3>
        <!-- Card Description-->
        <p class="card-text">${producto.description}</p>
        <p class="price">${producto.price}</p>
        <!--Card footer-->
        <div class="card-footer">
            <p>AGREGAR</p>
        </div>
    </div>
</div>`;
return div
}



