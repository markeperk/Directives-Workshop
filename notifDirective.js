var app = angular.module("notifDirective", []);


app.directive('notifyBox', function() {
	return {	
		scope: {
			title: '=',
			body: '=',
			icon: '='
			//sets up a two-way binding expression between the directive's isolate scope and the parent scope. Changes in the child scope and propagated to the parent and vice-versa. Think of = as a combination of @ and &.
		},
		link: function(scope, element, attrs) {

			//given 

			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    			Notification.requestPermission(function (permission) {
                //console.log(permission);
            });
    		
    	//on click, use the notification constructor - which uses a title and options
    	// in this example we are passing through the title.. and the body and icon as options.

			element.click(function() {
			
			var notification = new Notification(
				scope.title, {body: scope.body, icon: scope.icon})

			//onshow is a handler for the show event and is triggered when the notification is displayed. The timeout is set to close after 5 seconds

				notification.onshow = function() {
				setTimeout(notification.close.bind(notification), 5000);
			}
			})
		}
	};
});

