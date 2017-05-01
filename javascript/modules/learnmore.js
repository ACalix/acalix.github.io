"use strict";

(function(){
	angular.module("LearnMore", [])
		.directive("learnMore", function(){
			return {
				restrict: "E",
				templateUrl: "javascript/templates/learn-more.html",
				controller: function($http, $sce){
								var ctrlPrototype = this;
								var waterSkiInfo = $sce.trustAsResourceUrl("https://en.wikipedia.org/w/api.php?action=parse&pageid=38985&prop=text&format=json");

								$http({method: "JSONP", url: waterSkiInfo})
									.then(function successCallback(data){
										console.log(data);
										ctrlPrototype.moreInfo = data;
										ctrlPrototype.waterSkiArticle = $sce.trustAsHtml(ctrlPrototype.moreInfo.data.parse.text['*']);

										console.log(typeof(ctrlPrototype.moreInfo.data.parse.text["*"]));
									},
									function errorCallback(data){
										ctrlPrototype.moreInfo = "ERROR";
									});

				},
				controllerAs: "learnMoreCtrl"
			};
		});
})();