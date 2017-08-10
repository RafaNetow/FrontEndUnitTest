  var app = angular.module('Calculator', []);

app.controller('CalculatorController',function($scope){   
    $scope.result = 0;

  $scope.initFunction = function(){
     var numbers = $scope.input.split(/[\s,]+/);       
        if($scope.input === ""){
          return numbers[0] = 0;
        }
     return numbers
  }
    
    $scope.SumCalc = function(){
        numbers = $scope.initFunction()
        for(var i = 0; i < numbers.length; i++){
            var number = parseInt(numbers[i]);
            $scope.result += number;
        }
    }
    
    $scope.SubCalc = function(){
         numbers = $scope.initFunction()
        for(var i = 0; i < numbers.length; i++){
            var number = parseInt(numbers[i]);
            $scope.result = i==0 ?number :$scope.result - number;
        }
    }
    $scope.MulCalc = function(){

    }
});