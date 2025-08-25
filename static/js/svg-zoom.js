// Zoom para diagramas SVG Mermaid
(function() {
  'use strict';
  
  function initializeSVGZoom() {
    // Buscar todos los contenedores mermaid
    const mermaidContainers = document.querySelectorAll('.mermaid');
    
    mermaidContainers.forEach(container => {
      if (container.hasAttribute('data-zoom-enabled')) return;
      
      const svg = container.querySelector('svg');
      if (!svg) return;
      
      container.setAttribute('data-zoom-enabled', 'true');
      container.style.cursor = 'zoom-in';
      
      container.addEventListener('click', function(e) {
        e.preventDefault();
        openSVGModal(svg);
      });
    });
  }
  
  function openSVGModal(svgElement) {
    // Crear overlay modal
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      cursor: zoom-out;
      backdrop-filter: blur(3px);
    `;
    
    // Crear contenedor para SVG ampliado
    const svgContainer = document.createElement('div');
    svgContainer.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 2rem;
      max-width: 95vw;
      max-height: 95vh;
      overflow: auto;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    
    // Clonar y ampliar SVG
    const svgClone = svgElement.cloneNode(true);
    svgClone.style.cssText = `
      width: auto;
      height: auto;
      max-width: none;
      cursor: zoom-out;
    `;
    
    svgContainer.appendChild(svgClone);
    modal.appendChild(svgContainer);
    document.body.appendChild(modal);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Función para cerrar
    function closeModal() {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }
    }
    
    // Event listeners para cerrar
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target === svgClone) {
        closeModal();
      }
    });
    
    // Cerrar con ESC
    function escapeHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    }
    
    document.addEventListener('keydown', escapeHandler);
  }
  
  // Inicializar cuando DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSVGZoom);
  } else {
    initializeSVGZoom();
  }
  
  // Re-inicializar cuando cambien las rutas (SPA)
  window.addEventListener('popstate', () => {
    setTimeout(initializeSVGZoom, 1000);
  });
  
  // Observer para diagramas cargados dinámicamente
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length > 0) {
        setTimeout(initializeSVGZoom, 500);
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
})();