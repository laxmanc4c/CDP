document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data including new fields
    const formData = {
      Productname: document.getElementById('Productname').value,
      Productprice: parseFloat(document.getElementById('Productprice').value),
      Productquantity: parseInt(document.getElementById('Productquantity').value),
      Totalprice: parseFloat(document.getElementById('totalPrice').value),
      UID: document.getElementById('UID').value,
      Productid: document.getElementById('productID').value,
      CurrencyIso: document.getElementById('currencyIso').value,
      Name: document.getElementById('firstName').value
    };

    // Confirmation dialog
    const consentConfirmed = confirm('Do you want to share your full registration details? Click OK for yes, Cancel for no.');

    // Determine which function to call based on consent
    if (consentConfirmed) {
      shareFullDetails(formData);
    } else {
      shareBasicDetails(formData);
    }

    this.reset(); // Reset the form
  });

  function shareFullDetails(formData) {
    // Initialize Gigya CDP SDK for full details
    gigya.cdp.init({
      apiDomain: 'EU5',
      bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
      appId: 'HAX3CyhnZ5UFygt7314MxA'
    })
    .then(function(sdk) {
      // Store the SDK in a global variable for future use if needed
      window.CDP = sdk;

      // Prepare data for CDP.report function with full details
      CDP.report('Add To Cart', {
        "Product Name": formData.Productname,
        "Product Price": formData.Productprice,
        "Product Quantity": formData.Productquantity,
        "Total Price": formData.Totalprice,
        "UID": formData.UID,
        "Product Id": formData.Productid,
        "Currency Iso": formData.CurrencyIso
      });

      // Report data to Gigya CDP
      alert('Form submitted successfully with full details including product information!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
    });
  }

  function shareBasicDetails(formData) {
    // Initialize Gigya CDP SDK for basic details only
    gigya.cdp.init({
      apiDomain: 'EU5',
      bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
      appId: 'HAX3CyhnZ5UFygt7314MxA'
    })
    .then(function(sdk) {
      // Store the SDK in a global variable for future use if needed
      window.CDP = sdk;

      // Prepare data for CDP.report function with basic details only
      CDP.report('CustomerConsent', {
        "Productname": formData.Productname,
        "Productprice": formData.Productprice,
        "Productquantity": formData.Productquantity,
        "Totalprice": formData.Totalprice,
        "UID": formData.UID,
        "Productid": formData.Productid,
        "CurrencyIso": formData.CurrencyIso
      });

      // Report data to Gigya CDP
      alert('Form submitted successfully with basic details including product information!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
    });
  }
});
