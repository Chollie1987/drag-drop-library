function createFlowBox(text) {
  const box = document.createElement('div');
  box.className = 'flow-box';
  box.textContent = text;
  box.id = generateId('flow');

  // Use Utilities.js to generate a unique ID
//   const id = generateId('flow');
//   box.id = id;

  // Style position for visibility
  box.style.position = 'absolute';
  box.style.left = '50px';
  box.style.top = '50px';

  // Add to page
  document.body.appendChild(box);

  // Make it draggable
  MiniLib.makeDraggable(box.id, (x, y) => {
    showMessage(`🔄 ${text} moved to X=${x}, Y=${y}`);
  });

  // Show message when created
  showMessage(`✅ Flow box "${text}" created.`);
}


// function createFlowBox(text) {
//   const box = document.createElement('div');
//   box.className = 'flow-box';
//   box.textContent = text;
//   document.body.appendChild(box);
// }
