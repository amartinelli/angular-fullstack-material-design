'use strict';

angular.module('angularFullstackMaterialDesignApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/' + firstTabLink, {
                templateUrl: 'app/firstTab/view.html',
                controller: 'FirstTabCtrl'
            });
    });