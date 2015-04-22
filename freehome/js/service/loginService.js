/**
 * Created by xieyicheng on 2015/4/6.
 */
controllers.startController.factory('LoginService', function ($http) {
    var loginUrl = Url.loginUrl;
    var runLogin = function (account,password) {
        return $http({
            method:'get',
            url:loginUrl + '?account='+account+'&password='+password
        })
    };
    return{
        events: function (account,password) {
            return runLogin(account,password,'events');
        }
    }
});