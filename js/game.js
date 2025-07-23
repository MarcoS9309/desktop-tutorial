const preguntas = [
    "Imita una escena donde alguien te interrumpe constantemente y tú intentas mantener la calma.",
    "Haz una escena donde pides perdón por algo que no hiciste. Usa solo gestos y mirada.",
    "Representa el momento en que te viste en el espejo y no te reconociste. Hazlo lentamente.",
    "Haz una escena donde hablas con tu yo del pasado y le das un consejo. Usa dos tonos de voz.",
    "Imita a una persona que no quiere llorar, pero ya no puede evitarlo.",
    "Haz de cuenta que estás en una estación de tren y te despides de alguien importante. Usa el cuerpo, no palabras.",
    "Representa un día común como si fuera una tragedia griega.",
    "Actúa como si tu cuerpo tuviera algo que decir, pero tu voz no lo deja.",
    "Haz una escena donde el silencio te incomoda, y luego te acompaña.",
    "Camina como si el suelo fuera recuerdo y cada paso contara algo que callaste."
];

const recompensas = [
    "Recibes un aplauso simbólico. Haz una reverencia sincera.",
    "Se te permite elegir un nuevo rol escénico para explorar en el próximo acto.",
    "Puedes sentarte en el 'trono del director' y dar una orden escénica al grupo.",
    "Invoca una cita de Artaud y siéntete libre por 30 segundos.",
    "Ganas el derecho a guardar silencio... dramáticamente, por un minuto.",
    "Puedes usar una bufanda, bastón o elemento escénico como símbolo de poder durante el resto de la sesión.",
    "Haz una caminata triunfal desde la puerta hasta el centro. El grupo te observa en silencio.",
    "Escribe en tu cuaderno simbólico una frase que resuma tu escena. Léela o rómpela, según tu necesidad.",
    "Puedes pedir a alguien del grupo que actúe una escena contigo, sin explicar nada previamente."
];

const castigos = [
    "Imita tu emoción más reprimida como si fuera una diva del teatro clásico.",
    "Haz un soliloquio con la silla más cercana como tu único espectador.",
    "Explora el gesto corporal de la vergüenza y transfórmalo en danza.",
    "Actúa una escena de reconciliación contigo mismo en voz baja.",
    "Haz un ritual de despedida de una emoción que ya no necesitas.",
    "Cuenta hasta diez en silencio, respirando desde los dedos del pie hasta la coronilla.",
    "Cierra los ojos un minuto. Luego abre los ojos como si despertaras de un recuerdo.",
    "Haz una caminata lenta y dolorosa como si llevaras el peso de tu historia.",
    "Imita cómo te sientes cuando no puedes expresar lo que sientes."
];

function mostrarPregunta() {
    const random = Math.floor(Math.random() * preguntas.length);
    document.getElementById('pregunta').innerText = preguntas[random];
    document.getElementById('resultado').innerText = "";
}

function mostrarRecompensa() {
    const random = Math.floor(Math.random() * recompensas.length);
    document.getElementById('resultado').innerText = "Recompensa: " + recompensas[random];
}

function mostrarCastigo() {
    const random = Math.floor(Math.random() * castigos.length);
    document.getElementById('resultado').innerText = "Transformación escénica: " + castigos[random];
}
