const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputDate = document.querySelector('#input-date');
const radios = document.getElementsByName('period');
const checked = document.querySelectorAll('.check-courses');
const inputPassword = document.querySelector('#input-password');
const span = document.querySelector('span')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    span.textContent = ''

    if (inputName.value.length < 10) {
        span.textContent = 'O nome deve conter ao menos 10 caracteres';
        return;
    }

    if (inputEmail.value.indexOf('gmail') === -1) {
        span.textContent = 'E-mail inválido!';
        return;
    }

    if (inputDate.value < 1921 || inputDate.value > 2004) {
        span.textContent = 'Data de nascimento inválida';
        return;
    }


    if (inputPassword.value.length < 8 || inputPassword.value.length > 16) {
        span.textContent = 'Digite uma senha válida.';
        return;
    }

    let selectPeriod = '';
    for (const radio of radios) {
        if (radio.checked) {
            selectPeriod = radio.value;
            console.log(`O período selecionado é o ${radio.value}`);

        }
    }

    const selectCourses = []

    for (const check of checked) {
        if (check.checked) {
            selectCourses.push(check.name);
        }
        span.textContent = 'Selecione um curso';

    }
    console.log(selectCourses);


    const cadastro = {
        name: inputDate.value,
        email: inputEmail.value,
        data: inputDate.value,
        checked: selectCourses,
        radios: selectPeriod,

    }

    console.log(cadastro);

    span.textContent = 'Inscrição realizada com sucesso!'

})