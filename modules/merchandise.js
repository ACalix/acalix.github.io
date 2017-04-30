"use strict";

(function(){
	var app = angular.module("Merchandise", []);

	app.directive("merchandise", function(){
		return {
			restrict: "E",
			templateUrl: "/templates/merchandise.html",
			controller: function(){
				this.text = {
					body:
						[
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium, totam rem consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipsisci velit, dolore magnam aliquam quaerat voluptatem."
						]	
				};
			},
			controllerAs: "merchContent"
		};
	});
})();