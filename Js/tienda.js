const productos = getProductos();
showProducto(productos);

function showProducto(productos){
    const listaProducto = document.getElementById("products");
    for(const producto of productos) {
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
        <img class="card-img-top img-background" src="${producto.img}" alt="piloto">
        <img class="card-img-top img-front" src="${producto.img}" alt="piloto">
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