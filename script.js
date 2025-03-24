// Block new tabs and auto-close them
window.open = function() { alert("New tabs are blocked!"); return null; };
setInterval(() => {
    for (let win of window.openedWindows || []) {
        if (!win.closed) win.close();
    }
}, 500);

// Prevent popups
document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.target === "_blank") {
        event.preventDefault();
        alert("Popups are blocked!");
    }
});

// Load sites in fullscreen iframe and hide the main UI
function loadSite(url) {
    document.getElementById("header").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("iframe-container").style.display = "block";
    document.getElementById("siteFrame").src = url;
}

// Allow fullscreen mode
document.addEventListener("fullscreenchange", () => {
    console.log("Fullscreen mode changed.");
});

// Remove hidden links
function removeHiddenLinks() {
    document.querySelectorAll("a, div, span").forEach(el => {
        if (el.style.display === "none" || el.style.visibility === "hidden" || el.offsetHeight === 0) {
            el.remove();
        }
    });
}

setInterval(removeHiddenLinks, 2000);
