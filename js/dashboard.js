$(function(){
    /*Generates the welcome message*/
    const current = JSON.parse(localStorage.getItem('currentUser'));
    let message = document.getElementById("wlcmMessage");
    message.innerHTML = "Welcome " + current[0]['usName'];
    /*Generates the data that appears on the Settings page*/
    let fullName = document.getElementById("fullName");
    fullName.value = current[0]['fullName'];
    let speed = document.getElementById("speed");
    speed.value = current[0]['speed'] + 'km/h';
    let about = document.getElementById("about");
    about.value = current[0]['about'];

})