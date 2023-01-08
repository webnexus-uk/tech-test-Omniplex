let isDragging = false;
let startX, startY;

document.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX;
  startY = e.pageY;
});

document.addEventListener('mousemove', e => {
  e.preventDefault();
  if (!isDragging) return;

  const selection = document.getElementById('selection');
  selection.style.left = Math.min(e.pageX, startX) + 'px';
  selection.style.top = Math.min(e.pageY, startY) + 'px';
  selection.style.width = Math.abs(e.pageX - startX) + 'px';
  selection.style.height = Math.abs(e.pageY - startY) + 'px';
});

document.addEventListener('mouseup', e => {
  isDragging = false;

  const selectionRect = document.getElementById('selection').getBoundingClientRect();
  let largestElement = null;
  let largestArea = 0;
  document.querySelectorAll('.min-h-full *').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.left >= selectionRect.left && rect.top >= selectionRect.top && rect.right <= selectionRect.right && rect.bottom <= selectionRect.bottom) {
      const area = rect.width * rect.height;
      if (area > largestArea) {
        largestElement = element;
        largestArea = area;
      }
    }
  });

  largestElement.style.border = '2px solid red';
  largestElement.style.borderRadius = '5px';

  document.getElementById('overlay').style.display = 'none';
});
