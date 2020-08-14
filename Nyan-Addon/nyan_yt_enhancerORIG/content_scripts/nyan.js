function rainbowProgressBar() {
    var line = document.getElementsByClassName("ytp-swatch-background-color")[0];
    line.style.backgroundColor = "green"; 
    line.style.height = "10px";
    line.style.backgroundImage = "linear-gradient(red, red, yellow, green, green, blue, violet, violet)";
}

function removeScrubber () {
    var scrub = document.getElementsByClassName("ytp-scrubber-button")[0];
    scrub.parentNode.removeChild(scrub);  
}

function nyanAppear() {
    var cat_container = document.getElementsByClassName("ytp-scrubber-container")[0];
    cat_container.style.height = "21px";
    cat_container.style.width = "34px";
    cat_container.style.position = "relative";
    cat_container.style.top = "-14.5px";
    cat_container.style.left= "-6.5px";
    cat_container.style.zIndex= "43";

    var cat_vis = document.createElement("div");
    cat_vis.id = "cat-visual";
    cat_vis.title = "0";
    cat_vis.style.height = "21px";
    cat_vis.style.width = "34px";
    cat_vis.style.backgroundRepeat = "no-repeat";
    cat_vis.style.backgroundSize = "34px 21px";
    
    var nyan0 = browser.extension.getURL("images/nyan.gif");
    cat_vis.style.backgroundImage = "url('" + nyan0 + "')";
    
    cat_container.appendChild(cat_vis);
}

function nyanify () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    rainbowProgressBar();
    removeScrubber();
    nyanAppear();
}

nyanify();


