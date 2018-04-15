var app = angular.module('todoList', ['ui.router']);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: '/script/view/todo.html',
                controller: 'todoCtrl'
            })
            .state('done', {
                url: '/done',
                templateUrl: '/script/view/done.html',
                controller: 'todoCtrl'
            })
            .state('map', {
                 url: '/map',
                 templateUrl: '/script/view/tasks.html',
                 controller: 'todoCtrl'
            });

    }
]);