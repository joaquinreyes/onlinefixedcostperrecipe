const formContainer = document.querySelector('.form-container');
const form = formContainer.querySelector('form');
const fixedCostInput = form.querySelector('#fixed-cost');
const monthlyRevenueInput = form.querySelector('#monthly-revenue');
const monthlyVariableInput = form.querySelector('#monthly-variable');
const unitsSoldInput = form.querySelector('#units-sold');
const submitButton = form.querySelector('#submit-form');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const fixedCost = parseInt(fixedCostInput.value);
    const monthlyRevenue = parseInt(monthlyRevenueInput.value);
    const monthlyVariable = parseInt(monthlyVariableInput.value);
    const unitsSold = parseInt(unitsSoldInput.value);
    const unitaryResult = Math.round(fixedCost / ((monthlyRevenue / unitsSold) - (monthlyVariable / unitsSold)));
    const revenueResult = Math.round(monthlyVariable + fixedCost);
    // Replace HTML elements with the unitaryResult and revenueResult variables here
    const unitaryResultElement = document.querySelector('#units');
    unitaryResultElement.innerHTML = unitaryResult;
    const revenueResultElement = document.querySelector('#revenue');
    revenueResultElement.innerHTML = '$' + revenueResult;

});
