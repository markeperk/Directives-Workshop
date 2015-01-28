var app = angular.module("myDirectives", []);


app.directive('pending', function()  {
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		// controller: function ($scope, $q, mainService){
		// 	$scope.clickEvent = function(){
		// 		$scope.request();
		// 	}

		//  },
		template: "<button ng-show='!spinner'>Submit</button><img ng-show='spinner' src='http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif' style='width: 25px; height: 25px'>",
		link: function (scope, element, attrs) {
	
			element.bind('click', function() { 
				scope.spinner = true;
				scope.request()
				.then(function(){
					console.log("here");
					scope.spinner = false;
				})
			});
		}
	};
});
		
