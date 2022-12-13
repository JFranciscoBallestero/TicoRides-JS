$(function(){
    localStorage.setItem('currentRide', JSON.stringify([]));

        /*Generates the table with rides that were created by the user*/
        function createTable(){
            const rides = JSON.parse(localStorage.getItem('rides'));
            const table = document.getElementById('ridesTable');
            if (rides) {
                let rows = "";
                rides.forEach((ride, index) => {
                    let row = `<tr>`;
                    row += `<td>${ride.user}</td>`;
                    row += `<td>${ride.start}</td>`;
                    row += `<td>${ride.end}</td>`;
                    row += `<td> <a href="#" onclick="view('${index}')">View</a></td>`;
                    rows += row + "</tr>";
                });
                table.innerHTML = rows;
          }
        }
        createTable();
})

function view(ride){
    saveToLocalStorage('currentRide', ride);
    window.location.href = 'viewNotUser.html';
}
/*Fuction used to save information into the Local Storage*/
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}