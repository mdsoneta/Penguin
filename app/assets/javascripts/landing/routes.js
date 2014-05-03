/**
 * Configure routes of user module.
 */
define(["angular", "./controllers", "common"], function(angular, controllers) {
  var mod = angular.module("landing.routes", ["landing.services", "yourprefix.common"]);
  mod.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/landing", {templateUrl:"/assets/templates/landing/landing.html", controller:controllers.LandingCtrl});
  }]);
  return mod;
});
