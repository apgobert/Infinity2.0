(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Lyon';
  }])
  .controller('ListController', ['$scope', function($scope) {
    $scope.names = ['Test1', 'Test2', 'Test3'];
  }]);
})(window.angular);