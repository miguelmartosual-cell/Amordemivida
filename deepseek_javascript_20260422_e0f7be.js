document.getElementById('btnComprobar').addEventListener('click', function() {
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();
    const mensajeDiv = document.getElementById('mensaje');
    
    // Comprobar si el nombre es Yolanda (sin importar mayúsculas/minúsculas)
    // Aquí puedes cambiar "yolanda" por el nombre que quieras
    if (nombre.toLowerCase() === 'yolanda') {
        // Mensaje amoroso para la persona correcta
        mensajeDiv.innerHTML = `
            ❤️ ¡SÍ, ERES TÚ! ❤️<br><br>
            Eres el amor de la vida de Miguel. 💑<br>
            Cada día a tu lado es un regalo del cielo. 🌹<br>
            Te amo con todo mi corazón. 💖
        `;
        mensajeDiv.className = 'mensaje amor';
        
        // Efecto especial en el fondo
        document.body.style.transition = 'background 0.5s';
        document.body.style.background = 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)';
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)';
        }, 1000);
        
    } else if (nombre === '') {
        mensajeDiv.innerHTML = '💭 Escribe un nombre para descubrirlo...';
        mensajeDiv.className = 'mensaje error';
    } else {
        // Mensaje para cualquier otro nombre
        mensajeDiv.innerHTML = `😢 Lo siento, ${nombre}. No eres el amor de la vida de Miguel. 😢<br><br>Sigue buscando, esa persona especial está ahí fuera. 💕`;
        mensajeDiv.className = 'mensaje error';
    }
    
    // Animación de entrada
    mensajeDiv.style.animation = 'none';
    setTimeout(() => {
        mensajeDiv.style.animation = 'latido 0.5s ease';
    }, 10);
});

// Permitir enviar con la tecla Enter
document.getElementById('nombre').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('btnComprobar').click();
    }
});