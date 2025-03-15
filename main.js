 // Same as before, I've added the code that handles the vertical scroll 
 const modalContent = document.querySelector('.modal');

 function showModal() {
   modalContent.classList.add('show');
   document.body.classList.add('modal-open');
 }

 function hideModal() {
   modalContent.classList.remove('show');
   document.body.classList.remove('modal-open');
 }
 
// Get all the trigger buttons on the page
 const triggers = document.querySelectorAll('.modal-trigger');

// Loop through each trigger button using the forEach method
 triggers.forEach(function(trigger) {
     // Get the ID of the corresponding modal
     const modalID = trigger.dataset.modalId;

     // Find the corresponding modal and the close button
     const modal = document.getElementById(modalID);
     const closeButton = modal.querySelector('.close');

     // Add a click event listener to the trigger button to open the modal
     trigger.addEventListener('click', function() {
       modal.style.display = 'block';
       showModal();
     });

     // Add a click event listener to the close button to close the modal
     closeButton.addEventListener('click', function() {
       modal.style.display = 'none';
       hideModal();
     });

     // Add a click event listener to the window to close the modal when clicking outside the modal
     window.addEventListener('click', function(event) {
     if (event.target === modal) {
         modal.style.display = 'none';
         hideModal();
     }
   });
});


// AOS Animation

AOS.init({  
  offset: 50, 
  duration: 1500, 
  easing: 'ease', 
  // anchorPlacement: 'top-bottom',  
  once: false
});

