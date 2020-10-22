const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nameValue = name.value
    const lastnameValue = lastName.value
    const emailValue = email.value
    const passwordValue = password.value

    if(!nameValue) {
        addError('name', 'First Name cannot be empty')
    } else {
        removeError('name')
    }

    if(!lastnameValue) {
        addError('lastname', 'Last Name cannot be empty')
    } else {
        removeError('lastname')
    }

    if(!emailValue) {
        addError('email', 'Email cannot be empty')
    } else if(!validateEmail(email)) {
        addError('email', 'Looks like this is not an email')
    } else {
        removeError('email')
    }

    if(!passwordValue) {
        addError('password', 'Password cannot be empty')
    } else {
        removeError('password')
    }
})

function addError(field, message){
    const formControl = form[field].parentNode
    formControl.classList.add('error')
    const smallElement = formControl.querySelector('small')
    smallElement.innerText = message
    smallElement.style.display = 'block'
}

function removeError(field) {
    const formControl = form[field].parentNode
    formControl.classList.remove('error')
    const smallElement = form[field].parentNode.querySelector('small')
    smallElement.style.display = 'none'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}