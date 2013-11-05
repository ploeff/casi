(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            debugger;
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

            if (!validateLogin(username, password)) {
                navigator.notification.alert("Brugernavn eller password er forkert.", function () { }, "Login fejl", 'OK');
                return;
            }
            that.set("isLoggedIn", true);
            
            app.application.navigate('#home');
        },
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);

function validateLogin(uid, pid){
    if(uid === "" || pid === ""){
        return false;
    }
    else{
        return true;
    }
}