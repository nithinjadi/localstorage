let submitBtn=document.getElementById("btn");
let name=document.getElementById("signup-username");
let email=document.getElementById("signup-email");
let pswd=document.getElementById("signip-password");
submitBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value );
    localStorage.setItem("pswd", pswd.value);
    alert("signup successfully done");
    window.location.href="login.html";

});

let loginBtn=document.getElementById("btn");
loginBtn.addEventListener("click", ()=>{
    let nameStorage=localStorage.getItem("name");
    let pswdStorage=localStorage.getItem("pswd");
    let inputUsername=document.getElementById("login-username").value;
    let inputUserPswd=document.getElementById("login-password").value;

    if (nameStorage==inputUsername && pswdStorage==inputUserPswd){
        alert("login successfully...");
        window.location.href="home.html"; 
    }else{
        alert("Invalid credentials!..")
    }
});