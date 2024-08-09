const name = document.querySelector('#name')
const address = document.querySelector('#address')
const Email = document.querySelector('#emailError').value
const Password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    if (name.value == '' && name.value.length <= 1) {
        document.querySelector('#error').innerHTML = 'name is required '


    }
    if (address.value == '') {
        document.querySelector('#addrError').innerHTML = 'Address is Required'
    }

    if(Email=='' ){
        document.querySelector('#emailError').innerHTML = 'A valid Email is required'
    }

    if (Password.value === '') {

        document.getElementById('passwrdError').innerHTML = 'password is required'
    } else if (Password.value.length <= 5) {
        document.querySelector("#passwrdError").innerHTML = 'password must me atleast 6 character'
    }

})


const user = {
    'user': `${Email}`,
    "passwrd": `${Password}`
}


localStorage.setItem('Id', JSON.stringify(user))



