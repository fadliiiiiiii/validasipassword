const inputPassword = document.getElementById("password");
const errorMessage = document.getElementById("message");
const submitButton = document.getElementById("submit");
const seeButton = document.getElementById("see");

submitButton.addEventListener("click",() =>{
    const password = inputPassword.value;

    if(password.length > 7){
        errorMessage.textContent = "Password Valid"
        errorMessage.style.color = "green"
    } else {
        errorMessage.textContent = "Password Terlalu Pendek"
        errorMessage.style.color = "red"
    }
});
seeButton.addEventListener("click",() =>{
    const password = inputPassword.value;

    if(password){
        errorMessage.textContent = password
        errorMessage.style.color = "blue"
    }
});