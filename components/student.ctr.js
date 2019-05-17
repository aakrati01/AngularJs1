// (function(){
//     "use strict";

//     angular
//         .module("app")
//         .controller("studentCtrl", function($scope, $http, studentFactory){
//             studentFactory.getStudents().then(function(student){
//                 console.log(student.data);
//                 $scope.students = student.data
//             })
          
//             $scope.addNewStudent = function(student){
//                 $scope.students.push(student);
//                 console.log(students)
//             }
//         });
// })();

(function(){
    "use strict";

    angular
        .module("app")
        .controller("studentCtrl", function($scope, $http){
            $http.get('data/test.json').then(function(student){
                console.log(student.data);
                $scope.students = student.data
            })
            
            $scope.addNewStudent = function(student){
                $scope.students.push(student);
                console.log(students)
            }
        });
})();