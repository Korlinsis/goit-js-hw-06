const input = document.querySelector("input");

input.addEventListener("blur", (e) => {
    if (e.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid'); 
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
});