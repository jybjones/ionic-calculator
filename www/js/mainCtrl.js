angular.module('starter')

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.message = 'hello';
  $scope.display = 0;
  $scope.result = 0;
  $scope.operation = null;
  $scope.clearAll = 0;
    $scope.x = "0";
    $scope.y = "0";

  $scope.number = function (num) {
    if($scope.operation ===null){
      $scope.display+=num.toString();
      $scope.x += num;
    }else{
      $scope.display+=num.toString();
      $scope.y += num;
    }
  };
  $scope.clearAll = function (num1, num2) {
    $scope.operation =null;
    $scope.x = "0";
    $scope.y = "0";
    $scope.result = "0";
    $scope.display = "";
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
  $scope.multiply = function (num1, num2) {
    $scope.operation ='*';
    $scope.result = num1 * num2
    $scope.display = '';
    };
  $scope.divide = function (num1, num2) {
    $scope.operation ='&#47';
    $scope.result = num1 / num2
    $scope.display = '';
    };
   $scope.sin = function (num) {
    $scope.operation = '&#x207b;&sup1';
    $scope.result = Math.sin(num)
    $scope.display = '';
    };
  // $scope.squared = function (num1) {
  //   $scope.operation = &radic;
  //   $scope.result = num1 * num1
  //   $scope.display = '';
  //   };

////////////////actions here///////////
$scope.onClickCalculate = function() {
  $scope.x = parseInt($scope.x);
   $scope.y = parseInt($scope.y);

   if ($scope.operation === 'clearAll'){
    $scope.clearAll($scope.x, $scope.y);
    $scope.display = $scope.result;
   }

  if ($scope.operation === '+') {
    $scope.add($scope.x,$scope.y);
    $scope.display = $scope.result;
    }
    else if ($scope.operation === '-'){
      $scope.subtract($scope.x,$scope.y);
      $scope.display = $scope.result;
      }
    else if ($scope.operation === '*') {
        $scope.multiply($scope.x,$scope.y);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === '&#47') {
        $scope.divide($scope.x,$scope.y);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === '&#x207b;&sup1') {
        $scope.sin($scope.x);
        $scope.display = $scope.result;
      }
    // else if ($scope.operation === '&radic') {
    //     $scope.squared($scope.x);
    //     $scope.display = $scope.result;
    //   }
}


}]);
