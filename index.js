const formOpenBtn=document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formClose=document.querySelector(".form_close"),
loginBtn=document.querySelector("#login"),
signup=document.querySelector("#signup"),
pwShow=document.querySelectorAll(".hide");

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


