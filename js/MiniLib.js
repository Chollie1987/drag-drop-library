
const MiniLib = (function () {
  function makeDraggable(elementId, onDropCallback) {
    const el = document.getElementById(elementId);
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    el.addEventListener('mousedown', function (e) {
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      isDragging = true;
      document.addEventListener('mousemove', moveElement);
      document.addEventListener('mouseup', stopDragging);
    });

    function moveElement(e) {
      if (!isDragging) return;
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }

    function stopDragging(e) {
      isDragging = false;
      document.removeEventListener('mousemove', moveElement);
      document.removeEventListener('mouseup', stopDragging);
      if (typeof onDropCallback === 'function') {
        onDropCallback(el.offsetLeft, el.offsetTop);
      }
    }
  }

  function showMessage(message) {
    let box = document.getElementById('message-box');
    if (!box) {
      box = document.createElement('div');
      box.id = 'message-box';
      document.body.appendChild(box);
    }
    box.textContent = message;
    box.className = 'message-box';
    setTimeout(() => {
      box.className = 'message-box hidden';
    }, 3000);
  }

  function showCoordinates(x, y) {
    console.log('showCoordinates called with', x, y);
    const position = { x, y };
    localStorage.setItem('draggablePosition', JSON.stringify(position));
 
    showMessage(`🎯 Box dropped at: X=${x}, Y=${y}`);
}

  return {
    makeDraggable,
    showMessage,
    showCoordinates
  };
})();
