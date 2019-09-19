M.AutoInit();
// slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    height: 600,
    transition: 500,
    interval: 6000,
    indicators: false
});

const master = {
    username: 'Master',
    password: '1q2w3e4r',
    email: 'master@email.com',
    phone: '(31) 9 9947-4172'
}
localStorage.setItem('key', JSON.stringify(master));