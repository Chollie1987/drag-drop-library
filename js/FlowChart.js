function createFlowBox(text) {
  const box = document.createElement('div');
  box.className = 'flow-box';
  box.textContent = text;
  document.body.appendChild(box);
}
