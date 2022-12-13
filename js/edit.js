$(function(){
    /*Generates the welcome message*/
    let current = JSON.parse(localStorage.getItem('currentUser'));
    const rides = JSON.parse(localStorage.getItem('rides'));
    let message = document.getElementById("wlcmMessage");
    const index = JSON.parse(localStorage.getItem('currentRide')); 
    message.innerHTML = "Welcome " + current[0]['usName'];
    document.getElementById('rideName').value = rides[index]['rideName'];
    document.getElementById('startTrip').value = rides[index]['start'];
    document.getElementById('endTrip').value = rides[index]['end'];
    document.getElementById('description').value = rides[index]['description'];
    document.getElementById('rideDep').value = rides[index]['rideDep'];
    document.getElementById('rideAr').value = rides[index]['rideAr'];
    if (rides[index]['mon']  == '1'){
        document.getElementById('mondayCh').checked = true;
    }
    if (rides[index]['tue'] == '1'){
        document.getElementById('tuesdayCh').checked = true;
    }
    if (rides[index]['wed'] == '1'){
        document.getElementById('wednesdayCh').checked = true;
    }
    if (rides[index]['thu'] == '1'){
        document.getElementById('thursdayCh').checked = true;
    }
    if (rides[index]['fri'] == '1'){
        document.getElementById('fridayCh').checked = true;
    }
    if (rides[index]['sat'] == '1'){
        document.getElementById('satdayCh').checked = true;
    }
    if (rides[index]['sun'] == '1'){
        document.getElementById('sundayCh').checked = true;
    }
    
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
                    const user = current[0]['usName'];
                    if (mondayCh.checked == true){
                        mon = '1';
                    }
                    else if (mondayCh.checked == false){
                        mon = '0';
                    }
                    if (tuesdayCh.checked == true){
                        tue = '1';
                    }
                    else if (tuesdayCh.checked == false){
                        tue = '0';
                    }
                    if (wednesdayCh.checked == true){
                        wed = '1';
                    }
                    else if (wednesdayCh.checked == false){
                        wed = '0';
                    }
                    if (thursdayCh.checked == true){
                        thu = '1';
                    }
                    else if (thursdayCh.checked == false){
                        thu = '0';
                    }
                    if (fridayCh.checked == true){
                        fri = '1';
                    }
                    else if (fridayCh.checked == false){
                        fri = '0';
                    }
                    if (satdayCh.checked == true){
                        sat = '1';
                    }
                    else if (satdayCh.checked == false){
                        sat = '1';
                    }
                    if (sundayCh.checked == true){
                        sun = '1';
                    }
                    else if (sundayCh.checked == false){
                        sun = '0';
                    }
                    const data = {user, rideName, start, end, description, rideDep, rideAr, mon, tue, wed, thu, fri, sat, sun};
                    rides.splice(index, 1);
                    rides.push(data);
                    saveToLocalStorage('rides', rides);
                    alert("The ride's information has been updated.");
                    window.location.href = 'dashboard.html';
        }
        else{
            alert('Please fill and check every space.');
        }
    })
    /*Fuction used to save information into the Local Storage*/
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})