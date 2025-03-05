function validateAndCalculate() {
const grossIncome = parseFloat(document.getElementById('grossIncome').value);
const extraIncome = parseFloat(document.getElementById('extraIncome').value);
const ageGroup = document.getElementById('ageGroup').value;
const deductions = parseFloat(document.getElementById('deductions').value);

// Validate input fields
let isValid = true;
if (isNaN(grossIncome) || grossIncome <= 0) {
isValid = false;
document.getElementById('grossIncome').nextElementSibling.querySelector('.error-icon').classList.remove('d-none');
} else {
document.getElementById('grossIncome').nextElementSibling.querySelector('.error-icon').classList.add('d-none');
}
if (isNaN(extraIncome) || extraIncome < 0) {
isValid = false;
document.getElementById('extraIncome').nextElementSibling.querySelector('.error-icon').classList.remove('d-none');
} else {
document.getElementById('extraIncome').nextElementSibling.querySelector('.error-icon').classList.add('d-none');
}
if (ageGroup === '') {
isValid = false;
document.getElementById('ageGroup').nextElementSibling.classList.remove('d-none');
} else {
document.getElementById('ageGroup').nextElementSibling.classList.add('d-none');
}
if (isNaN(deductions) || deductions < 0) {
isValid = false;
document.getElementById('deductions').nextElementSibling.querySelector('.error-icon').classList.remove('d-none');
} else {
document.getElementById('deductions').nextElementSibling.querySelector('.error-icon').classList.add('d-none');
}

// If input is valid, calculate tax
if (isValid) {
const totalIncome = grossIncome + extraIncome - taxBracket(grossIncome) - deductions;
const taxRateValue = taxRate(grossIncome);
const taxAmount = totalIncome * taxRateValue;
const netIncome = totalIncome - taxAmount;

// Show modal with results
const modalBody = document.getElementById('modalBody');
modalBody.innerHTML = `
    <p>Total Income: R${totalIncome.toFixed(2)}</p>
    <p>Tax Rate: ${taxRateValue * 100}%</p>
    <p>Tax Amount: R${taxAmount.toFixed(2)}</p>
    <p>Net Income: R${netIncome.toFixed(2)}</p>
`;
$('#resultModal').modal('show'); // Show Bootstrap modal
}
}

function taxBracket(income) {
if (income <= 237100) {
return income * 0.18;
} else if (income <= 370500) {
return income * 0.26;
} else if (income <= 512800) {
return income * 0.31;
} else if (income <= 673000) {
return income * 0.36;
} else if (income <= 857900) {
return income * 0.39;
} else if (income <= 1817000) {
return income * 0.41;
} else {
return income * 0.45;
}
}

function taxRate(income) {
if (income <= 237100) {
return 0.18;
} else if (income <= 370500) {
return 0.26;
} else if (income <= 512800) {
return 0.31;
} else if (income <= 673000) {
return 0.36;
} else if (income <= 857900) {
return 0.39;
} else if (income <= 1817000) {
return 0.41;
} else {
return 0.45;
}
}

$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});