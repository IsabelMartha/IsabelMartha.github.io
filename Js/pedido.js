async function getProductos(show) {
    try {
        response = await fetch("https://localhost:7074/Producto/Type/1");
        json = await response.json();
        
        show(json);
    }  catch (e) {
        console.error("Error al obtener productos:", e);
        // Aquí puedes mostrar un mensaje de error al usuario
    }
     finally {
        
    }
}