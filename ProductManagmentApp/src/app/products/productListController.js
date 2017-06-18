/**
 * Created by Administrator on 1/17/2017.
 */
(function () {
    "use strict";
    var app = angular.module('productManagmentApp');

    app.controller('ProductListController', ['productResource',ProductListController]);
    function ProductListController(productResource) {
        var vm = this;
        vm.products = {};
        vm.showImage = true;

        productResource.query(function(data){
            vm.products = data;

        });

        vm.init = function () {

        };

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

        vm.init();
    }
}());