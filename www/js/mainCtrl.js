angular.module('starter')

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.message = 'hello';
  $scope.display = 0;
  $scope.result = 0;
  $scope.operation = null;

    $scope.x = "0";
    $scope.y = "0";
//////////2 numbers////////
  $scope.number = function (num) {
    if($scope.operation ===null){
      $scope.display+=num.toString();
      $scope.x += num;
    }else{
      $scope.display+=num.toString();
      $scope.y += num;
    }
  };

  $scope.add = function (num1, num2) {
    $scope.operation ='+';
    $scope.result = num1 + num2
    $scope.display = '';
    };
  $scope.subtract = function (num1, num2) {
    $scope.operation ='-';
    $scope.result = num1 - num2
    $scope.display = '';
    };

    $scope.tan=function() {

  };

////////////////calculations here///////////
$scope.onClickCalculate = function() {
  $scope.x = parseInt($scope.x);
   $scope.y = parseInt($scope.y);
  if ($scope.operation === '+') {
    $scope.add($scope.x,$scope.y);
    $scope.display = $scope.result;
    }else if ($scope.operation === '-'){
      $scope.subtract($scope.x,$scope.y);
      $scope.display = $scope.result;
  }
}


}]);
