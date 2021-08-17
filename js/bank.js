// document.getElementById('login-submit').addEventListener('click', function() {
//     const emailField = document.getElementById('user-email');
//     const userEmail = emailField.value;
//     // get password-----
//     const passwordField = document.getElementById('user-password');
//     const userPassword = passwordField.value;
//     if (userEmail == 'labib@hasan.com' && userPassword == 'topsecret') {
//         window.location.href = 'banking.html';
//     }

// })



document.getElementById('login-submit').addEventListener('click',
    function() {
        document.getElementById('user-email');
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
        const passwordField = document.getElementById('user-password');
        const userPassword = passwordField.value;
        if (userEmail == 'labib@shawon.com' && userPassword == 'secret') {
            window.location.href = 'banking.html';
        } else {
            alert('your user id or password in correct')
        }

    }
)