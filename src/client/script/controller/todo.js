app.controller('todoCtrl', ['$scope', 'todos', function ($scope, todos) {

    $scope.todos = todos.todos;

    $scope.addTodo = function () {
        if (!$scope.title || $scope.title === '') {
            return;
        }
        $scope.todos.push({
            title: $scope.title,
            check: false,
            time: ''
        });
        $scope.title = '';
    };

    $scope.todos.forEach(function (todo) {
        if (todo.check === true) {
            todo.time = (new Date().toTimeString()) + (new Date()).toDateString();
        }
    });

    $scope.deleteTodo = function (todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };

}]);
