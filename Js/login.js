
const obj = JSON.parse(localStorage.getItem('key'));

console.log(obj);

const btn = document.querySelector('.btn').addEventListener('click', Login);

function Login(e) {

    const pass = document.querySelector('#Password').value;
    const mail = document.querySelector('#email').value;
   
    console.log(pass);
    console.log(mail);

    if (obj === null) {
        return false;
    } else {
        obj.forEach(element => {
            if (pass == element.password && element.email == mail) {
			console.log(element.password, element.email);	
                window.location.assign("https://nutrimais.netlify.com/data.html");
            } else {
                // alert("Email ou senha não confere");
			// console.log(element.password, element.email);
            }
        });
    }
    e.preventDefault();
}