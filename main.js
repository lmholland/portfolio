(() => {    
    typewriter();

    window.addEventListener("click", clickFunctions);

    function typewriter(){
        let jobs = ["World Traveler", "Geography Nerd", "Software Developer"]
        let currentLetter = 0;
        let currentJob = 0;
        let pause = 15; // intervals
        let blinks = 0;
        let blinker = document.createElement("span");

        blinker.setAttribute("opacity", "1");
        blinker.innerHTML = "|"

        setInterval(function typewriter(){
            if(jobs[currentJob].length + pause == currentLetter){
                if(currentJob == jobs.length-1){
                    currentJob = 0;
                } else {
                    currentJob++;
                }
                currentLetter = 0;
            }

            currentLetter++;
            blinks++

            if(blinks > 6){
                blinker.style.opacity = 1;
                if(blinks > 9){
                    blinks = 0;
                }
            } else {
                blinker.style.opacity = 0;
            }

            let jobLength = jobs[currentJob].length;
            let partial = jobs[currentJob].slice(0, jobLength-(jobLength-currentLetter));
            document.getElementById("title").innerHTML = partial;
            document.getElementById("title").appendChild(blinker);
        }, 100)
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