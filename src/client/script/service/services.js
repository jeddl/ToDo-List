app.factory('todos', ['$http', function($http) {

    var todoList = {
        todos: []
    };

    (function getTodos() {
        return $http.get('/api/todos', {
            headers: {'userid': 'john@123.com'}
        }).success(function(data) {
            angular.copy(data, todoList.todos);
        });
    })();

    return todoList;

}]);
