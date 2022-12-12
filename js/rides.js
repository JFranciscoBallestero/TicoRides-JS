$(function(){
    /*Generates the welcome message*/
    let current = JSON.parse(localStorage.getItem('currentUser'));
    let message = document.getElementById("wlcmMessage");
    message.innerHTML = "Welcome " + current[0]['usName'];
    $('#saveR').click(function(){
        const rideName = document.getElementById('rideName').value;
        const start = document.getElementById('startTrip').value;
        const end = document.getElementById('endTrip').value;
        const description = document.getElementById('description').value;
        const rideDep = document.getElementById('rideDep').value;
        const rideAr = document.getElementById('rideAr').value;
        const mondayCh = document.getElementById('mondayCh');
        let mon = '0';
        const tuesdayCh = document.getElementById('tuesdayCh');
        let tue = '0';
        const wednesdayCh = document.getElementById('wednesdayCh');
        let wed = '0';
        const thursdayCh = document.getElementById('thursdayCh');
        let thu = '0';
        const fridayCh = document.getElementById('fridayCh');
        let fri = '0';
        const satdayCh = document.getElementById('satdayCh');
        let sat = '0';
        const sundayCh = document.getElementById('sundayCh');
        let sun = '0';
        if (rideName == '' || start == '' || end == '' || description == '' || rideDep == '' || rideAr == ''){ 
            if (mondayCh.checked == false && tuesdayCh.checked == false && wednesdayCh.checked == false && thursdayCh.checked == false
                && fridayCh.checked == false && satdayCh.checked == false && sundayCh.checked == false){
                alert('Please fill and check every space.');
            }
            else{
                alert('Please fill every text field.');
            }
            
        }
        else if (mondayCh.checked == true || tuesdayCh.checked == true || wednesdayCh.checked == true || thursdayCh.checked == true
        || fridayCh.checked == true || satdayCh.checked == true || sundayCh.checked == true){
                if (localStorage.getItem('rides') == null){
                    const user = current[0]['usName'];
                    if (mondayCh.checked == true){
                        mon = '1';
                    }
                    if (tuesdayCh.checked == true){
                        tue = '1';
                    }
                    if (wednesdayCh.checked == true){
                        wed = '1';
                    }
                    if (thursdayCh.checked == true){
                        thu = '1';
                    }
                    if (fridayCh.checked == true){
                        fri = '1';
                    }
                    if (satdayCh.checked == true){
                        sat = '1';
                    }
                    if (sundayCh.checked == true){
                        sun = '1';
                    }
                    const data = {user, rideName, start, end, description, rideDep, rideAr, mon, tue, wed, thu, fri, sat, sun};
                    const newRide = [data];
                    saveToLocalStorage('rides', newRide);
                    alert('Ride created.');
                    window.location.href = 'dashboard.html';
                }
                else{
                    const user = current[0]['usName'];
                    if (mondayCh.checked == true){
                        mon = '1';
                    }
                    if (tuesdayCh.checked == true){
                        tue = '1';
                    }
                    if (wednesdayCh.checked == true){
                        wed = '1';
                    }
                    if (thursdayCh.checked == true){
                        thu = '1';
                    }
                    if (fridayCh.checked == true){
                        fri = '1';
                    }
                    if (satdayCh.checked == true){
                        sat = '1';
                    }
                    if (sundayCh.checked == true){
                        sun = '1';
                    }
                    const data = {user, rideName, start, end, description, rideDep, rideAr, mon, tue, wed, thu, fri, sat, sun};
                    const ridesArray = JSON.parse(localStorage.getItem('rides'));
                    if(ridesArray.some((x)=>{return x.rideName == rideName}))
                    {
                        alert("There is a ride with that name already.");
                    }
                    else{
                        const newRide = [data];
                        ridesArray.push(data);
                        saveToLocalStorage('rides', ridesArray);
                        alert('Ride created.');
                        window.location.href = 'dashboard.html';
                    }
                }
        }
    })
    /*Fuction used to save information into the Local Storage*/
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})