# 🔍 Validador de CPF

Um projeto simples e eficiente para validação de CPFs brasileiros, verificando se o número informado é válido de acordo com as regras oficiais.

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar lógica de programação e manipulação de dados em JavaScript, aplicando o algoritmo de validação de CPF.

O sistema analisa o CPF informado e retorna se ele é válido ou inválido.

## ⚙️ Funcionalidades

* ✅ Verificação de CPF válido
* ❌ Identificação de CPF inválido
* 🚫 Bloqueio de CPFs com números repetidos (ex: 111.111.111-11)
* 🔢 Cálculo automático dos dígitos verificadores

## 🧠 Como funciona

O CPF é validado através de um cálculo matemático que verifica os dois últimos dígitos do número. O sistema:

1. Remove caracteres não numéricos
2. Verifica se todos os números são iguais (caso inválido)
3. Calcula o primeiro dígito verificador
4. Calcula o segundo dígito verificador
5. Compara com o CPF informado

## 💻 Tecnologias utilizadas

* HTML
* CSS
* JavaScript

## 🚀 Como usar

1. Abra no link: https://validadorr.netlify.app/

## 📂 Estrutura do projeto
```
📁 validador-de-cpf
 ├── index.html
 └── script.js
 📁 src
  ├── style.css
  ├── reset.css
  ├── variables.css
  
```

## 📸 Preview

<img width="958" height="549" alt="Captura de tela 2026-04-07 161401" src="https://github.com/user-attachments/assets/30639082-51b7-46c9-9ff2-7e73be9a167d" />

## 📄 Licença

Este projeto está sob a licença MIT.

---

💡 Desenvolvido para fins de estudo e prática.
