angular.module('starter')

.controller('MainCtrl', ['$scope', function($scope) {
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
  $scope.squared= function (num) {
    $scope.operation = 'X&sup2';
    $scope.result = num*num;
    $scope.display = '';
    };
  $scope.sin = function(num){
      $scope.operation = 'sin';
      $scope.result = Math.sin(num);
      $scope.display = '';
     };
  $scope.cos = function(num){
      $scope.operation = 'cos';
      $scope.result = Math.cos(num);
      $scope.display = '';
     };
  $scope.tan = function(num){
      $scope.operation = 'tan';
      $scope.result = Math.tan(num);
      $scope.display = '';
     };
  $scope.root = function(num){
      $scope.operation = 'root';
      $scope.result = Math.sqrt(num);
      $scope.display = '';
     };
  $scope.asin = function(num){
      $scope.operation = 'asin';
      $scope.result = Math.asin(num);
      $scope.display = '';
     };
  $scope.atan = function(num){
      $scope.operation = 'asin';
      $scope.result = Math.atan(num);
      $scope.display = '';
     };
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
    else if ($scope.operation === 'sin') {
        $scope.sin($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'X&sup2') {
        $scope.squared($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'cos') {
        $scope.cos($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'tan') {
        $scope.tan($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'root') {
        $scope.root($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'asin') {
        $scope.asin($scope.x);
        $scope.display = $scope.result;
      }
    else if ($scope.operation === 'atan') {
        $scope.asin($scope.x);
        $scope.display = $scope.result;
      }
}


}]);
