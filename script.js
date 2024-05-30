

function signup(){
    var getEmail = document.getElementById('semail')
    var getPass = document.getElementById('spass')
    localStorage.setItem('email',getEmail.value)
    localStorage.setItem('password',getPass.value)
    alert("Sign-up Successfully")
    location.href = 'login.html'
   

}

function login(){
    var getEmail = document.getElementById('lemail')
    var getPass = document.getElementById('lpass')

    if(localStorage.getItem('email') == getEmail.value && localStorage.getItem('password') == getPass.value){
        alert("You are Successfully login")
        location.href = 'welcome.html'
    } else{
        alert("Invalid email or password")
    }
}