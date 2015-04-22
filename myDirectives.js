var app = angular.module("myDirectives", []);


app.directive('pending', function()  {
	return {
		restrict: 'AE',
		scope: {
			request: '&'  //allows the directive's isolate scope to pass values into the parent scope for evaluation in the expression defined in the attribute. 
		},
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

//Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality.		

// Jess's solution
/*
app.directive('pending', function($q)  {
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attrs) {
			var spinnerIcon = angular.element('span class = "fa fa-spin"></span');
			spinnerIcon.hide();
			elem.after(spinnerIcon);

			var invokeRequest = function() {
				var dfd = $q.defer();

				dfd.resolve(scope.request());

				return deferred.promise;
			}

			elem.on('click', function() {
				elem.hide();
				spinnerIcon.show();
				invokeRequest().then(function() {
					setTimeout(function() {
						elem.show();
						spinnerIcon.hide();
					}, 3000);
				})
			})
		}


*/


