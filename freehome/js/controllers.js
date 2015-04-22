/*directive*/
controllers.startController.directive('toggleNav', function () {
  return {
    restrict:'E',
    template:'<button>fuck</button>',
    replace:true
  }
});
/*service*/
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
/*controller*/
controllers.startController
.controller('AppCtrl', function($scope, $ionicModal, $timeout,LoginService) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log($scope.loginData.account,$scope.loginData.password)
    LoginService.events($scope.loginData.account,$scope.loginData.password).success(function (data) {
      console.log(data);
      $scope.closeLogin();
      $scope.loginData = data;
      console.log('Doing login', $scope.loginData);
    });
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('IndexCtrl', function($scope, $stateParams,LoginService) {
    $scope.toggleNav = function () {
        console.log($rootScope.loginData)
    }
});
