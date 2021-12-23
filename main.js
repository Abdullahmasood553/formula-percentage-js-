// document.getElementById('discount-form').addEventListener('submit', calculateDiscount);

 document.getElementById('discount-form').addEventListener('submit', function(e) {

    // Hide Results
    document.getElementById('results').style.display = 'none';

    // Show Loader
    document.getElementById('loader').style.display = 'block';
    setTimeout(calculateDiscount, 2000);
    e.preventDefault();
 });

// Calculate Results
function calculateDiscount() {
 
    // UI variables
    const actualPrice = document.getElementById('price');
    let discountedResult = document.getElementById('discounted-price');

    const priceInput = parseFloat(actualPrice.value);


    // Complete Formula to find discount
     const x = priceInput > 20000 && priceInput <= 35000 ? priceInput * (10 / 100) : priceInput * (6 / 100);
   

    
    // Subtract the discount from the orignal file
    const discountedPrice = x;
    // console.log(`Discounted Result: ${discountedPrice}`);
    if(isFinite(discountedPrice)) {
        discountedResult.value = discountedPrice.toFixed(2);

        // Show Reult
        document.getElementById('results').style.display = 'block';

        // Hide Loader
        document.getElementById('loader').style.display = 'none';
        
        //    console.log(`Discounted Result: ${discountedResult}`);
    } else {
        // console.log('Please check your number');
        showError('Shoreyo number tey pao');

        
    }

    // e.preventDefault();
}


// Show Error 

function showError(error) {

    // Hide Reult
    document.getElementById('results').style.display = 'none';

    // Hide Loader
    document.getElementById('loader').style.display = 'none';
 
    // Create a div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create a class
    errorDiv.className = 'alert alert-danger';
    // Create textnode and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 sec
    setTimeout(clearError, 3000);
}


// Clear Error Function
function clearError() {
    document.querySelector('.alert').remove();
}