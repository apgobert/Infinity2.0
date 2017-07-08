(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Lyon';
  }])
  .controller('ListController', ['$scope', function($scope) {
    $scope.names = ['Toto', 'Titi', 'Tata'];
  }]);
})(window.angular);