document.querySelector('.btn').addEventListener('click', auth);

class Users{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

function auth(e) {

    const user_name = document.querySelector('#first_name').value;
    const password = document.querySelector('#password').value;

    const user = new Users(user_name, password);    
    localStorage.setItem('key', JSON.stringify(user));
    // e.preventDefault();
}