$(function(){
    /*Fuction used to register a user*/ 
    $('#register').click(function register(){    
        const frtName = document.getElementById('firstName').value;
        const lstName = document.getElementById('lastName').value;
        const number = document.getElementById('phone').value;
        const usName = document.getElementById('username').value;
        const pass1 = document.getElementById('userPass1').value;
        const pass2 = document.getElementById('userPass2').value;
        const speed = '';
        const about = '';
        let data = {frtName, lstName, number, usName, pass1, speed, about};
        if (frtName === '' || lstName === '' || number === '' || usName === '' || pass1 === '' ||
            pass2 === ''){
            alert('Please fill every space.');
        }
        else{
            if (pass1 != pass2){
                alert('The password needs to be the same');
            }
            else if (pass1 === pass2){
                if (localStorage.getItem('users') === null){
                    let newUser = [data];
                    saveToLocalStorage('users', newUser);
                    saveToLocalStorage('currentUser', newUser);
                    window.location.href = 'dashboard.html';

                }
                else{
                    const userArray = JSON.parse(localStorage.getItem('users'));
                    if(userArray.some((x)=>{return x.usName==usName}))
                    {
                        alert("The username is already in use.");
                    }
                    else{
                        let newUser = [data];
                        userArray.push(data);
                        saveToLocalStorage('users', userArray);
                        saveToLocalStorage('currentUser', newUser);
                        window.location.href = 'dashboard.html';
                    }
                    
                }
            }
        }
        
    })
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})