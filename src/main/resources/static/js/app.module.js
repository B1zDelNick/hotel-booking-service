
(function()
{
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider)
        {
            $routeProvider.when('/login',
                {
                    templateUrl:'templates/login.html',
                    controller: function () {

                    }
                    //'LoginController'
                });

            $routeProvider.when('/',
                {
                    templateUrl:'templates/default.html',
                    controller: function () {

                    }
                });

            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            //$locationProvider.html5Mode({enabled: true});
        });

    /*AppConfig.$inject = ['$routeProvider', '$locationProvider'];

    function AppConfig($routeProvider, $locationProvider)
    {
        $routeProvider.when('/login',
            {
                templateUrl:'templates/login.html',
                controller: 'LoginController'
            });

        $routeProvider.when('/',
            {
                templateUrl:'templates/default.html',
                controller: function () {

                }
            });

        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }*/
})();

/*(function(){
    'use strict';

    angular.module('app', [])
        .config(function ()
        {
            configure();

            function configure()
            {
                console.log("Configured");
            }
        })
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookingsController', BookingsController);

    BookingsController.$inject = [];

    function BookingsController()
    {
        var vm = this;

        vm.someModel = "SomeModel";

        init();

        function init()
        {
            vm.someModel = "SomeNewModel";
            console.log("Inited");
        }
    }
})();*/

/*'use strict';

var sampleApp = angular.module('app', ['ngRoute']);

sampleApp .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/addOrder', {
            templateUrl: 'templates/add-order.html',
            controller: 'AddOrderController'
        }).
        when('/showOrders', {
            templateUrl: 'templates/show-orders.html',
            controller: 'ShowOrdersController'
        }).
        otherwise({
            redirectTo: '/addOrder'
        });
    }]);*/
