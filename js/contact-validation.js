function validateForm(){
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("problem").value.trim();
    const error=document.getElementById("error");

    const emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    error.style.color="red";

    if(name==="" || email==="" || message===""){
        error.innerText="All fields are required!";
        return false;
    }
    if(!email.match(emailPattern)){
        error.innerText="please enter a valid email address!";
        return false;
    }
    if(message.length<10){
        error.innerText="please give us more information about you problem!";
        return false;
    }
    alert(("The Form Submitted Successful"))
    window.location.href="index.html";
    return false;
}