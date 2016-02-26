/**
 * Created by mojtaba on 2/26/16.
 */
angular.module("CardChallenge").controller("mainController",['dataLoaderService',mainController]);

function mainController(dataLoaderService){
    var thisController=this;

    dataLoaderService.getJsonSource(function(cardsInfo){//this service load cards data
        thisController.cardsInfo=cardsInfo;
        thisController.tryAnother();
    });
    /**
     * @return {number}
     */
    function SelectCardByChance(){
        return Math.floor(Math.random()*thisController.cardsInfo.length);//select activeCard's index by chance
    }
    thisController.tryAnother=function(){
        var cardIndex=SelectCardByChance();
        if(thisController.activeCardIndex)
            while(cardIndex==thisController.activeCardIndex)cardIndex=SelectCardByChance();//avoid repeating

        thisController.activeCardIndex =cardIndex;//we show a card that have index equal to activeCardIndex
    };
}