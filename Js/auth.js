document.querySelector('.btn').addEventListener('click', auth);

class Users {
    constructor(username, password, email, phone) {
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }
}
const data = [];

function auth(e) {

    const user_name = document.querySelector('#first_name').value;
    const password = document.querySelector('#password').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    const user = new Users(user_name, password, email,phone);
    data.push(user);
    localStorage.setItem('key', JSON.stringify(user));

    // e.preventDefault();
}