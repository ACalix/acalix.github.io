"use strict";

(function(){
	var app = angular.module("ContactUs", []);

	app.directive("contactUs", function(){
		return {
			restrict: "E",
			templateUrl: "/templates/contact-us.html",
			controller: function(){
				this.email = "";
				this.subject= "";
				this.message = "";

				this.cancel = function(){
					this.email = "";
					this.subject = "";
					this.message = "";
				};
			},
			controllerAs: "contactUsContent"
		};
	});
})();