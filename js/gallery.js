let currentIndex=0;
const images=document.querySelectorAll('.product');
const current=document.getElementById('current');

function setMainImage(element){
    current.src = element.src;
    let products=document.querySelectorAll('.product');
    products.forEach(t=>t.classList.remove('active'));
    element.classList.add('active');
}

images.forEachk(img => img,classList,remove('active'));
element.classList.add('active');

currentIndex = Array.from(images).indexOf(element);
function changeSlide(direction){
    currentIndex += direction;

if(currentIndex >= images.length) currentIndex = 0;
if(currentIndex < 0) currentIndex = images.length -1;

setMainImage(images[currentIndex]);
}
