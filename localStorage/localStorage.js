


const handleClick = () => {

    const fullname = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value


    localStorage.setItem('fullname', fullname)
    localStorage.setItem('username', email)
    localStorage.setItem('password', password)

    alert(`${fullname}, your account created successfully.`)
}
