document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else {
            alert("Thank you for your message!");
        }
    });
});
