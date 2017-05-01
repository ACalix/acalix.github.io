"use strict";

(function(){
	angular.module("SkiTeam", ["NavBar", "AboutUs", "Merchandise", "ContactUs", "EventSchedule", "ngRoute", "LearnMore", "ngAnimate"])
		.config(function($routeProvider){
			$routeProvider.when("/", {
				templateUrl: "/views/home/index.html",
				controller: "HomeController"
			})
			.when("/learn_more", {
				templateUrl: "/views/learn_more/index.html"
			})
			.otherwise({ redirectTo: "/" });
		})
		.controller("HomeController", function($scope) {
			$scope.pageClass = "page-home";
		});
})();