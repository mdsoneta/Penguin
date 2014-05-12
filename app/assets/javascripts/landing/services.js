/**
 * Landing service, exposes user model to the rest of the app.
 */
define(["angular", "common"], function (angular) {
    "use strict";
    var mod = angular.module("landing.services", []);
    mod.factory("landingService", ["$http", "$q", "playRoutes", function ($http, $q, playRoutes) {
        return {
            landing: function () {
                return playRoutes.controllers.Landing.landing().post().then(function (response) {
                    return response.data.query.results.quote;
                });
            }
        }
    }]);
});
