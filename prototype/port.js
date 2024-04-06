document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.close');
  const options = document.querySelectorAll('.option');
  const submitInvestmentBtn = document.getElementById('submitInvestmentBtn'); // Get the submit button
  
  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  options.forEach(function(option) {
    option.addEventListener('click', function() {
      console.log(option.textContent);
      modal.style.display = 'none';
    });
  });
  
  submitInvestmentBtn.addEventListener('click', function() {
    console.log("Add investment functionality goes here"); // Placeholder for add investment functionality
    modal.style.display = 'none'; // Close the modal after submitting
  });
});
