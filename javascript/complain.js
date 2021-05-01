// Prevent Submission without filling required details
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.addClass("is-invalid");
        }
        else {
         
          $("#submit-btn").addClass("active");
       Message1();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


  // Get the modal
  var modal = document.getElementById("myModal");
    
  // Get the button that opens the modal
  var btn = document.getElementById("modal-submit");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  
  btn.onclick =function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

