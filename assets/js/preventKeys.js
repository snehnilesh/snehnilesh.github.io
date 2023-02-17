document.addEventListener("keydown", function (event) {
    //  prevent U key
    if(event.keyCode == 85){
        event.preventDefault();
    }
    //  prevent I key
    if(event.keyCode == 73){
        event.preventDefault();
    }
    //  prevent s key
    if(event.keyCode == 83){
        event.preventDefault();
    }
    //  prevent F12 key
    if(event.keyCode == 123){
        event.preventDefault();
    }
    //  prevent F5 key
    if(event.keyCode == 116){
        event.preventDefault();
    }
});