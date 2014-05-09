/**
 * User controllers.
 */
define(["angular"], function (angular) {
    "use strict";

    var LandingCtrl = function ($scope, $location, landingService) {
        var response = landingService.landing()
        alert("controller repsonse >>" + response)
    };
    LandingCtrl.$inject = ["$scope", "$location", "landingService"];

    return {
        LandingCtrl: LandingCtrl
    };

});
