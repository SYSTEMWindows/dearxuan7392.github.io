window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode === 123 || // F12
         (event.ctrlKey && 
            (
                //window.event.keyCode === 65 || // Ctrl+A全选
                window.event.keyCode === 67 || // Ctrl+C复制
                window.event.keyCode === 83    // Ctrl+S保存
            ))) {
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