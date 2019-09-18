document.querySelector('.btn').addEventListener('click', auth);


function auth(e) {

    const user_name = document.querySelector('#first_name').value;
    const password = document.querySelector('#password').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    const obj = {
	username: user_name,
	password: password,
	phone: phone,
	email: email
}

    if(localStorage.getItem('key') === null){
	const data = [];
	data.push(obj);
	localStorage.setItem('key', JSON.stringify(data));

}else{
	const data = JSON.parse(localStorage.getItem('key'));
	data.push(obj);
	localStorage.setItem('key', JSON.stringify(data));
}    

    // e.preventDefault();
}