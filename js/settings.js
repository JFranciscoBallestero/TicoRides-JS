$(function(){
    /*Generates the welcome message*/
    let rides = JSON.parse(localStorage.getItem('rides'));
    let current = JSON.parse(localStorage.getItem('currentUser'));
    let message = document.getElementById("wlcmMessage");
    message.innerHTML = "Welcome " + current[0]['usName'];
    /*Generates the data that appears on the Settings page*/
    const fullName = document.getElementById("fullName");
    fullName.value = current[0]['fullName'];
    const speed = document.getElementById("speed");
    speed.value = current[0]['speed'];
    const about = document.getElementById("about");
    about.value = current[0]['about'];
    /*Saves the updated info assigned to the current user*/
    $('#saveUser').click(function saveUser(){
        current[0]['fullName'] = fullName.value;
        current[0]['speed'] = speed.value;
        current[0]['about'] = about.value;
        saveToLocalStorage('currentUser', current);
        const userArray = JSON.parse(localStorage.getItem('users'));
        const index = userArray.findIndex(({usName}) => usName ==  current[0]['usName']);
        userArray.splice(index, 1);
        userArray.push(current[0]);
        saveToLocalStorage('users', userArray);
        alert("The user's information has been updated.");
        window.location.href = 'dashboard.html';
    })
    /*Fuction used to save information into the Local Storage*/
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})