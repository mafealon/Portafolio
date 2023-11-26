// script.js
document.addEventListener('DOMContentLoaded', function () {
    const goBackButtons = document.querySelectorAll('#go-back');

    goBackButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.history.back();
        });
    });
});
