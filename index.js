nav=document.getElementsByClassName("nav-contents")[0];

function menu() {
    if(window.screen.width<700){
        if (nav.style.display === "block") {
            nav.style.display = "none";  
            
        } else {
            nav.style.display = "block";
        }
    }
}