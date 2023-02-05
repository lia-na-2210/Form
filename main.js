const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd2');
const submitbutton = document.getElementById('btn');

submitbutton.addEventListener('click', ()=> {
    let value = password.value;
    let value2 = passwordConfirm.value;

    if (value !== value2) {
        console.log('passwords don match')
    } else {
        console.log('yipi')
    }

})