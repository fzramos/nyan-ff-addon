// Include CSS file
/*
function addCSS(filename){
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
}
addCSS('content_scripts/mystyles.css');
*/


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
