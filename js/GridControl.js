
function createResizableTable(rows, cols) {
  const table = document.createElement('table');
  table.className = 'resizable-grid';

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      cell.textContent = `R${i+1}C${j+1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}
