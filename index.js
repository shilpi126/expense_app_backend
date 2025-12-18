
const showError = (message)=>{
document.getElementById("error").innerText = message;
   setTimeout(()=>{
      document.getElementById("error").innerText = "";
        },1000)
}


const showSuccessMessage = (message)=>{
document.getElementById("success").innerText = message;
  setTimeout(()=>{
       document.getElementById("success").innerText = "";
    },1000)
    return;
}

const handleFormSubmit =(e)=>{
e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    if(username.trim() === ""){
    showError("please enter username");
     
    return;
    }

    if(email.trim() === "" || !email.includes("@")){
    showError("please enter valid email");
    
    return;
    }

    if(phone.trim() === "" || phone.length < 10){
        showError("please valid mobile number");
       
        return;

    }
    
    showError("")
    const userData = {
        username,
        email,
        phone
    }

    showSuccessMessage("User signup sucessfully!")
    console.log(userData);
    

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}