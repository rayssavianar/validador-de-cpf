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
    } else if (digits.length > 6) {
        cpf.value = digits.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (digits.length > 3) {
        cpf.value = digits.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else {
        cpf.value = digits;
    }
});

const span = document.getElementById('result');

button.addEventListener('click',

    function limparCpf() {
        let cpfValue = cpf.value
        let value = cpfValue.trim()
        value = value.replace(/[^0-9]/g, '')

        console.log(`Seu cpf é ${value}`);

        function validarCpf() {

            let soma = 0

            for (let i = 0; i <= 8; i++) {

                let digito = value[i]
                let digitoNum = Number(digito)

                let peso = 10 - i

                let mult = digitoNum * peso

                soma += mult


                console.log(`soma: ${soma}`)
            }

            let resto = soma % 11
            let resultado = 11 - resto
            let digito1 = value[9]
            let digitoDoCpf = Number(digito1)
            let digitoCalculado = resultado >= 10 ? 0 : resultado

            if (digitoCalculado === digitoDoCpf) {
                console.log(`primeiro digito ok: ${digitoCalculado}`)
            } else {
                console.log("cpf inválido")
                span.innerText = "CPF Inválido"
                span.style.color = "red"
                return;
            }
            soma = 0

            for (let j = 0; j <= 9; j++) {
                let digito = value[j]
                let digitoNum = Number(digito)
                let peso = 11 - j
                let mult = digitoNum * peso
                soma += mult
                console.log(`soma: ${soma}`)
            }   
            let resto2 = soma % 11
            let resultado2 = 11 - resto2
            let digito2 = value[10]
            let digitoDoCpf2 = Number(digito2)
            let digitoCalculado2 = resultado2 >= 10 ? 0 : resultado2
            if (digitoCalculado2 === digitoDoCpf2) {
                console.log(`segundo digito ok: ${digitoCalculado2}`)
                span.innerText = "CPF Válido"
                span.style.color = "green"
            } else {
                console.log("cpf inválido")
                span.innerText = "CPF Inválido"
                span.style.color = "red"
                return;
            }   
        }
        validarCpf()
    }
);



