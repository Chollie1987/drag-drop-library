document.addEventListener('DOMContentLoaded', () => {

  const saved = localStorage.getItem('draggablePosition');
  if (saved) {
    const { x, y } = JSON.parse(saved);
    const box = document.getElementById('draggable');
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;
  }
  
  MiniLib.makeDraggable('draggable', MiniLib.showCoordinates);

  if(typeof createResizableTable === 'function') {
    createResizableTable(3, 4);
    createFlowBox('Start')
  }
});


// document.addEventListener('DOMContentLoaded', () => {
//   makeDraggable('draggable', showCoordinates);
//   createFlowBox("Start");
//   createResizableTable(3, 4);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   makeDraggable('draggable', showCoordinates);
// });