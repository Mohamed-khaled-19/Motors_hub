let favorites=JSON.parse(localStorage.getItem('favorite')) || [];
document.addEventListener('DOMContentLoaded',()=>{
    updateButtons();
    displayFavorites();
});

function addToFavorite(event,button){
    event.preventDefault();
    const card=button.closest('.card');
    const cardId=card.getAttribute('car-id');
    const index=favorites.findIndex(item=>item.id===cardId);
    if(index=== -1){
        favorites.push({
            id:cardId,
            content:card.innerHTML
        });
        button.textContent="Remove From Favorite";
        button.classList.add('active');
    }
    else{
        favorites.splice(index,1);
        button.textContent="Add To Favorite";
        button.classList.remove('active');
    }

    localStorage.setItem('favorite',JSON.stringify(favorites));

    updateButtons();
    if(document.getElementById("favorites")){
        displayFavorites();
    }
}


function displayFavorites(){
    const container=document.getElementById("favorites");

    if(!container) return;
    container.innerHTML="";

    favorites.forEach(item=>{
        const div=document.createElement("div");
        div.classList.add('card');
        div.setAttribute('car-id',item.id);
        div.innerHTML=item.content;

        const btn=div.querySelector('.favorite');
        if(btn){
            btn.textContent="Remove From Favorite";
            btn.classList.add('active');
            btn.setAttribute('onclick','addToFavorite(event,this)');
        }
        container.appendChild(div);
    });
}


function updateButtons(){
    const cards=document.querySelectorAll('.card');
    cards.forEach(card =>{
        const cardId = card.getAttribute('car-id');
        const btn = card.querySelector('.favorite');
        const isFav = favorites.some(item=>item.id===cardId);
        if(btn && isFav){
            btn.textContent="Remove From Favorite";
            btn.classList.add('active');
        }
    })
}
