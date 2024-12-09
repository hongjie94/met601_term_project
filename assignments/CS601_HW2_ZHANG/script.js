/********************  FInitialize the application ********************/
document.addEventListener('DOMContentLoaded', async () => {
  // Fetch and display items
  await fetchData();
  setupDragAndDrop();
});

/********************  Fetch data from local JSON file ********************/
async function fetchData() {
  try {
      const response = await fetch('./items.json');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayItems(data);
      return data;
  } catch (error) {
      showError('Error loading data: ' + error.message);
  }
}

/********************  Display items in the container ********************/
function displayItems(items) {
  const itemsList = document.getElementById('itemsList');
  itemsList.innerHTML = ''; // Clear existing items
  
  // Shuffle the items for a mixed display
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);
  
  shuffledItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'item';
      itemElement.draggable = true;
      itemElement.dataset.category = item.category;
      itemElement.dataset.id = item.id;
      itemElement.textContent = item.name;
      itemsList.appendChild(itemElement);
  });
}

/********************  Set up drag and drop functionality ********************/
function setupDragAndDrop() {
  const items = document.querySelectorAll('.item');
  const dropZones = document.querySelectorAll('.drop-zone');

  items.forEach(item => {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragend', handleDragEnd);
  });

  dropZones.forEach(zone => {
      zone.addEventListener('dragover', handleDragOver);
      zone.addEventListener('drop', handleDrop);
      zone.addEventListener('dragenter', handleDragEnter);
      zone.addEventListener('dragleave', handleDragLeave);
  });
}

/********************  Drag and drop event handlers ********************/
function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.category);
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  const dropZone = e.target.closest('.drop-zone');
  if (dropZone) {
      dropZone.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  const dropZone = e.target.closest('.drop-zone');
  if (dropZone) {
      dropZone.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  const dropZone = e.target.closest('.drop-zone');
  if (!dropZone) return;
  
  dropZone.classList.remove('drag-over');
  
  const draggedItemCategory = e.dataTransfer.getData('text/plain');
  const targetZoneCategory = dropZone.dataset.category;
  
  if (draggedItemCategory === targetZoneCategory) {
      const draggedItem = document.querySelector('.dragging');
      if (draggedItem) {
          dropZone.appendChild(draggedItem);
      }
  }else {
      showError('You can only drop items of the same category.');
  }
}

/******************** Show Error ********************/
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;
  document.body.insertBefore(errorDiv, document.querySelector('.container'));

  // Add fade-in effect
  errorDiv.style.opacity = '0';
  setTimeout(() => {
      errorDiv.style.opacity = '1';
  }, 10);

  // Remove the error message after 3 seconds with fade-out effect
  setTimeout(() => {
      errorDiv.style.opacity = '0';
      setTimeout(() => {
          errorDiv.remove();
      }, 300);
  }, 3000);
}

/******************** Reset Button ********************/
document.getElementById('resetButton').addEventListener('click', async () => {
  // Clear all drop zones
  document.querySelectorAll('.drop-zone').forEach(zone => {
      const title = zone.querySelector('h2');
      zone.innerHTML = '';
      zone.appendChild(title);
  });
  
  // Refetch and redisplay all items
  await fetchData();
  setupDragAndDrop();
  
});