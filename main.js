(() => {    
    loading();
    typewriter();

    window.addEventListener("click", clickFunctions);

    function loading(){
        setTimeout(function loading(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("side-info").style.display = "block"
        }, 1000)
    }

    function typewriter(){
        let jobs = ["World Traveler", "Geography Nerd", "Software Developer"]
        let currentLetter = 0;
        let currentJob = 0;
        let pause = 7; // intervals

        setInterval(function typewriter(){
            if(jobs[currentJob].length + pause == currentLetter){
                if(currentJob == jobs.length-1){
                    currentJob = 0;
                } else {
                    currentJob += 1;
                }
                currentLetter = 0;
            }
            currentLetter += 1;
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