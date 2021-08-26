window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode === 123){ // F12
        event.preventDefault();
        window.event.returnValue = false;
        volantis.message(
            '禁止调试', 
            '调试功能已被禁用!', 
            {
            icon: 'fa fa-ban red'
            });
    } 
    if(event.ctrlKey && (
        //window.event.keyCode === 65 // Ctrl+A全选
        window.event.keyCode === 67 // Ctrl+C复制
        //window.event.keyCode === 83    // Ctrl+S保存
    )){
        event.preventDefault();
        window.event.returnValue = false;
        volantis.message(
            '禁止复制', 
            '复制功能已被禁用!', 
        {
        icon: 'fa fa-ban red'
        });
    }
}
window.oncontextmenu = function() {
    event.preventDefault();
    return false;
}
window.ondragstart = function(event) {
    return false;
}
var checkDebug = function(){
    if(window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160){
        window.location.href="home/antiDebug"
    }
}
checkDebug();
setInterval(checkDebug, 300);