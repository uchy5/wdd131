    function isCardNumberValid(number) {
    return number === '1234123412341234';
    }

    function displayError(msg) {
    document.querySelector('#form-errors').textContent = msg;
    }

    function submitHandler(event) {
    event.preventDefault();
    displayError(''); // clear previous errors

    const form = event.target;
    const cardNumber = form.cardNumber.value.trim();
    const cardMonth = parseInt(form.cardMonth.value.trim(), 10);
    const cardYear = parseInt('20' + form.cardYear.value.trim(), 10); // Convert to 4-digit year

    let errorMsg = '';

    if (isNaN(cardNumber) || cardNumber.length !== 16) {
        errorMsg += 'Invalid card number. ';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number not recognized. ';
    }

    const now = new Date();
    const expDate = new Date(cardYear, cardMonth - 1);

    if (isNaN(expDate) || expDate <= now) {
        errorMsg += 'Expiration date must be in the future. ';
    }

    if (errorMsg) {
        displayError(errorMsg);
        return false;
    }

    alert('Payment Submitted Successfully!');
    return true;
    }

    document.querySelector('#credit-card').addEventListener('submit', submitHandler);
