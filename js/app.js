//This ensures your script waits until the full HTML DOM is ready before trying to run functions or manipulate the DOM

document.addEventListener('DOMContentLoaded', () => {

//Grabs all .flow-strp SVGs, extracts id, label, and current postion (x,y) and saves it as a JSON string in localStorage under the key flowLayout

  function saveLayout() {
  const steps = [...document.querySelectorAll('.flow-step')].map(svg => {
    return {
      id: svg.id,
      label: svg.querySelector('text').textContent,
      x: parseInt(svg.style.left),
      y: parseInt(svg.style.top)
    };
  });
  localStorage.setItem('flowLayout', JSON.stringify(steps));
  MiniLib.showMessage('✅ Layout Saved');
}

//Pulls from localStorage, loops over saved Flow Steps, and re-renders them using createFlowStepSvg

function loadLayout() {
  const saved = JSON.parse(localStorage.getItem('flowLayout') || '[]');
  saved.forEach(step => {
    createFlowStepSvg(step.id, step.label, step.x, step.y);
  });
  MiniLib.showMessage('📦 Layout Loaded');
}

//Clears all Flow Step SVGs and removes saved layout from localStorage

function resetLayout() {
  localStorage.removeItem('flowLayout');
  document.querySelectorAll('.flow-step').forEach(el => el.remove());
  MiniLib.showMessage('🧹 Layout Reset');
}

//Keeps original draggable box working

  const saved = localStorage.getItem('draggablePosition');
  if (saved) {
    const { x, y } = JSON.parse(saved);
    const box = document.getElementById('draggable');
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;
  }
  
  MiniLib.makeDraggable('draggable', MiniLib.showCoordinates);

  if (!localStorage.getItem('flowLayout')) {
  createFlowStepSvg('step1', 'Start');
  createFlowStepSvg('step2', 'Call');
  createFlowStepSvg('step3', 'Decision');
} else {
  loadLayout(); 
}
window.saveLayout = saveLayout;
window.loadLayout = loadLayout;
window.resetLayout = resetLayout;
});


// document.addEventListener('DOMContentLoaded', () => {
//   makeDraggable('draggable', showCoordinates);
//   createFlowBox("Start");
//   createResizableTable(3, 4);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   makeDraggable('draggable', showCoordinates);
// });