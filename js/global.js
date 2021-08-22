window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode === 123 || (event.ctrlKey && (window.event.keyCode === 65 || window.event.keyCode === 67 ||  window.event.keyCode === 83))) {
        event.preventDefault();
        window.event.returnValue = false;
    }
    }
    window.oncontextmenu = function() {
    event.preventDefault();
    return false;
}
window.ondragstart = function(event) {
    return false;
}