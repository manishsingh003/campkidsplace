// after 3 seconds fade out loading screen
setTimeout(function () {
    document.querySelector(".loading").classList.add("hidden")
}, 3000)
var loadscreen = document.getElementById("homeload");
setTimeout(function () {
    loadscreen.parentElement.removeChild(loadscreen);
}, 4500)
