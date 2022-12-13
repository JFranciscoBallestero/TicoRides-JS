$(function(){
    /*Generates the welcome message*/
    const rides = JSON.parse(localStorage.getItem('rides'));
    const index = JSON.parse(localStorage.getItem('currentRide')); 
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
    document.getElementById('rideName').disabled = true;
    document.getElementById('startTrip').disabled = true;
    document.getElementById('endTrip').disabled = true;
    document.getElementById('description').disabled = true;
    document.getElementById('rideDep').disabled = true;
    document.getElementById('rideAr').disabled = true;
    document.getElementById('mondayCh').disabled = true;
    document.getElementById('tuesdayCh').disabled = true;
    document.getElementById('wednesdayCh').disabled = true;
    document.getElementById('thursdayCh').disabled = true;
    document.getElementById('fridayCh').disabled = true;
    document.getElementById('satdayCh').disabled = true;
    document.getElementById('sundayCh').disabled = true;
})