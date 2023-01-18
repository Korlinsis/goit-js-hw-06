const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const NO_NAME = output.textContent;

input.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === ''){
        output.textContent = NO_NAME;
    };
});