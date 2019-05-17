angular
    .module('app', [])
    // .config(function($mdThemingProvider){

    //     $mdThemingProvider.theme('default')
    //         .primaryPalette('teal')
    //         .accentPalette('orange');
    // })

    .directive("helloWorld", function(){
        return {
            template: "<h1>Student Portal</h1>"
        }
})