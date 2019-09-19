M.AutoInit();

document.querySelector('.btn').addEventListener('click', auth);

function auth(e) {

    const user_name = document.querySelector('#first_name').value;
    const password = document.querySelector('#password').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    const user = {
        username: user_name,
        password: password,
        email: email,
        phone: phone
    };   
    
    localStorage.setItem('key', JSON.stringify(user));

    // e.preventDefault();
}