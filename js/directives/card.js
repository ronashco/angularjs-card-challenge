/**
 * Created by mojtaba on 2/26/16.
 */
angular.module("CardChallenge").directive("card",function(){
    return {
        restrict: 'E',
        cardInfo:'=',
        link: function(scope, element, attrs) {
            scope.isEditing=false;//its gonna be true when we click on edit button
        },
        templateUrl: 'js/directives/template.html',
    }
});