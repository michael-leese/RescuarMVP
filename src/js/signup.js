var LoginBtn = document.querySelector('#switch-sign-log-screen');
var signLogCard = document.querySelector('#signuplogin');
var signCard = signLogCard.querySelector('.signup-card');
var signTitle = signLogCard.querySelector('.signupHead');
var logCard = signLogCard.querySelector('.login-card');
var loginTitle = signLogCard.querySelector('.loginHead');
var LoginShown = false;

LoginBtn.addEventListener('click', function (event) {
    if (!LoginShown) {
        LoginShown = true;
        signCard.style.opacity = 0;
        signTitle.style.opacity = 0;
        logCard.style.display = 'block';
        loginTitle.style.display = 'block';
        signCard.style.display = 'none';
        signTitle.style.display = 'none';
        setTimeout(function () {
            logCard.style.opacity = 1;
            loginTitle.style.opacity = 1;
        }, 300);
    } else {
        LoginShown = false;
        logCard.style.opacity = 0;
        loginTitle.style.opacity = 0;
        signCard.style.display = 'block';
        signTitle.style.display = 'block';
        logCard.style.display = 'none';
        loginTitle.style.display = 'none';
        setTimeout(function () {
            signCard.style.opacity = 1;
            signTitle.style.opacity = 1;
        }, 300);
    }
});
