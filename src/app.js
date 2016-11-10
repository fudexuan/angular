/**
 * Created by fudexuan on 2016/11/6.
 */
charset='utf-8';
 var myMoudule = angular.module('myApp',['ngRoute']);

 myMoudule.controller('myController',['$scope',function($scope){

    }]);

 myMoudule.config(['$routeProvider',function($routeProvider){

     $routeProvider
         .when('/m12',{templateUrl:"areas/m12/m12.html"})
         .when('/m11',{templateUrl:"areas/m11/m11.html"})
         .when('/m22',{templateUrl:"./areas/m22/m22.html"})
         .otherwise({redirecTo:"/m11"});
 }])