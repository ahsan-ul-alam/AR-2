const filled = document.querySelector('.progressiveNav');
const documentHeight = document.documentElement.scrollHeight;
const viewportHeight = document.documentElement.clientHeight;
window.onscroll = ()=>{
    const percentage = ((scrollY/(documentHeight-viewportHeight))*100);
    filled.style.width = percentage + '%';
}

const header = document.querySelector('header');
if(scrollY > 1){
    header.style.backgroundColor = 'red';
}