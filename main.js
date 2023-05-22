(() => {
    window.addEventListener("click", clickFunctions);
    typewriter();

    function typewriter(){
        let title = document.getElementById("title").innerHTML;
        let jobs = ["Software Developer", "World Traveler", "Geography Nerd"]
        let currentLetter = 0;
        let currentJob = 0;
        setInterval(function typewriter(){
            if(jobs[currentJob].length == currentLetter){
                if(currentJob == jobs.length-1){
                    currentJob = 0;
                } else {
                    currentJob += 1;
                }
                currentLetter = 0;
            }
            currentLetter+=1;
            let jobLength = jobs[currentJob].length;
            let partial = jobs[currentJob].slice(0, jobLength-(jobLength-currentLetter))
            document.getElementById("title").innerHTML = partial
        }, 150)
    }

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
        clickMenuLink('home-link');
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