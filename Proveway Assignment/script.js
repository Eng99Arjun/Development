// Ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', () => {
  // Cache the DOM elements for performance and easy access.
  const radioButtons = document.querySelectorAll('input[name="units"]');
  const totalPriceEl = document.getElementById('total-price');
  const addToCartBtn = document.getElementById('add-to-cart');

  /**
   * Updates the total price displayed based on the selected unit option.
   */
  function updatePrice() {
    let price = 0;
    const selected = document.querySelector('input[name="units"]:checked');
    if (selected) {
      // Determine the price based on the radio button's value.
      switch (selected.value) {
        case "1":
          price = 10.00;
          break;
        case "2":
          price = 18.00;
          break;
        case "3":
          price = 24.00;
          break;
        default:
          price = 0;
      }
    }
    // Format and display the total price.
    totalPriceEl.textContent = `$${price.toFixed(2)} USD`;
  }

  /**
   * Toggles visibility of additional selection options (size and colour)
   * for the 2-unit purchase option.
   */
  function updateSelectionVisibility() {
    const twoUnitRadio = document.getElementById('two-unit');
    // Get the closest parent fieldset which contains the .selection div.
    const twoUnitFieldset = twoUnitRadio.closest('.option');
    const selectionContainer = twoUnitFieldset.querySelector('.selection');
    // Show the extra options only when the two-unit option is selected.
    if (twoUnitRadio.checked) {
      selectionContainer.style.display = 'flex';
    } else {
      selectionContainer.style.display = 'none';
    }
  }

  // Attach change event listeners to all radio buttons.
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      updatePrice();
      updateSelectionVisibility();
    });
  });

  // Perform initial update once the page has loaded.
  updatePrice();
  updateSelectionVisibility();

  // Handle click event on the "Add to Cart" button.
  addToCartBtn.addEventListener('click', () => {
    // Additional form validations or data collection can be added here.
    alert("Items added to cart. Thank you for your purchase!");
  });
});