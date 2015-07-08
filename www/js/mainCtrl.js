angular.module('starter')

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.message = 'hello';
  $scope.display = 0;
  $scope.result = 0;
  $scope.operation = null;

    $scope.x = 0;
    $scope.y = 0;

  $scope.number = function (num) {
    $scope.display=num;
    if($scope.operation ===null){
      $scope.x = num;
    }else{
      $scope.y=num;
    }
  };

  $scope.add = function (num1, num2) {

    $scope.operation ='+';
    $scope.result = num1 + num2
    };

$scope.onClickCalculate = function() {
  if ($scope.operation === '+') {
    $scope.add($scope.x,$scope.y);
    $scope.display = $scope.result;
  }
}

 $scope.tan=function() {

  }

}]);
