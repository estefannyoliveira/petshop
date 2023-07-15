function logar(){
    var user = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;

    if(user.length === 0 || senha.length === 0){
        alert("Preencha os dados de login!")
    }else if (user === "admin" && senha === "admin"){
        window.location.href = 'index.html'
        alert("Login ou senha incorretos! confira os dados.")
    }
}

