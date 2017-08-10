    describe("String calculator", function(){
        var $scope;
        beforeEach(function(){
            module('Calculator');
            inject(function($rootScope,$controller){
            $scope = $rootScope.$new();
                $controller('CalculatorController',
                {
                    $scope: $scope
                });
            });
        });

        describe("When String is empty", function(){
            it("Should return 0", function(){
                $scope.input = "";
                $scope.SumCalc();
                expect($scope.result).toBe(0);
            });
        });

        describe("Addinng  with one number (8)", function(){
            it("Should return 8", function(){
                $scope.input = "8";
                $scope.SumCalc();
                expect($scope.result).toBe(8);
            });
        })

        describe("Adding with two numbers (8+2)", function(){
            it("Should return 10", function(){
                $scope.input = '8,2';
                $scope.SumCalc();
                expect($scope.result).toBe(10);
            });
        });

        describe("Adding with two numbers using space (1 2)", function(){
            it("Should return 3", function(){
                $scope.input = "1 2";
                $scope.SumCalc();
                expect($scope.result).toBe(3);
            });
        });

        describe("Adding with serverals numbers and dilmiters comma and space (9 1,2)", function(){
            it("Should return 12", function(){
                $scope.input = "9 1, 2";
                $scope.SumCalc();
                expect($scope.result).toBe(12);
            });
        });

        describe("Substract with two numbers (30,10) delimeter comma", function(){
            it('Should return 10', function(){
                $scope.input = "30,10";
                $scope.SubCalc();
                expect($scope.result).toBe(20);
            });
        })


    });