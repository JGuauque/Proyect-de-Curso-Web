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

