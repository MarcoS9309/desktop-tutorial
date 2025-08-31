/**
 * Componente de navegación global para el portafolio de Marco
 * @author Marco Vinicio
 * @version 1.0
 */

class MarcoNavigation {
  constructor() {
    this.proyectos = [
      {
        nombre: "Inicio",
        url: "/index.html",
        descripcion: "Página principal del portafolio",
        icono: "🏠"
      },
      {
        nombre: "Psicodrama Virtual",
        url: "/game.html",
        descripcion: "Juego de teatro emocional",
        icono: "🎭"
      },
      {
        nombre: "Fábulas Emocionales",
        url: "/FabulasEmocionales/index.html",
        descripcion: "Fábulas adaptativas según tu estado",
        icono: "📚"
      },
      {
        nombre: "Proyecto Intercultural",
        url: "/ProyectoIntercultural/index.html",
        descripcion: "Arte, cultura y pedagogía",
        icono: "🌍"
      }
    ];
    
    this.init();
  }

  init() {
    this.crearNavegacion();
    this.bindEvents();
  }

  crearNavegacion() {
    // Verificar si ya existe navegación
    if (document.querySelector('.marco-nav')) return;

    const nav = document.createElement('nav');
    nav.className = 'marco-nav';
    
    const navContent = `
      <div class="marco-nav-content">
        <button class="marco-nav-toggle" aria-label="Abrir menú de navegación">
          ☰ Proyectos de Marco
        </button>
        <div class="marco-nav-menu">
          ${this.proyectos.map(proyecto => `
            <a href="${proyecto.url}" class="marco-nav-item" title="${proyecto.descripcion}">
              <span class="marco-nav-icon">${proyecto.icono}</span>
              <span class="marco-nav-text">${proyecto.nombre}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    nav.innerHTML = navContent;
    
    // Insertar al inicio del body
    document.body.insertBefore(nav, document.body.firstChild);
    
    // Agregar estilos
    this.agregarEstilos();
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.marco-nav-toggle')) {
        this.toggleMenu();
      }
      
      // Cerrar menú al hacer clic fuera
      if (!e.target.closest('.marco-nav')) {
        this.cerrarMenu();
      }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.cerrarMenu();
      }
    });
  }

  toggleMenu() {
    const nav = document.querySelector('.marco-nav');
    nav.classList.toggle('marco-nav-open');
  }

  cerrarMenu() {
    const nav = document.querySelector('.marco-nav');
    nav.classList.remove('marco-nav-open');
  }

  agregarEstilos() {
    if (document.querySelector('#marco-nav-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'marco-nav-styles';
    styles.textContent = `
      .marco-nav {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        font-family: var(--font-primary, Georgia, serif);
      }

      .marco-nav-toggle {
        background: rgba(214, 185, 110, 0.95);
        color: #1e1b18;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .marco-nav-toggle:hover {
        background: rgba(214, 185, 110, 1);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }

      .marco-nav-menu {
        position: absolute;
        top: 60px;
        right: 0;
        background: rgba(254, 249, 240, 0.98);
        border-radius: 15px;
        padding: 15px;
        min-width: 220px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(214, 185, 110, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px) scale(0.95);
        transition: all 0.3s ease;
      }

      .marco-nav-open .marco-nav-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }

      .marco-nav-item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        margin: 5px 0;
        text-decoration: none;
        color: #704214;
        border-radius: 10px;
        transition: all 0.2s ease;
        border: 1px solid transparent;
      }

      .marco-nav-item:hover {
        background: rgba(255, 211, 105, 0.3);
        border-color: rgba(214, 185, 110, 0.5);
        transform: translateX(5px);
      }

      .marco-nav-icon {
        margin-right: 10px;
        font-size: 18px;
      }

      .marco-nav-text {
        font-size: 14px;
        font-weight: 500;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .marco-nav {
          top: 10px;
          right: 10px;
        }
        
        .marco-nav-menu {
          min-width: 200px;
          right: -10px;
        }
        
        .marco-nav-toggle {
          padding: 10px 16px;
          font-size: 13px;
        }
      }

      /* Animación de entrada */
      @keyframes marcoNavSlideIn {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .marco-nav {
        animation: marcoNavSlideIn 0.5s ease-out;
      }
    `;
    
    document.head.appendChild(styles);
  }
}

// Auto-inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new MarcoNavigation();
});
