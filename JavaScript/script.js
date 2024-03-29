const footer = document.querySelector("footer");

window.addEventListener ("scroll",function() {
    footer.classList.toggle ("MyFooterSticky", window.scrollY > 0);
});

var numberToGuess = Math.floor(Math.random() * 100) + 1;
        function checkGuess() {
            var guess = document.getElementById('guess').value;
            var message = document.getElementById('message');

            if (guess < numberToGuess) {
                message.style.color = 'red';
                message.innerHTML = 'Too low! Try again.';
            } else if (guess > numberToGuess) {
                message.style.color = 'red';
                message.innerHTML = 'Too high! Try again.';
            } else {
                message.style.color = 'green';
                message.innerHTML = 'Congratulations! You guessed it!';
            }
        }