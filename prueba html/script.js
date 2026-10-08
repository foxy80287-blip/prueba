/* =========================
   SCRIPT PARA JOYERÍA LUNA DORADA
========================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidad para los botones de categorías en "Nuestra colección"
    const botonesCategorias = document.querySelectorAll('.categorias button');
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Quitamos la clase 'activo' de todos los botones
            botonesCategorias.forEach(b => b.classList.remove('activo'));
            // Se la ponemos al botón que presionó el usuario
            e.target.classList.add('activo');
            
            // Aquí puedes agregar lógica adicional si quieres filtrar productos
            const categoriaSeleccionada = e.target.textContent;
            console.log(`Categoría seleccionada: ${categoriaSeleccionada}`);
        });
    });

    // 2. Simulación de compra o pedido al hacer clic en los botones "Comprar"
    const botonesComprar = document.querySelectorAll('.producto button');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Buscamos el contenedor del producto para saber el nombre de la joya
            const tarjetaProducto = e.target.closest('.producto');
            const nombreProducto = tarjetaProducto.querySelector('h3').textContent;
            
            // Mensaje emergente amigable para el cliente (puedes cambiarlo por un modal si prefieres)
            alert(`¡Has seleccionado: ${nombreProducto}! Serás redirigido a WhatsApp para concretar tu pedido.`);
            
            // Opcional: Aquí podrías redirigir directamente a WhatsApp con el producto seleccionado
            // Ejemplo: window.location.href = `https://wa.me/tunumerodecelular?text=Hola,%2520quiero%2520comprar%2520el%2520${encodeURIComponent(nombreProducto)}`;
        });
    });

    // 3. Confirmación en consola de que el script cargó correctamente
    console.log("JavaScript de Luna Dorada cargado con éxito 🚀");
});