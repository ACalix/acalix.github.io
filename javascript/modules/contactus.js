"use strict";

(function(){
	angular.module("ContactUs", [])
		.directive("contactUs", function(){
			return {
				restrict: "E",
				templateUrl: "/javascript/templates/contact-us.html",
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