document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('registrationForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const agreeToShare = confirm("Do you agree to share your profile information?");

    if (!agreeToShare) {
      alert("You have chosen not to share your profile information.");
      return;
    }

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
    .then(function(sdk) {
      window.CDP = sdk;
      CDP.report('Registration', {
        "Email": formData.email,
        "FirstName": formData.firstName,
        "LastName": formData.lastName,
        "Address": {
          "City": formData.city,
          "AddressLine1": formData.address1,
          "AddressLine2": formData.address2,
          "Country": formData.country,
          "State": formData.state,
          "Pincode": formData.pincode
        }
      });
      alert('Form submitted successfully!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
    });

    this.reset();

  });

});
