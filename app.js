// listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate Result
function calculateResults(e) {
    console.log('Calculating...');
    // UI Vars
    const amount = document.getElementById('amount');
    const interst = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const amtotalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterst = parseFloat(interst.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    // compute monthly payment
    const x = Math.pow(1 = calculatedInterst, calculatedPayments);
    const monthly = (principal * x * calculatedInterst) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principl).toFixed(2);

    } else {
        showError('Please check your numbers');
    }


    e.preventDefault();
}

// show errors
function showError(error) {
    // create a div
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';

    // create text node append to div 
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);



}