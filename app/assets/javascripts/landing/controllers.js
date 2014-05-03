/**
 * User controllers.
 */
define(["angular"], function(angular) {
  "use strict";

  var LandingCtrl = function($scope, $location, userService) {
    $scope.credentials = {};

    $scope.login = function(credentials) {
      userService.loginUser(credentials).then(function(/*user*/) {
        $location.path("#/landing");
      });
    };
  };
    LandingCtrl.$inject = ["$scope", "$location", "landingService"];

  return {
    LandingCtrl: LandingCtrl
  };

});
