
const login = () => {
    

    const userId = document.querySelector("#username").value
    console.log(userId)
    
    const passwrd = document.querySelector("#password").value
    console.log(passwrd)


    const name = localStorage.getItem('fullname')
    console.log(name)
    const email = localStorage.getItem('username')
    console.log(email)
    const pass = localStorage.getItem('password')
    console.log(pass)


    if(userId === email && passwrd === pass){
        alert(`${name}, logged in successfully`)
    }
    else{
        alert("credential does not match")
    }
}