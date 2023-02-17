document.addEventListener("keydown", function (event) {
    // prevent save key combination
    if(event.keyCode == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)){
        event.preventDefault();
    }
    // prevent inspect key combination
    if(event.keyCode == 73 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)){
        event.preventDefault();
    }
    // prevent right click
    if(event.button == 2) {
        event.preventDefault();
    }
});