var app = angular.module("directiveWorkshop", ["myDirectives", "notifDirective"]);

app.controller("mainCtrl", function($scope, mainService){
$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           return $scope.data = data;
        });
    };

});