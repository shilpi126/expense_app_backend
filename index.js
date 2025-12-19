const API_URL = "http://localhost:4000/user";

const showError = (message)=>{
document.getElementById("error").innerText = message;
    setTimeout(()=>{
    document.getElementById("error").innerText = "";
        },2000)
}


const showSuccessMessage = (message)=>{
document.getElementById("success").innerText = message;
    setTimeout(()=>{
    document.getElementById("success").innerText = "";
    },2000)
    
}

const handleFormSubmit =(e)=>{
e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    if(username.trim() === ""){
    showError("Please enter username");
    return;
    }

    if(email.trim() === "" || !email.includes("@")){
    showError("Please enter valid email");
    return;
    }

    if(phone.trim() === "" || phone.length < 10){
        showError("Please valid mobile number");
        return;

    }
    
    const userData = {
        username,
        email,
        phone
    }


    createUser(userData);
    

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}


const createUser = async(userData) =>{
try{
    const response = await axios.post(`${API_URL}/signup`,userData);
    
    console.log(response);
    
    showSuccessMessage(`User signup sucessfully!`)
}catch(err){
    //console.log(err);
    showError(err.message);
        
    

}
}