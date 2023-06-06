const email = document.getElementById("email"),
         errorMsg = document.getElementById("error-msg"),
         error = document.getElementById("error"),
         form = document.getElementById("form"),
         sendBtn = form.querySelector("arrow");
      
      form.addEventListener("submit", (e)=>{
       e.preventDefault() 
       let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
        if(email.value == ""){
            errorMsg.textContent = "Email can't be blank";
            errorMsg.classList.add("active");
        }else if(!email.value.match(pattern)){
            errorMsg.textContent = "Please provide a valid email";
            errorMsg.classList.add("active");
            error.classList.add("active");
            email.classList.add("active");
        }else{
           email.classList.remove("active");
            errorMsg.classList.remove("active");
            error.classList.remove("active");
        }
});