(function(){
    "use strict"

    angular
        .module('app')
        .factory('studentFactory', function($http){
            
            function getStudents(){
                return $http.get('data/test.json');
            }

            return{
                getStudents:getStudents
            }
        })
})