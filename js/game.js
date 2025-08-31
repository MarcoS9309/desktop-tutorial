/**
 * Psicodrama Virtual - Juego interactivo de teatro emocional
 * @author Marco Vinicio
 * @version 2.0
 */

class PsicodramaGame {
  constructor() {
    this.preguntas = [
      "Imita una escena donde alguien te interrumpe constantemente y tú intentas mantener la calma.",
      "Haz una escena donde pides perdón por algo que no hiciste. Usa solo gestos y mirada.",
      "Representa el momento en que te viste en el espejo y no te reconociste. Hazlo lentamente.",
      "Haz una escena donde hablas con tu yo del pasado y le das un consejo. Usa dos tonos de voz.",
      "Imita a una persona que no quiere llorar, pero ya no puede evitarlo.",
      "Haz de cuenta que estás en una estación de tren y te despides de alguien importante. Usa el cuerpo, no palabras.",
      "Representa un día común como si fuera una tragedia griega.",
      "Actúa como si tu cuerpo tuviera algo que decir, pero tu voz no lo deja.",
      "Haz una escena donde el silencio te incomoda, y luego te acompaña.",
      "Camina como si el suelo fuera recuerdo y cada paso contara algo que callaste.",
    ];

    this.recompensas = [
      "Recibes un aplauso simbólico. Haz una reverencia sincera.",
      "Se te permite elegir un nuevo rol escénico para explorar en el próximo acto.",
      "Puedes sentarte en el 'trono del director' y dar una orden escénica al grupo.",
      "Invoca una cita de Artaud y siéntete libre por 30 segundos.",
      "Ganas el derecho a guardar silencio... dramáticamente, por un minuto.",
      "Puedes usar una bufanda, bastón o elemento escénico como símbolo de poder durante el resto de la sesión.",
      "Haz una caminata triunfal desde la puerta hasta el centro. El grupo te observa en silencio.",
      "Escribe en tu cuaderno simbólico una frase que resuma tu escena. Léela o rómpela, según tu necesidad.",
      "Puedes pedir a alguien del grupo que actúe una escena contigo, sin explicar nada previamente.",
    ];

    this.castigos = [
      "Imita tu emoción más reprimida como si fuera una diva del teatro clásico.",
      "Haz un soliloquio con la silla más cercana como tu único espectador.",
      "Explora el gesto corporal de la vergüenza y transfórmalo en danza.",
      "Actúa una escena de reconciliación contigo mismo en voz baja.",
      "Haz un ritual de despedida de una emoción que ya no necesitas.",
      "Cuenta hasta diez en silencio, respirando desde los dedos del pie hasta la coronilla.",
      "Cierra los ojos un minuto. Luego abre los ojos como si despertaras de un recuerdo.",
      "Haz una caminata lenta y dolorosa como si llevaras el peso de tu historia.",
      "Imita cómo te sientes cuando no puedes expresar lo que sientes.",
    ];

    this.estadisticas = {
      preguntasGeneradas: 0,
      recompensasRecibidas: 0,
      transformacionesRealizadas: 0
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.cargarEstadisticas();
  }

  bindEvents() {
    // Event delegation para mejor performance
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-action="nueva-pregunta"]')) {
        this.mostrarPregunta();
      } else if (e.target.matches('[data-action="recompensa"]')) {
        this.mostrarRecompensa();
      } else if (e.target.matches('[data-action="castigo"]')) {
        this.mostrarCastigo();
      }
    });
  }

  obtenerAleatorio(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      console.warn('Array vacío o inválido proporcionado');
      return '';
    }
    return arr[Math.floor(Math.random() * arr.length)];
  }

  mostrarPregunta() {
    const preguntaElement = document.getElementById("pregunta");
    const resultadoElement = document.getElementById("resultado");
    
    if (!preguntaElement) {
      console.error('Elemento #pregunta no encontrado');
      return;
    }

    const pregunta = this.obtenerAleatorio(this.preguntas);
    preguntaElement.innerHTML = `<span class="pregunta-texto">${pregunta}</span>`;
    
    // Limpiar resultado anterior
    if (resultadoElement) {
      resultadoElement.innerHTML = "";
    }

    // Actualizar estadísticas
    this.estadisticas.preguntasGeneradas++;
    this.guardarEstadisticas();
    
    // Animación suave
    preguntaElement.style.opacity = '0';
    setTimeout(() => {
      preguntaElement.style.opacity = '1';
    }, 100);
  }

  mostrarRecompensa() {
    const recompensa = this.obtenerAleatorio(this.recompensas);
    this.mostrarResultado("🎭 Recompensa Escénica", recompensa, "recompensa");
    
    this.estadisticas.recompensasRecibidas++;
    this.guardarEstadisticas();
  }

  mostrarCastigo() {
    const castigo = this.obtenerAleatorio(this.castigos);
    this.mostrarResultado("🎨 Transformación Escénica", castigo, "transformacion");
    
    this.estadisticas.transformacionesRealizadas++;
    this.guardarEstadisticas();
  }

  mostrarResultado(titulo, contenido, tipo) {
    const resultadoElement = document.getElementById("resultado");
    
    if (!resultadoElement) {
      console.error('Elemento #resultado no encontrado');
      return;
    }

    resultadoElement.innerHTML = `
      <div class="resultado-container ${tipo}">
        <h3 class="resultado-titulo">${titulo}</h3>
        <p class="resultado-contenido">${contenido}</p>
      </div>
    `;

    // Animación de entrada
    resultadoElement.style.opacity = '0';
    resultadoElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      resultadoElement.style.opacity = '1';
      resultadoElement.style.transform = 'translateY(0)';
    }, 100);
  }

  guardarEstadisticas() {
    try {
      localStorage.setItem('psicodrama_stats', JSON.stringify(this.estadisticas));
    } catch (error) {
      console.warn('No se pudieron guardar las estadísticas:', error);
    }
  }

  cargarEstadisticas() {
    try {
      const stats = localStorage.getItem('psicodrama_stats');
      if (stats) {
        this.estadisticas = { ...this.estadisticas, ...JSON.parse(stats) };
      }
    } catch (error) {
      console.warn('No se pudieron cargar las estadísticas:', error);
    }
  }

  mostrarEstadisticas() {
    return this.estadisticas;
  }
}

// Funciones globales para compatibilidad con HTML existente
let gameInstance;

function mostrarPregunta() {
  if (!gameInstance) gameInstance = new PsicodramaGame();
  gameInstance.mostrarPregunta();
}

function mostrarRecompensa() {
  if (!gameInstance) gameInstance = new PsicodramaGame();
  gameInstance.mostrarRecompensa();
}

function mostrarCastigo() {
  if (!gameInstance) gameInstance = new PsicodramaGame();
  gameInstance.mostrarCastigo();
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  gameInstance = new PsicodramaGame();
  console.log('🎭 Psicodrama Virtual iniciado');
});
