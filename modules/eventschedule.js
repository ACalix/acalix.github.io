"use strict";

(function(){
	angular.module("EventSchedule", [])
		.directive("eventSchedule", function(){
			return {
				restrict: "E",
				templateUrl: "/templates/event-schedule.html",
				controller: function(){
					this.selectedYear = 2017;
					this.eventList = {
						year:{
							2017: [
								{
									date: "April 8-9",
									name: "Davis Spring Opener",
									location: "Bell Aqua Lakes"
								},
								{
									date: "April 15-16",
									name: "Cal Poly SLO Tournament",
									location: "Jovias Pond"
								},
								{		
									date: "April 22-23",
									name: "Alumni Weekend",
									location: "Sky Lake"
								},
								{		
									date: "May 6-7",
									name: "UCSD Tournament",
									location: "Mission Bay"
								},
								{		
									date: "May 13-14",
									name: "Friends & Family Weekend",
									location: "Sky Lake"
								},
								{		
									date: "May 20-21",
									name: "All Stars",
									location: "Hosted By ASU"
							}],
							2016: [
								{
									date: "January 4-13",
									name: "Summer Camp",
									location: "Jovias Pond"
								},
								{
									date: "Feburary 13-15",
									name: "The Classic",
									location: "Mission City"
								}
							],
							2015: [
								{
									date: "Some Date in 2015",
									name: "Some other name",
									location: "Home?"
								}
							],
							2014: [],
							2013: []
						}
					}

					this.setActiveYear = function(selectYear){
						this.selectedYear = selectYear;
					};

					this.sendYears = function(){
						var years = Object.keys(this.eventList.year);
						return years.map(Number).reverse();
					};

					this.isActiveYear = function(testYear){
						return testYear === this.selectedYear;
					};
				},
				controllerAs: "eventContent"
			};
		})

		.directive("dropDown", function(){
			return {
				restrict: "A",
				templateUrl: "/templates/drop-down.html",
				controller: function(){
					this.yearSelected = 2017;
					this.open = false;

					this.toggleDropDown = function(){
						this.open = !this.open;
					};
				},
				controllerAs: "dropDownCtrl"
			};
		});
})();