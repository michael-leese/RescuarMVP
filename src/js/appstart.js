var ready = false;

seInterval(function () {
    ready = true;
}, 5000);


function pageChange() {
    if (ready) {
        window.location.replace('public/index.html');
    }
};