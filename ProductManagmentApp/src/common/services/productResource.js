/**
 * Created by Administrator on 1/17/2017.
 */
(function(){
    var app = angular.module('productManagmentApp');

    app.factory('productResource',["$resource", productResource]);

    function productResource($resource){
        return $resource("http://localhost/productsapi/api/products/:productId");
    };
}());