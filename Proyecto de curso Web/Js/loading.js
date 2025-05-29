document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animated").forEach(el => {
    // Encuentra y aplica la clase de animación
    const animationClass = Array.from(el.classList).find(cls =>
      cls.startsWith("fade-in") || cls === "zoom"
    );
    if (animationClass) {
      el.classList.add(animationClass);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('menu');
    const links = document.querySelectorAll('.contenedor-nav a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Desactiva el checkbox para cerrar el menú
            checkbox.checked = false;
        });
    });

    // Animaciones
    document.querySelectorAll(".animated").forEach(el => {
        const animationClass = Array.from(el.classList).find(cls =>
            cls.startsWith("fade-in") || cls === "zoom"
        );
        if (animationClass) {
            el.classList.add(animationClass);
        }
    });

    // Manejo del formulario de contacto
        
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        // Simular envío (aquí podrías agregar la lógica real de envío)
        alert('¡Gracias por tu mensaje, ' + nombre + '! Te contactaremos pronto.');
        
        // Limpiar el formulario
        contactForm.reset();
    });
