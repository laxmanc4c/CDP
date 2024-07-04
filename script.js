document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
     
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        contact: document.getElementById('contact').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value,
        address1: document.getElementById('address1').value,
        address2: document.getElementById('address2').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value
      };
     
      console.log('Form Data:', formData);
     
      this.reset();
    });
  });