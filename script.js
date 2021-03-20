// Expresión de función invocada inmediatamente
// para no contaminar el alcance global
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;
  let etiqAudio = document.createElement("audio");

  startButton.addEventListener('click', () => {
    //Agregamos el recurso de sonido
      etiqAudio.setAttribute("src", "http://sonidosmp3gratis.com/sounds/misc333.mp3");
    //Iniciamos el sonido
      etiqAudio.play();
    // Desactivar el botón durante el giro
    startButton.style.pointerEvents = 'none';
    // Calcula una nueva rotación entre 5000 y 10000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Establecer la transición en la rueda
    wheel.style.transition = 'all 10s ease-out';
    // Gira la rueda
    wheel.style.transform = `rotate(${deg}deg)`;
    // Aplicar el desenfoque
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Eliminar el desenfoque
    wheel.classList.remove('blur');
    // Habilitar el botón cuando termine el giro
    startButton.style.pointerEvents = 'auto';
     // Necesitamos establecer la transición a ninguna ya que queremos rotar instantáneamente
    wheel.style.transition = 'none';
    // Calcula el grado sobre una base de 360 ​​grados para obtener la rotación real "natural"
    // Importante porque queremos comenzar el siguiente giro desde ese
    // Usa el módulo para obtener el valor restante de 360
    const actualDeg = deg% 360;
    // Establece la rotación real al instante sin animación
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();