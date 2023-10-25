// ========================VARIABLES=======================================

let firstname = document.querySelector( ".firstnameRegister" );
let secondname = document.querySelector( ".secondnameRegister" );
let usernameRegister = document.querySelector( ".usernameRegister" );
let passwordRegister = document.querySelector( ".passwordRegister" );
let city = document.querySelector( ".cityRegister" );
let state = document.querySelector( ".stateRegister" );
let registerButton = document.getElementById( "registerButton" );


// console.log(registerButton)



// ======================== POST REQUEST FOR REGISTERATION PAGE=======================================

registerButton.addEventListener('click', function(e) {
    e.preventDefault();

    const Register = {
        firstname: firstname.value,
        secondname: secondname.value,
        username: usernameRegister.value,
        password: passwordRegister.value,
        city: city.value,
        state: state.value
    }

    fetch( 'http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( Register )
    } ).then(response => {
        if (response !==200 ) {
            alert( "Sorry! something went wrong" )
            e.preventDefault();
            console.log(response)
            return
         }
    });
            

})

// ======================== POST REQUEST FOR REGISTERATION PAGE=======================================
