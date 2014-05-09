/**
 * User service, exposes user model to the rest of the app.
 */
define(["angular", "common"], function (angular) {
    "use strict";

    var mod = angular.module("landing.services", ["yourprefix.common"]);
    mod.factory("landingService", ["$http", "$q", "playRoutes", function ($http, $q, playRoutes) {
        var user, token;
        return {
              landing: function()
              {
                 return playRoutes.controllers.Landing.landing().post().then(function (response)
                  {
                      console.log("response from services >>" + response.data.query.results.quote.Name)
                       response.data.query.results.quote.Name
                  });
              }
        };
    }]);
    /**
     * Add this object to a route definition to only allow resolving the route if the user is
     * logged in. This also adds the contents of the objects as a dependency of the controller.
     */
    mod.constant("userResolve", {
        user: ["$q", "userService", function ($q, userService) {
            var deferred = $q.defer();
            var user = userService.getUser();
            if (user) {
                deferred.resolve(user);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        }]
    });
    /**
     * If the current route does not resolve, go back to the start page.
     */
    var handleRouteError = function ($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function (e, next, current) {
            $location.path("/");
        });
    };
    handleRouteError.$inject = ["$rootScope", "$location"];
    mod.run(handleRouteError);
    return mod;
});
