// js/DragDrop.js

function makeDraggable(elementId, onDropCallback) {
  const el = document.getElementById(elementId);
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  el.addEventListener('mousedown', function(e) {
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
