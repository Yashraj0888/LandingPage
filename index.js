const formOpenBtn=document.querySelector("#form-open"),
signupbtn=document.querySelector("#form-open1"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formClose=document.querySelector(".form_close"),
loginBtn=document.querySelector("#login"),
signup=document.querySelector("#signup"),
pwShow=document.querySelectorAll(".hide");

signupbtn.addEventListener("click",()=>home.classList.add("signup"))
formClose.addEventListener("click",()=>home.classList.remove("signup"))
loginBtn.addEventListener("click",()=>home.classList.add("login"))
loginBtn.addEventListener("click",()=>home.classList.remove("signup"))
formClose.addEventListener("click",()=>home.classList.remove("login"))

formOpenBtn.addEventListener("click",()=>home.classList.add("show"))
formClose.addEventListener("click",()=>home.classList.remove("show"))

pwShow.forEach(icon=>{
    icon.addEventListener("click",()=>{
        let getPwInput=icon.parentElement.querySelector("input")
        if(getPwInput.type==="password"){
            getPwInput.type="text";
            icon.classList.replace("uil-eye-slash","uil-eye")
        }
        else{
            getPwInput.type="password";
            icon.classList.replace("uil-eye","uil-eye-slash")
        }
    })
})



signup.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
})

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
})

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("unactive");
})

signup.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("unactive");
    })
formClose.addEventListener("click",()=> formContainer.classList.remove("unactive"))
formClose.addEventListener("click",()=>home.classList.remove("active"))

