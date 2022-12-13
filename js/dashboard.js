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
                    row += `<td> <a onclick="view('${index}')" href="#">View</a>  |  <a  href="#" class="edit">Edit</a>  |  <a  href="#">Delete</a></td>`;
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

    /*Fuction used to save information into the Local Storage*/
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}