document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Gather form data
    const formData = {
      productname: document.getElementById('productname').value,
      productprice: parseFloat(document.getElementById('productprice').value),
      productquantity: parseInt(document.getElementById('productquantity').value),
      totalprice: parseFloat(document.getElementById('totalprice').value),
      uid: document.getElementById('uid').value,
      productid: document.getElementById('productid').value,
      currencyiso: document.getElementById('currencyiso').value,
      name: document.getElementById('name').value // Assuming 'Name' here refers to registration name
    };
    
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
        "Productname": formData.productname,
        "Productprice": formData.productprice,
        "Productquantity": formData.productquantity,
        "Totalprice": formData.totalprice,
        "UID": formData.uid,
        "Productid": formData.productid,
        "CurrencyIso": formData.currencyiso,
        "Name": formData.name // Assuming 'Name' here refers to registration name
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
