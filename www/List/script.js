(function(angular) {
  'use strict';
angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', 
		function($scope) {
			$scope.objects = [
				{name:'car', img: 'http://placehold.it/20'},
				{name:'plane'},
				{name:'chair'},
				{name:'table'},
				{name:'glass'},
				{name:'pot'},
				{name:'bottle'},
				{name:'computer'},
				{name:'plate'},
				{name:'window'}
			];
		});
})(window.angular);