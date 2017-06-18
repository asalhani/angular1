
(function () {
    "use strict";

    var app = angular.module('productManagmentApp', ['ngResource','ui.router' ]);

    app.config(['$stateProvider',
        function($stateProvider){
            $stateProvider
                // Products list
                .state("productList", {
                    url: "products",
                    templateUrl: "/app/products/productListView.html",
                    controller: "ProductListController as vm"
                })
        }]
    );
}());