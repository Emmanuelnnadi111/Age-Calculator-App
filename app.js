const dayError = document.querySelector('.error-day');
const monthError = document.querySelector('.error-month');
const yearError = document.querySelector('.error-year');
const dayResult = document.querySelector('.day-result');
const monthResult = document.querySelector('.month-result');
const yearResult = document.querySelector('.year-result');
const submitBtn = document.querySelector('.submit-button');
const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
const inputRequiredError = "This field is required";
const inputDayError = "Must be a valid date";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be in the past";

function checkDayInput() {
    let value = inputDay.value;
    if(value == '') {
        dayError.innerHTML = inputRequiredError;
        inputDay.style.borderColor = '#ff5757';
        document.querySelector('.label').style.color = '#ff5757';
        return false;   
    } else if (value < 1 || value > 31) {
        dayError.innerHTML = inputDayError;
        return false;
    } else {
        dayError.innerHTML = '';
        inputDay.style.borderColor = 'none';
        document.querySelector('.label').style.color = 'none';
        return true;
    }
}
function checkMonthInput() {
    let value = inputMonth.value;
    if(value == '') {
        monthError.innerHTML = inputRequiredError;
        inputMonth.style.borderColor = '#ff5757';
        document.querySelector('.label-2').style.color = '#ff5757';
        return false;
    } else if (value < 1 || value > 12) {
        monthError.innerHTML = inputMonthError;
        return false;
    } else {
        monthError.innerHTML = '';
        inputMonth.style.borderColor = 'none';
        document.querySelector('.label-2').style.color = 'none';
        return true;
    }
}
function checkYearInput() {
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if(value == '') {
        yearError.innerHTML = inputRequiredError;
        document.querySelector('.label-3').style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false;
    } else if (value  > currentYear) {
        yearError.innerHTML = inputYearError;
        return false;
    } else {
        yearError.innerHTML = '';
        inputYear.style.borderColor = 'none';
        document.querySelector('.label-3').style.color = 'none';
        
        return true;
    }
}

function calculateAge(birthday) {
    let birthdate = new Date(birthday)
    let today = new Date();
    let years = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (month < 0 || (month === 0 && days < 0)) {
        years--;
        if (month === 0) {
            month = 11;
        } else {
            month = 12 + month;
        }
        days = 30 + days;
    }
    yearResult.innerHTML = years;
    monthResult.innerHTML = month;
    dayResult.innerHTML = days;
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();
    if (!day || !month || !year) return
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
})