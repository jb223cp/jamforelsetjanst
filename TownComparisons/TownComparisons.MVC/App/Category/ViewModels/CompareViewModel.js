﻿categoryModule.controller("compareViewModel", function ($scope, categoryService, $http, $q, $routeParams, $window, $location, viewModelHelper, $rootScope, $httpParamSerializer, collectorFactory) {

    //debugger;

    $scope.OperatorUnitList = collectorFactory.listOfSubjects;
    
    //console.log($scope.OperatorUnitList[0].OrganisationalUnitId); //loop through for all iDs, IDs. Has to work both with URL and button
    //$scope.operatorID
    $scope.operatorID = $scope.OperatorUnitList[0].OrganisationalUnitId;
    $scope.viewModelHelper = viewModelHelper;
    $scope.categoryService = categoryService;

    //In Initialize() call (new) API controller who goes to the service layer and gets data from database and Kolada

    //only for test purpose
    $scope.operators = [
            {
                ID: 1,
                Name: "Tallbackaskolan",
                KPI: "Get KPI from Kolada"
            },
            {
                ID: 2,
                Name: "Hemskolan",
                KPI: "KPI"
            }
    ];

    var initialize = function () {
        $scope.getOrganisationalUnitInfoByOperatorID($scope.operatorID);
    }

    //Get Organisational Unit Info via OperatorController
    $scope.getOrganisationalUnitInfoByOperatorID = function (operatorID) {

        viewModelHelper.apiGet('api/operators/' + operatorID, null, //gets data from database. loop through for more than one operator
            function (result) {
                //console.log(result.data); //result data from server
                //$scope.organisationalUnit = result.data;
            });
    }

    initialize();
});