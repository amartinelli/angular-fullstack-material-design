'use strict';

angular.module('angularFullstackMaterialDesignApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngMaterial'
])
    .config(function ( $locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {


        console.log("AAAAAAAAAAAA")
        $routeProvider
            .otherwise({
                redirectTo: firstTabLink
            });

        $locationProvider.html5Mode(true);


        // https://www.google.com/design/icons/
        $mdIconProvider
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon(firstTabIcon, "./assets/svg/car.svg", 24)
            .icon(secondTabIcon, "./assets/svg/bus.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('pink')
        ;
    });