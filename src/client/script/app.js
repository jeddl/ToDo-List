var app = angular.module('todoList', ['ui.router']);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
        .state('login', {
            url:'/login',
            templateUrl: '/script/view/login.html',
        })
        .state('index', {
            url: '/index',
            templateUrl: '/script/view/todo.html',
            controller: 'todoCtrl'
        })
        .state('done', {
            url: '/done',
            templateUrl: '/script/view/done.html',
            controller: 'todoCtrl'
        });

}]);
