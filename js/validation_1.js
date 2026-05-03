function validateForm(){
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const cars=document.getElementById("carsList").value;
    const date=document.getElementById("date").value;
    const error=document.getElementById("error");

    const emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    const phonePattern=/^[0-9]+$/;
    const selectedDate=new Date(date);
    const today=new Date();
    today.setHours(0,0,0,0);
    error.style.color="red";

    if(name==="" || email==="" || phone==="" || cars==="" || date===""){
        error.innerText="All fields are required!";
        return false;
    }
    if(!email.match(emailPattern)){
        error.innerText="please enter a valid email address!";
        return false;
    }
    if(!phone.match(phonePattern)){
        error.innerText="please enter a valid phone number!";
        return false;
    }
    if(selectedDate<today){
        error.innerText="You can not book a tedt in past day!";
        return false;
    }
    alert(("Booking Successful"))
    window.location.href="index.html";
    return false;
}