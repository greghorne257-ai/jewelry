// script.js

const typeSelect = document.getElementById('type-select');
const monthSelect = document.getElementById('month-select');
const monthGroup = document.getElementById('month-group');
const mainImage = document.getElementById('main-image');

// Function to update the main image based on current selections
function updateMainImage() {
  let newSrc = 'images/226.jpg'; // default to plain

  const selectedType = typeSelect.value;

  if (selectedType === 'corrugated') {
    newSrc = 'images/226corrugated.jpg';
  } else if (selectedType === 'crystal') {
    const selectedMonth = monthSelect.value;
    if (selectedMonth) {
      newSrc = `images/226${selectedMonth}.jpg`; // e.g., images/226jan.jpg
    }
  }

  // Only change if different to avoid unnecessary reloads
  if (mainImage.src !== newSrc) {
    mainImage.src = newSrc;
  }
}

// Show/hide month dropdown
typeSelect.addEventListener('change', function() {
  if (this.value === 'crystal') {
    monthGroup.style.display = 'block';
    // Trigger update immediately if month is already selected
    updateMainImage();
  } else {
    monthGroup.style.display = 'none';
    updateMainImage();
  }
});

// Update image when month changes (for Crystal)
monthSelect.addEventListener('change', updateMainImage);

// Optional: Trigger once on page load (in case default is Crystal)
updateMainImage();