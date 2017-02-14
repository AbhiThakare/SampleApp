/**
 * Alerts Controller
 */

angular
    .module('AbhiSampleProject')
    .controller('TableCtrl', ['$scope', TableCtrl]);

function TableCtrl($scope) {
     $scope.hitAlert = function() {
        alert('hi Abhinav');
    };
}