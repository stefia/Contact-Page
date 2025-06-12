document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pricingForm');
    form.addEventListener('submit', e => {
        form.classList.add('pricing-form--submitted');
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    });
});

