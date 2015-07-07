'use strict';

angular.module('angularFullstackMaterialDesignApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/' + secondTabLink, {
                templateUrl: 'app/secondTab/view.html',
                controller: 'SecondTabCtrl'
            });
    });