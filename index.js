document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.newsletter-form');
    const emailField = document.querySelector('.email-field');
    const successContainer = document.querySelector('.success-container');
    const dismissButton = document.querySelector('.dismiss-btn');
    const formContainer = document.querySelector('.grid-container')
    const errorMessage = document.querySelector('.error-message');
    const emailValue = document.querySelector('#email-value');

    //email validation function 
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    //Form submission event 
    form.addEventListener('submit', function (event) {
        event.preventDefault(); //prevents default submission
        const email = emailField.value.trim();

        if (isValidEmail(email)) {
            form.reset();
            formContainer.style.display = 'none';
            successContainer.style.display = 'flex';
            successContainer.classList.add('show');
            emailValue.innerText += email;
        } else {
            errorMessage.textContent = 'Invalid email required';
            errorMessage.style.display = 'block';
            emailField.style.border = '1px solid red';
            emailField.style.color = 'red';
        }
    })

    // close success container
    dismissButton.addEventListener('click', () => {
        successContainer.classList.remove('show');
        successContainer.style.display = 'none';
        formContainer.style.display ='grid';
        errorMessage.style.display = 'none';
        emailField.style.border = '1px solid hsl(0, 0%,58%)';
        emailValue.innerText = '';
    })
})
