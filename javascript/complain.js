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
           sendMail();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



function sendMail(){
  // alert("sendmail called");

  var Mname = $('#form-name').val();
  var Memail = $('#form-email').val();
  var Mphone = $('#form-phone').val();
  var Mtext = $('#form-text').val();
  var Mdeal = document.getElementById("form-dealer");
  var Mcust = document.getElementById("form-customer");
  var Muser;
  if(Mdeal){
    Muser = "Dealer";
  } else {
    Muser = "Customer"
  }
  var Mbody = 'Details Name : '+Mname+'<br>Email : '+Memail+'<br>Phone number :'+Mphone+'<br>by : '+Muser+'<br>Complain Details : '+Mtext;
    Email.send({

    // Host : "smtp.gmail.com",
    // Username : "omsagar6654@gmail.com",
    SecureToken: "127e16a9-a597-41f7-9323-7251ac5e1842",
    To : '19ce003@charusat.edu.in',
    From : "omsagar6654@gmail.com",
    Subject : "New Mail from " + Mname + " - "+Msub,
    Body : Mbody
  }).then(
    message =>{
        if(message=='OK'){
          alert('Thank you, your email has been send Successfully');
        } else {
          alert('Error in sending email. Try again..');
        }
    }
  );
}
