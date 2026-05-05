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


$("#registerForm").submit(function (e) {

    let username = $("#regUsername").val().trim();
    let email = $("#email").val().trim();
    let password = $("#regPassword").val().trim();
    let confirmPassword = $("#confirmPassword").val().trim();

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        e.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        e.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        e.preventDefault();
        return;
    }

});
