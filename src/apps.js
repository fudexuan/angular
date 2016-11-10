/**
 * Created by fudexuan on 2016/11/6.
 */

 var myMoudule = angular.module('myApp',['ui.router']);

 //myMoudule.controller('myController',['$scope',function($scope){
 //
 //   }]);

myMoudule.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
        .state('m11',{
            url:"/m11",
            templateUrl:"./areas/m11/m11.html"
        })
         .state('m12',{
             url:"/m12",
             templateUrl:"./areas/m12/m12.html"
         })

         .state('m13',{
             url:"/m13",
             template:"1313"
         })
         .state('m21',{
             url:"/m21",
             template:"12122"
         })
        .state('m22',{
             url:"/m22",
             template:"333"
         })
         $urlRouterProvider.otherwise("/m11");
 })