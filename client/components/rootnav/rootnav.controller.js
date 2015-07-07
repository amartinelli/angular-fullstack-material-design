'use strict';

var firstTabTitle = 'First tab';
var firstTabLink = 'firstTab';
var firstTabIcon = 'firstTabIcon';

var secondTabTitle = 'Second tab';
var secondTabLink = 'secondTab';
var secondTabIcon = 'secondTabIcon';

var toolbarTabs = [
    {
        'title': firstTabTitle,
        'link': firstTabLink,
        'icon': firstTabIcon
    },
    {
        'title': secondTabTitle,
        'link': secondTabLink,
        'icon': secondTabIcon
    }
];

var firstTabLinkSelected = 'firstTabLinkSelected';
var secondTabLinkSelected = 'secondTabLinkSelected';

var firstTabLinkUnSelected = 'firstTabLinkUnSelected';
var secondTabLinkUnSelected = 'secondTabLinkUnSelected';


angular.module('angularFullstackMaterialDesignApp').controller('RootnavCtrl', ['$scope', '$location', '$mdSidenav',
    '$mdBottomSheet', '$q',
    function ($scope, $location, $mdSidenav, $mdBottomSheet, $q) {
        $scope.currentTabTitle = '';

        $scope.menu = toolbarTabs;
        if ($scope.menu[0]) {
            $scope.currentTabTitle = $scope.menu[0].title;
        }

        $scope.selectTab = function (item) {
            $scope.toggleSideNav();
            $scope.currentTabTitle = item.title;
            console.log(item);
            $location.path('/' + item.link);
        };


        $scope.toggleSideNav = function () {
            var pending = $mdBottomSheet.hide() || $q.when(true);
            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        };

        console.log("XXXXXXX")
        $location.path('/' + $scope.menu[0].link);

    }]);