  var app = angular.module('Calculator', []);

app.controller('CalculatorController',function($scope){   
    $scope.result = 0;

   // $scope.initFunction = function(){}
    
    $scope.SumCalc = function(){
        var numbers = $scope.input.split(/[\s,]+/);       
        if($scope.input === ""){
            $scope.result = 0;
            return
        }
        for(var i = 0; i < numbers.length; i++){
            var number = parseInt(numbers[i]);
            $scope.result += number;
        }
    }
    
    $scope.SubCalc = function(){
        var numbers = $scope.input.split(/[\s,]+/);  
          if($scope.input === ""){
            $scope.result = 0;
            return
        }
        for(var i = 0; i < numbers.length; i++){
            var number = parseInt(numbers[i]);
            $scope.result = i==0 ?number :$scope.result - number;
        }
    }
});