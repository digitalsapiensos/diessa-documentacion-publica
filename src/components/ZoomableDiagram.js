import React, { useEffect } from 'react';

export default function ZoomableDiagram() {
  useEffect(() => {
    const addZoomToDiagrams = () => {
      const diagrams = document.querySelectorAll('.mermaid');
      
      diagrams.forEach(diagram => {
        if (diagram.hasAttribute('data-zoom-added')) return;
        
        diagram.style.cursor = 'zoom-in';
        diagram.setAttribute('title', 'Haz click para ver en pantalla completa');
        diagram.setAttribute('data-zoom-added', 'true');
        
        diagram.addEventListener('click', function() {
          // Crear modal
          const modal = document.createElement('div');
          modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            cursor: zoom-out;
          `;
          
          // Clonar diagrama
          const diagramClone = this.cloneNode(true);
          diagramClone.style.cssText = `
            max-width: 90vw;
            max-height: 90vh;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            cursor: zoom-out;
          `;
          
          modal.appendChild(diagramClone);
          document.body.appendChild(modal);
          
          // Cerrar modal
          const closeModal = () => {
            if (document.body.contains(modal)) {
              document.body.removeChild(modal);
            }
          };
          
          modal.addEventListener('click', closeModal);
          
          const escHandler = (e) => {
            if (e.key === 'Escape') {
              closeModal();
              document.removeEventListener('keydown', escHandler);
            }
          };
          
          document.addEventListener('keydown', escHandler);
        });
      });
    };

    // Ejecutar después de que Mermaid renderice
    const timer = setTimeout(addZoomToDiagrams, 2000);
    
    // También ejecutar en cambios de ruta
    const observer = new MutationObserver(addZoomToDiagrams);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}