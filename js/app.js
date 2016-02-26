/**
 * Created by mojtaba on 2/26/16.
 */
angular
    .module("CardChallenge",[])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);