document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Gather form data
    const formData = {
      Product Name: document.getElementById('Product Name').value,
      Product Price: parseFloat(document.getElementById('Product Price').value),
      Product Quantity: parseInt(document.getElementById('Product Quantity').value),
      Total Price: parseFloat(document.getElementById('Total Price').value),
      UID: document.getElementById('UID').value,
      Product Id: document.getElementById('Product Id').value,
      Currency Iso: document.getElementById('Currency Iso').value,
      Name: document.getElementById('Name').value // Assuming 'Name' here refers to registration name
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
        "Productname": formData.Product Name,
        "Productprice": formData.Product Price,
        "Productquantity": formData.Product Quantity,
        "Totalprice": formData.Total Price,
        "UID": formData.UID,
        "Productid": formData.Product Id,
        "CurrencyIso": formData.Currency Iso,
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
