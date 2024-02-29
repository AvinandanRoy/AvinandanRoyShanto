
const bar = document.getElementById("bar");
const navElement = document.getElementById("navElement");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener("click",()=>{
        navElement.classList.add('active');
    });
};
if(close){
    close.addEventListener("click",()=>{
        navElement.classList.remove('active');
    });
};