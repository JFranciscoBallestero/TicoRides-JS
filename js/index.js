$(function(){
    localStorage.setItem('currentRide', JSON.stringify([]));
    $('#search').click(function(){
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        if (from == "" && to== ""){
            alert('Please fill one or both spaces to search for a ride.');
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
        else if (from != ""){
            const rides = JSON.parse(localStorage.getItem('rides'));
            const table = document.getElementById('ridesTable');
            if (rides) {
                let rows = "";
                rides.forEach((ride, index) => {
                    if (ride.start == from){
                        let row = `<tr>`;
                        row += `<td>${ride.user}</td>`;
                        row += `<td>${ride.start}</td>`;
                        row += `<td>${ride.end}</td>`;
                        row += `<td> <a href="#" onclick="view('${index}')">View</a></td>`;
                        rows += row + "</tr>";
                    }
                });
                table.innerHTML = rows;
            }
        }
        else if (to != ""){
            const rides = JSON.parse(localStorage.getItem('rides'));
            const table = document.getElementById('ridesTable');
            if (rides) {
                let rows = "";
                rides.forEach((ride, index) => {
                    if (ride.end == to){
                        let row = `<tr>`;
                        row += `<td>${ride.user}</td>`;
                        row += `<td>${ride.start}</td>`;
                        row += `<td>${ride.end}</td>`;
                        row += `<td> <a href="#" onclick="view('${index}')">View</a></td>`;
                        rows += row + "</tr>";
                    }
                });
                table.innerHTML = rows;
            }
        }
    })
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