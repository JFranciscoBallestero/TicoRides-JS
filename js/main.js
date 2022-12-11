$(function(){
    
    /*Fuction used to register a user*/ 
    $('#register').click(function register(){    
        const frtName = document.getElementById('firstName').value;
        const lstName = document.getElementById('lastName').value;
        const number = document.getElementById('phone').value;
        const usName = document.getElementById('username').value;
        const pass = document.getElementById('userPass1').value;
        const passVerf = document.getElementById('userPass2').value;
        const speed = '';
        const about = '';
        const data = {frtName, lstName, number, usName, pass, speed, about};
        if (frtName == '' || lstName == '' || number == '' || usName == '' || pass == '' ||
            passVerf == ''){
            alert('Please fill every space.');
        }
        else{
            if (pass != passVerf){
                alert('The password needs to be the same');
            }
            else if (pass == passVerf){
                if (localStorage.getItem('users') === null){
                    const newUser = [data];
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
                        const newUser = [data];
                        userArray.push(data);
                        saveToLocalStorage('users', userArray);
                        saveToLocalStorage('currentUser', newUser);
                        window.location.href = 'dashboard.html';
                    }
                }
            }
        }
    })
    /*Fuction used to login into the website*/
    $('#login').click(function login(){
        const user = document.getElementById('username').value;
        const password = document.getElementById('userPass').value;    
        if (user == '' || password == ''){
            alert('Please fill every space.');
        }
        else{
            if (localStorage.getItem('users') === null){
                alert('There are no users registered yet. Please register first.');
            }
            else{
                const userArray = JSON.parse(localStorage.getItem('users'));
                if(userArray.some((x)=>{return x.usName==user && x.pass==password}))
                {
                    const index = userArray.findIndex(({usName}) => usName == user);
                    const current = [userArray[index]];
                    saveToLocalStorage('currentUser', current);
                    window.location.href = 'dashboard.html';
                }
            }
        }
    })
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})