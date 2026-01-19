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

cpf.addEventListener("input", () => {
    let digits = cpf.value.replace(/\D/g, '').slice(0, 11);
    if (digits.length > 9) {
        cpf.value = digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }   else if (digits.length > 6) {
        cpf.value = digits.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (digits.length > 3) {
        cpf.value = digits.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else {
        cpf.value = digits;
    }   
});

