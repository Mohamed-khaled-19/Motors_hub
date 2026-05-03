function filterModels(category,element){
    const allButtons = document.querySelectorAll('.type');
    const cards=document.querySelectorAll('.card');
    
    if(element.classList.contains('active')){
        allButtons.forEach(bttn=>bttn.classList.remove('active'));
        cards.forEach(card=>{card.style.display="flex"})
        return;
    }

    allButtons.forEach(bttn=>bttn.classList.remove('active'));
    
    element.classList.add('active');

    
    cards.forEach(card=>{
        const cardType=card.getAttribute('car-model');
        if(cardType === category){
            card.style.display="flex";
        }
        else{
            card.style.display="none";
        }
    });
}




function filterCars(category,element){
    const allButtons = document.querySelectorAll('.type');
    const cards=document.querySelectorAll('.card');
    
    if(element.classList.contains('active')){
        allButtons.forEach(bttn=>bttn.classList.remove('active'));
        cards.forEach(card=>{card.style.display="flex"})
        return;
    }

    allButtons.forEach(bttn=>bttn.classList.remove('active'));
    
    element.classList.add('active');

    
    cards.forEach(card=>{
        const cardType=card.getAttribute('car-type');
        if(cardType === category){
            card.style.display="flex";
        }
        else{
            card.style.display="none";
        }
    });
}



function filterSeries(series,element){
    const allButtons = document.querySelectorAll('.type');
    const cards=document.querySelectorAll('.card');

    if(element.classList.contains('active')){
        allButtons.forEach(bttn=>bttn.classList.remove('active'));
        cards.forEach(card=>{card.style.display="flex"})
        return;
    }

    allButtons.forEach(bttn=>bttn.classList.remove('active'));
    
    element.classList.add('active');
    
    cards.forEach(card=>{
        const cardType=card.getAttribute('car-series');
        if(cardType === series){
            card.style.display="flex";
        }
        else{
            card.style.display="none";
        }
    });
}




function priceFilter(){
    const maxPrice=document.getElementById('priceSearch').value;
    const cards=document.querySelectorAll('.card');
    cards.forEach(card=>{
    const carPrice=parseInt(card.getAttribute('car-price'));
    if(!maxPrice || carPrice<=maxPrice){
        card.style.display="flex";
    }
    else{
        card.style.display="none";
    }
    });
}
