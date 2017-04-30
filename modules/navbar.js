"use strict";

(function(){
	var app = angular.module("NavBar", []);
		app.directive("mainNav", function(){
			return {
				restrict: "E",
				templateUrl: "/templates/navigation.html",
				controller: function(){
					this.home = "Home";
					this.aboutUs = "About Us";
					this.eventSchedule = "Event Schedule";
					this.merchandise = "Merchandise";
					this.contactUs = "Contact Us";
					this.tab = 1;

					this.isSet = function(checkTab){
						return this.tab === checkTab;
					};

					this.setTab = function(newTab){
						this.tab = newTab;
					};
				},
				controllerAs: "item"
			};
	});
})();