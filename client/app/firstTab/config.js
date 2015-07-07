'use strict';

angular.module('angularFullstackMaterialDesignApp')
    .config(function ($routeProvider) {


        console.log("BBBBBBBBBBb")


        $routeProvider
            .when('/' + firstTabLink, {
                templateUrl: 'app/firstTab/view.html',
                controller: 'FirstTabCtrl'
            });
    });