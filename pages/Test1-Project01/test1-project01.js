function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email == 'p.wongwiriyawanich@gmail.com' && password == '123456') {
        document.getElementById("result").textContent = "Hello Word"
        document.getElementById("result").style.color = "LimeGreen"
    } else {
        document.getElementById("result").textContent = "Login Fail"
        document.getElementById("result").style.color = "red"
    }

}