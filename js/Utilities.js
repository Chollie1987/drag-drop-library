function showCoordinates(x, y) {
  const box = document.getElementById('message-box');
  box.textContent = `📍 Your new position: X = ${x}, Y = ${y}`;
  box.classList.remove('hidden');

  // Auto-hide after 3 seconds
  setTimeout(() => {
    box.classList.add('hidden');
  }, 3000);
}

// function showCoordinates(x, y) {
//   alert(`Way to go! You moved the box to these new coordinates: X=${x}, Y=${y}`);
// }
