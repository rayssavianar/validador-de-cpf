const button = document.getElementById('validate-btn');
let cpf = document.getElementById('cpf-input');
cpf.addEventListener('input', () => {
    cpf.value = cpf.value.replace(/\D/g, '');
});

cpf.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        button.click();
    }                   
});
