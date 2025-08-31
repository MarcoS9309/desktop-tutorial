const fabulas = {
  bien: [
    "El león y el ratón — Un día, un león dormía plácidamente cuando un pequeño ratón corrió sobre su cuerpo. El león lo atrapó con su enorme garra. El ratón suplicó por su vida y el león, condescendiente, lo dejó ir. Días después, el león fue atrapado en una red. El ratón, al escucharlo rugir, corrió y mordisqueó las cuerdas hasta liberarlo. Moraleja: Ningún acto de bondad es insignificante.",
    "La liebre y la tortuga — La liebre se burlaba constantemente de la lenta tortuga. Un día decidieron competir. La liebre corrió velozmente y, confiada, se detuvo a dormir. La tortuga, paso a paso, continuó hasta cruzar la meta. Al despertar, la liebre vio que había perdido. Moraleja: La constancia supera a la presunción.",
    "El ruiseñor y el halcón — Un halcón atrapó a un pequeño ruiseñor que lloraba por su vida. El halcón dudó: “¿Para qué me sirve comerte, tan pequeño?”. El ruiseñor respondió: “Al menos te daré belleza en el canto y poesía en el alma”. Moraleja: La belleza también alimenta el espíritu.",
    "El pavo real y la grulla — El pavo real presumía de su colorido plumaje frente a la grulla. Esta respondió: “Es cierto que eres hermoso, pero yo puedo volar libre hasta las nubes, y tú no”. Moraleja: Lo esencial a veces no se ve a simple vista.",
    "El león enfermo y el zorro — El león, anciano y débil, pedía que lo visitaran. Muchos animales entraban a su cueva, pero no salían. El zorro, astuto, notó muchas huellas de entrada y ninguna de salida. Se negó a entrar. Moraleja: La prudencia evita peligros innecesarios.",
    "Las abejas y el zángano — Un zángano exigía miel diciendo ser parte del trabajo. Las abejas se indignaron: “Tú no trabajas, no ayudas, no construyes”. Lo expulsaron de la colmena. Moraleja: El esfuerzo compartido es lo que da valor a los logros.",
    "La paloma y la hormiga — Una paloma salvó a una hormiga de ahogarse. Días después, un cazador apuntaba a la paloma, y la hormiga lo mordió en el pie, permitiendo que la paloma escapara. Moraleja: La bondad vuelve cuando menos lo esperas.",
    "El perro y su reflejo — Un perro cruzaba un río con un hueso en la boca. Al mirar al agua, vio su reflejo y creyó que otro perro tenía un hueso más grande. Lo soltó para arrebatárselo y perdió el suyo. Moraleja: No pierdas lo que tienes por codicia.",
    "La gallina de los huevos de oro — Un campesino tenía una gallina que ponía huevos de oro. Impaciente por obtener más, la mató para buscar todo el oro dentro... pero no había nada. Moraleja: La avaricia rompe el saco.",
    "El caballo y el asno — Un caballo se negó a ayudar a un asno fatigado. Poco después, el asno murió de cansancio y el dueño puso toda la carga sobre el caballo. Moraleja: Si no ayudas hoy, mañana cargarás más solo.",
  ],
  mal: [
    "El zorro y las uvas — Un zorro hambriento intentó alcanzar unas uvas altas sin éxito. Tras muchos saltos fallidos, se alejó murmurando: 'Seguro están verdes'. Moraleja: Es fácil despreciar lo que no se puede conseguir.",
    "El lobo y el cordero — Un cordero bebía en un río y un lobo, buscando pretexto para devorarlo, lo acusó de ensuciar el agua. Aunque el cordero argumentó con lógica, el lobo lo devoró igual. Moraleja: La fuerza sin justicia es crueldad.",
    "El cisne y el búho — El búho se burlaba del canto del cisne. Este respondió: “Yo canto en la luz del día, tú sólo en la oscuridad. Ambos tenemos nuestro momento”. Moraleja: Cada uno tiene su tiempo para brillar.",
    "El burro vestido de león — Un burro se disfrazó de león y asustaba a todos. Pero su rebuzno lo delató. Moraleja: Puedes disfrazarte de lo que quieras, pero tu esencia siempre se revela.",
    "El gallo y la perla — Un gallo encontró una perla entre la paja. “No me sirve”, dijo, “prefiero un grano de trigo”. Moraleja: A veces no reconocemos el verdadero valor de lo que encontramos.",
    "Las ranas que pedían rey — Las ranas vivían libres pero pidieron un rey. Zeus les envió un tronco. Lo despreciaron por inútil. Pidieron otro y Zeus les envió una garza... que comenzó a devorarlas. Moraleja: Cuidado con lo que deseas.",
    "El zorro sin cola — Un zorro perdió su cola en una trampa. Avergonzado, intentó convencer a los demás de que era mejor estar sin ella. Uno le respondió: “Sólo quieres que todos suframos lo que tú”. Moraleja: No impongas a otros tus desgracias.",
    "El pavo y el ruiseñor — El pavo envidiaba el canto del ruiseñor. “Yo soy más grande y más fuerte”, decía. El ruiseñor respondió: “Pero yo alivio corazones tristes”. Moraleja: No todo lo valioso se mide en tamaño.",
    "El oso y los dos amigos — Dos amigos caminaban por el bosque. Al ver un oso, uno trepó a un árbol. El otro se tiró al suelo y fingió estar muerto. El oso olfateó y se fue. El primero bajó y preguntó qué le dijo el oso. “Que los amigos verdaderos no abandonan”. Moraleja: La adversidad revela los afectos reales.",
    "El búho y el águila — El águila presumía de su fuerza y vista. El búho respondió: “Yo no vuelo tan alto, pero veo en la oscuridad, donde tú no”. Moraleja: Cada virtud es única. No necesitas brillar donde otros lo hacen.",
  ],
};

const propuestas = [
  "Haz un monólogo imaginario: escribe lo que le dirías a tu 'yo interior' herido.",
  "Crea una miniobra de teatro: tú eres el protagonista que se reconcilia con su sombra.",
  "Escribe una carta desde el futuro: ¿qué te dice tu yo dentro de 5 años?",
  "Baila libremente 3 minutos sin juzgarte, solo siente tu cuerpo.",
  "Practica respiración consciente: 4 segundos inhalar, 4 mantener, 4 exhalar.",
  "Cierra los ojos e imagina a alguien sabio que te aconseja desde dentro.",
  "Cuenta la fábula a alguien y pregúntale qué aprendió.",
  "Dibuja un símbolo que represente tu emoción de hoy, sin pensar.",
  "Reescribe una de las fábulas... pero cambiando el final a uno que te anime.",
  "Representa en tu habitación una escena: tú reconociendo tu fuerza interior.",
];

function mostrarFabula(estado) {
  const fabula =
    fabulas[estado][Math.floor(Math.random() * fabulas[estado].length)];
  const propuesta = propuestas[Math.floor(Math.random() * propuestas.length)];
  document.getElementById("respuesta").innerHTML = `
        <div class="fabula">
            <h2>Fábula del día:</h2>
            <p>${fabula}</p>
            <p class="propuesta"><strong>¿Una idea para ti?</strong><br>${propuesta}</p>
        </div>
    `;
}
