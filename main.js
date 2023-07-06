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
        // const menuLinkHeight = height/fontSize/10 + "em";
        const sectionHeight = height/fontSize + "em";

        // console.log(menuLinkHeight)

        document.getElementById("menu").style.height = menuHeight;
        // document.getElementsByClassName("menu_link").height = menuLinkHeight;
        document.getElementById("home").style.height = sectionHeight;
    }

    function typewriter(){
        let jobs = [
            "Geography Nerd", 
            "Liker of Dogs", 
            "Software Programmer", 
            "Audiobook Addict", 
            "World Traveler", 
            "Website Developer", 
            "Puzzle Solver", 
            "Coffee Enthusiast", 
            "Computer Engineer"
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