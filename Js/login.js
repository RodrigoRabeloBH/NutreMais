const base = [];
const obj = JSON.parse(localStorage.getItem('key'));
base.push(obj);

const btn = document.querySelector('.btn').addEventListener('click', Login);

function Login(e) {

    const pass = document.querySelector('#Password').value;
    const mail = document.querySelector('#email').value;
   
    console.log(pass);
    if (base === null) {
        return false;
    } else {
        base.forEach(element => {
            if (pass === element.password && element.email === mail) {
                window.location.assign("https://nutrimais.netlify.com/data.html");
            } else {
                alert("Email ou senha não confere");
            }
        });
    }
    e.preventDefault();
}