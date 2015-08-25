angular.module("abc",['ui.bootstrap'])
.controller("Ctrl",function($scope){
	$scope.emails=[];
	
	$scope.enter = function(email){
		
		$scope.emails.push(email);
	};

	$scope.score = [{group:"group1",info:[{name:"group1P1",score:80},
										  {name:"group1P2",score:77},
										  {name:"group1P3",score:89},
										  {name:"group1P4",score:82},
										  {name:"group1P5",score:78}]},
					{group:"group2",info:[{name:"group2P1",score:80},
										  {name:"group2P2",score:77},
										  {name:"group2P3",score:89},
										  {name:"group2P4",score:88},
										  {name:"group2P5",score:78}]},
					{group:"group3",info:[{name:"group3P1",score:70},
										  {name:"group3P2",score:77},
										  {name:"group3P3",score:89},
										  {name:"group3P4",score:82},
										  {name:"group3P5",score:78}]}
					]

	$scope.result = function(){
		$scope.sc = $scope.n.score;
	};
});