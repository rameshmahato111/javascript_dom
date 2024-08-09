// let messages = []
// if (name.value === '' || name.value == null) {
//   messages.push('Name is required')
// }

// if (password.value.length <= 6) {
// messages.push('Password must be longer than 6 characters')
// messages.push('atleast one upperletter')

// }

// if (password.value.length >= 20) {
// messages.push('Password must be less than 20 characters')
// }

// if (password.value === 'password') {
// messages.push('Password cannot be password')
// }

// if (messages.length > 0) {
// e.preventDefault()
// errorElement.innerText = messages.join(', ')
// }


const Email = document.querySelector("#username").value
const Password = document.querySelector("#password").value
const Credential = {
  user: 'amesh@gmail.com',
  password: 'password'
}


document.addEventListener('click', () => {
  new Promise((res, rej) => {

    if (Credential.user === Email && Credential.password === Password) {
      res(console.log('user is logged in successfully'))
      document.querySelector("#emailError").innerHTML = 'user is logged in successfully'
    }


    else {

      rej(document.querySelector("#passwrdError").innerHTML = 'authetication failed')
    }
  })

})


const usrLog = {
  'user': `${Email}`,
  "passwrd": `${Password}`
}


localStorage.setItem('cred', JSON.stringify(usrLog))
