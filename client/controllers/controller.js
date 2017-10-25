myApp.controller('empController', function($scope,$route,$routeParams,$http){
  //$scope.getEmployees = "AngularJS";
  $scope.getEmployees = function(){
    $http.get('/api/employees/').then(function(response){
      $scope.employees = response.data;
    });
  };

  $scope.showEmployee = function(){
    var id = $routeParams.id;
    $http.get('/api/employees/' + id).then(function(response){
      $scope.employee = response.data;
    });
  };

  $scope.addEmployee = function(){
    $http.post('/api/employees/', $scope.employee).then(function(response){
      window.location.href = '/'; //luego de dar el alta te redirige a la lista
    });
  };

  $scope.updateEmployee = function(){
    var id = $routeParams.id;
    $http.put('/api/employees/' + id, $scope.employee).then(function(response){
      window.location.href = '/';
    });
  };

  $scope.deleteEmployee = function(id){
    var id = id;
    $http.delete('/api/employees/' + id, $scope.employee).then(function(response){
      $route.reload();
    });
  };

});
