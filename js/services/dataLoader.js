/**
 * Created by mojtaba on 2/26/16.
 */
angular.module("CardChallenge").factory('dataLoaderService', ['$http',function($http){
    return new function(){
        this.getJsonSource=function(callback){

            //your server has to allow CORS request to use bellow path
            //var jsonpath="http://static.pushe.co/challenge/json";

            var jsonpath="data.json";
            $http.get(jsonpath).then(function(jsondata){
                callback(jsondata.data.cards);//return downloaded json cards data
            });
        };
    };
}]);