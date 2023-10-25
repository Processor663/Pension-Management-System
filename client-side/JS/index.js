
// ========================VARIABLES=======================================
let loginButton = document.getElementById( "loginButton" );
let username = document.querySelector( ".username" );
let password = document.querySelector( ".password" );









// ========================EVENT LISTENERS FOR LOGIN VALIDATION=======================================

loginButton.addEventListener( "click", function(e) {

    if (username.value.match(/^\s*$/) || password.value.match(/^\s*$/))
    {
        loginButton.setAttribute( "data-toggle", "modal" );
        loginButton.setAttribute( "data-target", ".bd-example-modal-lg" );

        e.preventDefault();
        // return;
    }else {
        loginButton.removeAttribute( "data-toggle", "modal" );
        loginButton.removeAttribute( "data-target", ".bd-example-modal-lg" );
    }
} )

// ========================EVENT LISTENERS FOR LOGIN VALIDATION=======================================



// ======================== POST REQUEST FOR REGISTERATION PAGE=======================================



 

