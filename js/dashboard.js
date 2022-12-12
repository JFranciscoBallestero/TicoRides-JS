$(function(){
    /*Generates the welcome message*/
    let rides = JSON.parse(localStorage.getItem('rides'));
    let current = JSON.parse(localStorage.getItem('currentUser'));
    let message = document.getElementById("wlcmMessage");
    message.innerHTML = "Welcome " + current[0]['usName'];
    /*Generates the table with rides that were created by the user*/
    function createTable(rideArray){
        const table = document.getElementById('ridesTable');
        rideArray.forEach(ride => {
            let row = table.insertRow();
            let rideName = row.insertCell(0);
            rideName.innerHTML = ride.rideName;
        });
  
  
    }
    /*Fuction used to save information into the Local Storage*/
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    createTable(rides);
})