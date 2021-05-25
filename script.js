const toggle = document.getElementById("toggle"),
nav =document.getElementById("nav"),
close = document.getElementById("close"),
bars = document.getElementById('bars');

const showMenu = () =>{
    if(toggle){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show");

        });
    }
    if(close){
        close.addEventListener("click",()=>{
            nav.classList.toggle("show");
        })
    }
}
showMenu("toggle","nav")

