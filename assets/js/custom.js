const filled = document.querySelector('.progressiveNav');
const documentHeight = document.documentElement.scrollHeight;
const viewportHeight = document.documentElement.clientHeight;
window.onload = () =>{
    filled.style.width = 0;
}
window.onscroll = () => {
    const percentage = ((scrollY / (documentHeight - viewportHeight)) * 100);
    filled.style.width = percentage + '%';
}
