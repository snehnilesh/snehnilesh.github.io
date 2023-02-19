document.addEventListener("keydown", function (event) {
    // prevent save key combination
    if(event.keyCode == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)){
        event.preventDefault();
    }
    // prevent inspect key combination
    if(event.keyCode == 73 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)){
        event.preventDefault();
    }
    // prevent command shift u
    if(event.keyCode == 85 && (navigator.platform.match("Mac") ? event.metaKey : event.shiftKey)){
        event.preventDefault();
    }
    // prevent command option u
    if(event.keyCode == 85 && (navigator.platform.match("Mac") ? event.metaKey : event.altKey)){
        event.preventDefault();
    }
});

// prevent context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// prevent right click
document.addEventListener('mousedown', event => event.preventDefault());