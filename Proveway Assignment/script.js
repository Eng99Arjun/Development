const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalText = document.getElementById("total");

radioButtons.forEach(btn => {
  btn.addEventListener("change", () => {
    const selected = document.querySelector('input[name="unit"]:checked');
    const price = selected.getAttribute("data-price");
    totalText.textContent = `$${parseFloat(price).toFixed(2)} USD`;
  });
});

document.getElementById("productForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Added to cart!");
});
