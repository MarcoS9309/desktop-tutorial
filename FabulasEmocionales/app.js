/**
 * Fábulas Emocionales - Juego interactivo de fábulas adaptativas
 * @author Marco Vinicio
 * @version 2.0
 */

class FabulasEmocionales {
  constructor() {
    this.fabulas = {
      bien: [
        "El león y el ratón — Un día, un león dormía plácidamente cuando un pequeño ratón corrió sobre su cuerpo. El león lo atrapó con su enorme garra. El ratón suplicó por su vida y el león, condescendiente, lo dejó ir. Días después, el león fue atrapado en una red. El ratón, al escucharlo rugir, corrió y mordisqueó las cuerdas hasta liberarlo. Moraleja: Ningún acto de bondad es insignificante.",
        "La liebre y la tortuga — La liebre se burlaba constantemente de la lenta tortuga. Un día decidieron competir. La liebre corrió velozmente y, confiada, se detuvo a dormir. La tortuga, paso a paso, continuó hasta cruzar la meta. Al despertar, la liebre vio que había perdido. Moraleja: La constancia supera a la presunción.",
        "El ruiseñor y el halcón — Un halcón atrapó a un pequeño ruiseñor que lloraba por su vida. El halcón dudó: '¿Para qué me sirve comerte, tan pequeño?'. El ruiseñor respondió: 'Al menos te daré belleza en el canto y poesía en el alma'. Moraleja: La belleza también alimenta el espíritu.",
        "El pavo real y la grulla — El pavo real presumía de su colorido plumaje frente a la grulla. Esta respondió: 'Es cierto que eres hermoso, pero yo puedo volar libre hasta las nubes, y tú no'. Moraleja: Lo esencial a veces no se ve a simple vista.",
        "El león enfermo y el zorro — El león, anciano y débil, pedía que lo visitaran. Muchos animales entraban a su cueva, pero no salían. El zorro, astuto, notó muchas huellas de entrada y ninguna de salida. Se negó a entrar. Moraleja: La prudencia evita peligros innecesarios."
      ],
      mal: [
        "El zorro y las uvas — Un zorro hambriento intentó alcanzar uvas altas sin éxito. Tras muchos saltos fallidos, se alejó murmurando: 'Seguro están verdes'. Moraleja: Es fácil despreciar lo que no se puede conseguir.",
        "El lobo y el cordero — Un cordero bebía en un río y un lobo, buscando pretexto para devorarlo, lo acusó de ensuciar el agua. Aunque el cordero argumentó con lógica, el lobo lo devoró igual. Moraleja: La fuerza sin justicia es crueldad.",
        "El cisne y el búho — El búho se burlaba del canto del cisne. Este respondió: 'Yo canto en la luz del día, tú sólo en la oscuridad. Ambos tenemos nuestro momento'. Moraleja: Cada uno tiene su tiempo para brillar.",
        "El burro vestido de león — Un burro se disfrazó de león y asustaba a todos. Pero su rebuzno lo delató. Moraleja: Puedes disfrazarte de lo que quieras, pero tu esencia siempre se revela."
      ]
    };

    this.propuestas = [
      "Haz un monólogo imaginario: escribe lo que le dirías a tu 'yo interior' herido.",
      "Crea una miniobra de teatro: tú eres el protagonista que se reconcilia con su sombra.",
      "Escribe una carta desde el futuro: ¿qué te dice tu yo dentro de 5 años?",
      "Baila libremente 3 minutos sin juzgarte, solo siente tu cuerpo.",
      "Practica respiración consciente: 4 segundos inhalar, 4 mantener, 4 exhalar.",
      "Cierra los ojos e imagina a alguien sabio que te aconseja desde dentro."
    ];
  }

  init() {
    // Initialize without event delegation since we use onclick
  }

  obtenerAleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  mostrarFabula(estado) {
    const fabula = this.obtenerAleatorio(this.fabulas[estado]);
    const propuesta = estado === "mal" ? this.obtenerAleatorio(this.propuestas) : "";
    
    const respuestaElement = document.getElementById("respuesta");
    if (!respuestaElement) return;

    const emojiEstado = estado === 'bien' ? '✨' : '🌱';
    const tituloEstado = estado === 'bien' ? 'Tu fábula de fortaleza' : 'Tu fábula de transformación';

    respuestaElement.innerHTML = `
      <div class="fabula">
        <h2>${emojiEstado} ${tituloEstado}</h2>
        <p class="fabula-texto">${fabula}</p>
        ${propuesta ? `
          <div class="propuesta">
            <strong>💡 Una invitación para ti:</strong><br>
            ${propuesta}
          </div>
        ` : ''}
        <div class="fabula-acciones">
          <button onclick="location.reload()">🔄 Nueva consulta</button>
        </div>
      </div>
    `;

    // Animación de entrada
    respuestaElement.style.opacity = '0';
    respuestaElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
      respuestaElement.style.opacity = '1';
      respuestaElement.style.transform = 'translateY(0)';
    }, 100);
  }
}

// Global instance
let fabulasInstance = null;

// Funciones globales para compatibilidad
function mostrarFabula(estado) {
  if (!fabulasInstance) {
    fabulasInstance = new FabulasEmocionales();
  }
  fabulasInstance.mostrarFabula(estado);
}

// Manual initialization function
function initFabulas() {
  if (!fabulasInstance) {
    fabulasInstance = new FabulasEmocionales();
    fabulasInstance.init();
  }
}
