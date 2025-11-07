function createFlowStepSvg(id, label, x = 100, y = 100, category = 'default') {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "150");
  svg.setAttribute("height", "100");
  svg.setAttribute("viewBox", "0 0 150 100");
  svg.setAttribute("id", id);
  svg.setAttribute("class", "flow-step");
  svg.style.position = "absolute";
  svg.style.left = `${x}px`;
  svg.style.top = `${y}px`;

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", "150");
  rect.setAttribute("height", "100");
  rect.setAttribute("rx", "15");
  rect.setAttribute("fill", "#0e0f4a");

  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", "75");
  text.setAttribute("y", "55");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("fill", "#fff");
  text.setAttribute("font-size", "16");
  text.setAttribute("font-family", "sans-serif");
  text.textContent = label;

  svg.appendChild(rect);
  svg.appendChild(text);
  document.body.appendChild(svg);

  MiniLib.makeDraggable(id, (x, y) => {
    MiniLib.showMessage(`FlowStep "${label}" dropped at X=${x}, Y=${y}`);
  });
}




// function createFlowBox(text) {
//   const box = document.createElement('div');
//   box.className = 'flow-box';
//   box.textContent = text;
//   box.id = generateId('flow');

//   // Use Utilities.js to generate a unique ID
// //   const id = generateId('flow');
// //   box.id = id;

//   // Style position for visibility
//   box.style.position = 'absolute';
//   box.style.left = '50px';
//   box.style.top = '50px';

//   // Add to page
//   document.body.appendChild(box);

//   // Make it draggable
//   MiniLib.makeDraggable(box.id, (x, y) => {
//     showMessage(`🔄 ${text} moved to X=${x}, Y=${y}`);
//   });

//   // Show message when created
//   showMessage(`✅ Flow box "${text}" created.`);
// }


// function createFlowBox(text) {
//   const box = document.createElement('div');
//   box.className = 'flow-box';
//   box.textContent = text;
//   document.body.appendChild(box);
// }
