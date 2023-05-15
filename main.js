(() => {
    window.addEventListener("click", clickFunctions);

    function clickFunctions(){
        toggleOff();
        pauseScroll();
    }

    function clickMenuLink(id){
        document.getElementById(id).onclick = function() {
            document.getElementById('toggle').checked = false;
        }
    }
    
    function toggleOff(){
        clickMenuLink('about-link');
        clickMenuLink('projects-link');
        clickMenuLink('contact-link');
    }

    function pauseScroll(){
        document.getElementById("toggle").checked 
            ? document.body.style.overflowY = "hidden" 
            : document.body.style.overflowY = "";
    }

})();