$(function(){
    /*Generates the welcome message*/
    let current = JSON.parse(localStorage.getItem('currentUser'));
    let message = document.getElementById("wlcmMessage");
    message.innerHTML = "Welcome " + current[0]['usName'];
    
    /*Generates the table with rides that were created by the user*/
    function createTable(){
        const rides = JSON.parse(localStorage.getItem('rides'));
        const table = document.getElementById('ridesTable');
        if (rides) {
            let rows = "";
            rides.forEach((ride, index) => {
                if (ride.user == current[0]['usName']){
                    let row = `<tr>`;
                    row += `<td>${ride.rideName}</td>`;
                    row += `<td>${ride.start}</td>`;
                    row += `<td>${ride.end}</td>`;
                    row += `<td> <a href="#" onclick="view('${index}')">View</a>  |  <a href="#" onclick="edit('${index}')">Edit</a>  |  <a href="#" onclick="deleteRide('${index}')">Delete</a></td>`;
                    rows += row + "</tr>";
                }
            });
            table.innerHTML = rows;
      }
    }

    createTable();
})
function view(ride){
    saveToLocalStorage('currentRide', ride);
    window.location.href = 'view.html';
}

function edit(ride){
    saveToLocalStorage('currentRide', ride);
    window.location.href = 'edit.html';
}

function deleteRide(ride){
    saveToLocalStorage('currentRide', ride);
    window.location.href = 'delete.html';
}

    /*Fuction used to save information into the Local Storage*/
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}