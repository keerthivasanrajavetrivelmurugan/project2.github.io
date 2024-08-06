document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Get form data
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        // Here you could add code to send the data to a server or email

        alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
        
        // Reset the form
        form.reset();
    });
});
