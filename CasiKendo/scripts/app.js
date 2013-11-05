(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
    }, false);

    app.application = new kendo.mobile.Application(document.body, {
        initial: '#login',
        transition: 'slide:left'
    });
})(window);