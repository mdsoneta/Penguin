/**
 * User controllers.
 */
define(["angular"], function (angular) {
    "use strict";
    var LandingCtrl = function ($scope, landingService) {
        landingService.landing().then(function (response) {
            $scope.landingResults = response;
        });
    };
    LandingCtrl.$inject = ["$scope", "landingService"];
    return {
        LandingCtrl: LandingCtrl
    };

});
