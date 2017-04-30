"use strict";

(function(){
	angular.module("AboutUs", [])
			.directive("aboutUs", function(){
			return {
				restrict: "E",
				templateUrl: "/templates/about-us.html",
				controller: function(){
					this.text = {
						body:
							[
								"The Chico State Water Ski Team has been part of Chico State since 1978. We are a recreational sport that competes in the western region and on the national level. The collegiate water ski tournaments include three categories: slalom, trick, and jump.",
								"In slalom, the skier skis around as many buoys in a row as possible. More points are gained as the speed increases and the rope length decreases. The trick event invites people to do as many tricks as they can in 40 seconds without falling. It can be done on a trick ski or wakeboard. The ramp for the jump event at the collegiate level is 5 feet tall. More points are earned the further you jump and land.",
								"All levels of skiers are welcome, from beginner to advanced. We have a great bond as a team with many life-long friendships. We look for new people to join us at the beginning of each semester. If you are interested, please do not hesitate to ask us questions or to check us out on campus! Please see more details below about our schedule, merchandise, and contact information."
							]	
					};
				},
				controllerAs: "aboutContent"
			};
		});
})();