const body = document.body;
const currentTheme=localStorage.getItem('theme');
const btn=document.querySelector('.theme');

function switchTheme(){
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme','dark-theme');
    if(body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark-theme');
    }
    else{
        localStorage.setItem('theme','light');
    }
}

window.onload=function(){
    if(currentTheme==='dark-theme'){
        document.body.classList.add('dark-theme');
    }
}

if(btn){
    btn.onclick=switchTheme;
}