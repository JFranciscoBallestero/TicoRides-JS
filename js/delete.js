$(function(){
    /*Generates the welcome message*/
    const current = JSON.parse(localStorage.getItem('currentUser'));
    const rides = JSON.parse(localStorage.getItem('rides'));
    let message = document.getElementById('wlcmMessage');
    let warning = document.getElementById('warning');
    const index = JSON.parse(localStorage.getItem('currentRide')); 
    message.innerHTML = "Welcome " + current[0]['usName'];
    warning.innerHTML = "Do yo wish to delete " + rides[index]['rideName'] + " ?";

    $('#yesBtn').click(function(){
        rides.splice(index, 1);
        saveToLocalStorage('rides', rides);
        alert("The ride's database has been updated.");
        window.location.href = 'dashboard.html';
    })
    /*Fuction used to save information into the Local Storage*/
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})