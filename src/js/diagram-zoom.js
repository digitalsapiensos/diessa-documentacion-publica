// Funcionalidad de zoom para diagramas Mermaid
document.addEventListener('DOMContentLoaded', function() {
  // Esperar a que Mermaid renderice los diagramas
  setTimeout(() => {
    const diagrams = document.querySelectorAll('.mermaid');
    
    diagrams.forEach(diagram => {
      // Añadir event listener para click
      diagram.addEventListener('click', function() {
        openDiagramModal(this);
      });
      
      // Añadir indicador visual de que es clicable
      diagram.setAttribute('title', 'Haz click para ver en pantalla completa');
    });
  }, 1000);
});

function openDiagramModal(diagramElement) {
  // Crear modal
  const modal = document.createElement('div');
  modal.className = 'diagram-modal';
  
  // Clonar el diagrama
  const diagramClone = diagramElement.cloneNode(true);
  modal.appendChild(diagramClone);
  
  // Añadir al DOM
  document.body.appendChild(modal);
  
  // Event listener para cerrar
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.querySelector('.diagram-modal')) {
      const existingModal = document.querySelector('.diagram-modal');
      if (existingModal) {
        document.body.removeChild(existingModal);
      }
    }
  });
}