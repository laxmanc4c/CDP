document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Gather form data
    const formData = {
      Productname: document.getElementById('Productname').value,
      Productprice: parseFloat(document.getElementById('Productprice').value),
      Productquantity: parseInt(document.getElementById('Productquantity').value),
      Totalprice: parseFloat(document.getElementById('Totalprice').value),
      UID: document.getElementById('UID').value,
      Productid: document.getElementById('Productid').value,
      CurrencyIso: document.getElementById('CurrencyIso').value,
      Name: document.getElementById('Name').value // Assuming 'Name' here refers to registration name
    };

        if (confirm('Do you want to share your product details? Click OK for yes, Cancel for no.')) {
      // User clicked OK - Share full details
      shareFullDetails(formData);
    } 

    // Initialize Gigya CDP SDK
    gigya.cdp.init({
      apiDomain: 'EU5',
      bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
      appId: 'HAX3CyhnZ5UFygt7314MxA'
    })
    .then(function(sdk) {
      // Store the SDK in a global variable for future use if needed
      window.CDP = sdk;
      
      // Prepare data for CDP.report function
      CDP.report('Add To Cart', {
        "Productname": formData.Productname,
        "Productprice": formData.Productprice,
        "Productquantity": formData.Productquantity,
        "Totalprice": formData.Totalprice,
        "UID": formData.UID,
        "Productid": formData.Productid,
        "CurrencyIso": formData.CurrencyIso,
        "Name": formData.Name // Assuming 'Name' here refers to registration name
      });

      // Alert and/or other actions upon successful submission
      alert('Form submitted successfully to Gigya CDP with product details!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to Gigya CDP.");
    });

    // Reset the form after submission
    this.reset();
  });
});
