// script.js - FINAL version: Size always visible, Month only for crystal, Price updates correctly

console.log("Script loaded successfully");

// Elements
const typeSelect = document.getElementById('type-select');
const monthGroup = document.getElementById('month-group');
const sizeGroup = document.getElementById('size-group');
const mainImage = document.getElementById('main-image');
const priceDisplay = document.getElementById('price-display');

// Price data (unchanged)
const prices = {
  plain: {
    "5.00": 130, "5.25": 135, "5.50": 135, "5.75": 135,
    "6.00": 135, "6.25": 140, "6.50": 140, "6.75": 140,
    "7.00": 140, "7.25": 140, "7.50": 140, "7.75": 140,
    "8.00": 145, "8.25": 145, "8.50": 145, "8.75": 150,
    "9.00": 150
  },
  corrugated: {
    "5.00": 135, "5.25": 140, "5.50": 140, "5.75": 140,
    "6.00": 140, "6.25": 145, "6.50": 145, "6.75": 145,
    "7.00": 145, "7.25": 145, "7.50": 145, "7.75": 145,
    "8.00": 150, "8.25": 150, "8.50": 150, "8.75": 155,
    "9.00": 155
  },
  crystal: {
    "5.00": 110, "5.25": 115, "5.50": 115, "5.75": 115,
    "6.00": 115, "6.25": 120, "6.50": 120, "6.75": 120,
    "7.00": 120, "7.25": 120, "7.50": 120, "7.75": 120,
    "8.00": 125, "8.25": 125, "8.50": 125, "8.75": 130,
    "9.00": 130
  }
};

// Update function: image, price, visibility
function updateDisplay() {
  const type = typeSelect.value;

  // Month: show only for crystal
  monthGroup.style.display = (type === 'crystal') ? 'block' : 'none';

  // Size: ALWAYS visible (remove any hiding)
  sizeGroup.style.display = 'block';

  // Image
  let newSrc = 'images/226.jpg';
  if (type === 'corrugated') {
    newSrc = 'images/226corrugated.jpg';
  } else if (type === 'crystal') {
    const month = document.getElementById('month-select').value || 'jan';
    newSrc = `images/226${month}.jpg`;
  }
  mainImage.src = newSrc;

  // Price
  const size = document.getElementById('size-select').value;
  if (type && size && prices[type] && prices[type][size]) {
    priceDisplay.textContent = `$${prices[type][size]}.00`;
  } else {
    priceDisplay.textContent = 'Select a type and size to see price';
  }
}

// Events
typeSelect.addEventListener('change', updateDisplay);
document.getElementById('month-select').addEventListener('change', updateDisplay);
document.getElementById('size-select').addEventListener('change', updateDisplay);

// Run on page load - critical for default "Plain" to show size & price immediately
window.addEventListener('DOMContentLoaded', updateDisplay);