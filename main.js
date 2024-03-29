(() => {    
    typewriter();
    screenHeight();

    window.addEventListener("click", clickFunctions);
    window.addEventListener("resize", screenHeight);
    
    function screenHeight(){
        const fontSize = 16;
        const height = window.innerHeight
            ||  document.documentElement.clientHeight
            ||  document.body.clientHeight;
        const menuHeight = height/fontSize/2 + "em"
        const menuLinkHeight = height/fontSize/20 + "em";
        const sectionHeight = height/fontSize + "em";

        document.getElementById("menu").style.height = menuHeight;
        document.getElementById("menu_link1").style.height = menuLinkHeight;
        document.getElementById("menu_link2").style.height = menuLinkHeight;
        document.getElementById("menu_link3").style.height = menuLinkHeight;
        document.getElementById("menu_link4").style.height = menuLinkHeight;
        document.getElementById("home").style.height = sectionHeight;
    }

    function typewriter(){
        let jobs = [
            "Software Programmer", 
            "Geography Nerd", 
            "Dog Lover", 
            "Website Developer", 
            "Audiobook Addict", 
            "World Traveler", 
            "Computer Engineer",
            "Puzzle Solver", 
            "Coffee Enthusiast"
        ];
        let currentLetter = 0;
        let currentJob = 0;
        let pause = 15; // intervals
        let blinks = 0;
        let blinker = document.createElement("span");
        blinker.style.padding = "0";
        blinker.id = "blinker";
        blinker.innerHTML = "|"
        blinker.style.fontSize = "1.5em";

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
                if(blinks > 12){
                    blinks = 0;
                }
            } else {
                blinker.style.opacity = 0;
            }
            
            let jobLength = jobs[currentJob].length;
            let partial = jobs[currentJob].slice(0, jobLength-(jobLength-currentLetter));
            document.getElementById("flair").innerHTML = partial;
            document.getElementById("flair").appendChild(blinker);
        }, 100)
    }

    function clickFunctions(){
        toggleOff();
        pauseScroll();
    }

    function clickMenuLink(id){
        try{
            document.getElementById(id).onclick = function() {
                document.getElementById('toggle').checked = false;
            }
        } catch(err){
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