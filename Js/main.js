M.AutoInit();

const result = document.querySelector('.result');
result.style.display = 'none';

class Person {
    constructor(peso, idade, altura) {
        this.idade = idade,
            this.peso = peso,
            this.altura = altura
    }
    static ClearField(){
        const peso = document.querySelector('#peso').value = '';
        const altura = document.querySelector('#altura').value = '';
        const idade = document.querySelector('#idade').value = '';
    }

    static Calc() {

        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        const idade = document.querySelector('#idade').value;

        if (peso === '' || isNaN(peso)) {
            alert('O campo peso deve estar devidamente preenchido');
        } else if (idade === '' || isNaN(idade)) {
            alert('O campo idade deve estar devidamente preenchido');
        } else if (altura === '' || isNaN(altura)) {
            alert('O campo altura deve estar devidamente preenchido');
        } else {
            const user = new Person(peso, idade, altura);

            let checkbox = document.querySelectorAll('.check');
            let radio = document.querySelectorAll('.sexo');
            let valCheck = '';
            let sex = '';

            checkbox.forEach(x => {
                if (x.checked === true) {
                    valCheck = x.value;
                }
            });
            radio.forEach(x => {
                if (x.checked === true) {
                    sex = x.value;
                }
            });

            if (sex === 'homem') {
                const m = [66.5 + (5 * user.altura) + (13.8 * user.peso) - (6.8 * user.idade)] * (valCheck);
                const pm = 0.0024 * Math.pow(user.altura, 2);
                document.querySelector('#place1').textContent = m.toFixed(2);
                document.querySelector('#place2').textContent = pm.toFixed(2);
                result.style.display = 'block';
            } else {
                const f = [665.1 + (1.8 * user.altura) + (9.5 * user.peso) - (4.7 * user.idade)] * (valCheck);
                const pf = 0.0023 * Math.pow(user.altura, 2);
                document.querySelector('#place1').textContent = f.toFixed(2);
                document.querySelector('#place2').textContent = pf.toFixed(2);
                result.style.display = 'block';
            }
        }
    }
}

document.querySelector('.calc').addEventListener('click', (e) => {
    Person.Calc();
    e.preventDefault();
});

document.querySelector('.voltar').addEventListener('click', ()=>{
    Person.ClearField();
    window.location.reload();
});

const x = JSON.parse(localStorage.getItem('key'));
//console.log(x);
document.querySelector('#user').textContent = x.username;