function showMessage(message) {
   const box = document.getElementById('message-box');
   if (!box) {
    console.warn('⚠ message-box not found in the DOM')
   }
   
   box.textContent = message;
   box.classList.remove('hidden')
   
   setTimeout(() => {
     box.classList.add('hidden');
   }, 3000);
}

function showCoordinates(x, y) {
  showMessage(`📍 Your new position: X = ${x}, Y = ${y}`);
  // Auto-hide after 3 seconds
}

function generateId(prefix = 'item') {
  return `${prefix}-${Math.floor(Math.random() * 100000)}`;
}

// function showCoordinates(x, y) {
//   alert(`Way to go! You moved the box to these new coordinates: X=${x}, Y=${y}`);
// }
