document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add');
    const minusButtons = document.querySelectorAll('.minus');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
    const totalDisplay = document.getElementById('totalp');
  
    let total = 0;
  
    addButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.nextElementSibling;
        const priceElement = this.parentNode.querySelector('.price');
        let quantity = parseInt(quantityElement.textContent);
        const price = parseInt(priceElement.textContent);
  
        quantity += 1;
        quantityElement.textContent = quantity;
        total += price;
        updateTotal();
      });
    });
  
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.previousElementSibling;
        const priceElement = this.parentNode.querySelector('.price');
        let quantity = parseInt(quantityElement.textContent);
        const price = parseInt(priceElement.textContent);
  
        if (quantity > 0) {
          quantity -= 1;
          quantityElement.textContent = quantity;
          total -= price;
          updateTotal();
        }
      });
    });
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = this.parentNode;
        const quantityElement = row.querySelector('.qte');
        quantityElement.textContent = "0"; // Set the quantity to 0
  
        total = 0;  // Reset total to $0
        updateTotal();
      });
    });
  
    heartButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('red');
      });
    });
  
    function updateTotal() {
      totalDisplay.textContent = `Shopping Bag total : $${total}`;
    }
  });