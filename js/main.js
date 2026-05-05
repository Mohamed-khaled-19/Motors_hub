const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;
const currentTheme=localStorage.getItem('theme');

toggleBtn.onclick=function(){
    body.classList.toggle('dark');
    toggleBtn.classList.toggle('active');
    if(body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }
    else{
        localStorage.setItem('theme','light');
    }
}

window.onload=function(){
    if(currentTheme==='dark'){
        document.body.classList.add('dark');
        toggleBtn.classList.toggle('active');
    }
}


$("#loginForm").submit(function(e){

    let username = $("#username").val().trim();
    let password = $("#password").val().trim();

    if(username === "" || password === ""){
        alert("Please fill all fields");
        e.preventDefault();
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        e.preventDefault();
    }

});




