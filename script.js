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
     
    gigya.cdp.init({
        apiDomain: 'EU5',
        bUnitId: '4_2arKfv5bsPsK9ODVBhCJeA',
        appId: 'HHDD-XdWAy3F82dmfNhegA'
    })
    .then(function(sdk) { return window.CDP = sdk;
  CDP.report('Registration_Form',
          {
              "emailid": email,
              "firstname": firstName
          }
          );
          alert('Form submitted successfully!');
   }).catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
                        
});
     
      this.reset();
    });
  });
