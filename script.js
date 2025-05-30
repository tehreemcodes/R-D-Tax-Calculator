document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const below20Button = document.querySelector('.calculator__option--below');
    const above20Button = document.querySelector('.calculator__option--above');
    const resultSpan = document.getElementById('result');

    function calculatePercentage(value, percentage) {
        return (value * percentage / 100);
    }

    function updateResult() {
        const inputVal = parseFloat(amountInput.value) || 0;
        let percentage = below20Button.classList.contains('calculator__option--active') ? 43.5 : 38.5;
        const result = calculatePercentage(inputVal, percentage);
        resultSpan.textContent = result.toLocaleString('en-AU');
    }

    below20Button.addEventListener('click', function() {
        below20Button.classList.add('calculator__option--active');
        above20Button.classList.remove('calculator__option--active');
        updateResult();
    });

    above20Button.addEventListener('click', function() {
        below20Button.classList.remove('calculator__option--active');
        above20Button.classList.add('calculator__option--active');
        updateResult();
    });

    amountInput.addEventListener('input', updateResult);

    
    below20Button.click();
});
