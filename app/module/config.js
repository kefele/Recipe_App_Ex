"use strict";

    angular.module("Food")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/search-criteria", {
            template: `
            <search-criteria></search-criteria>
            `
        })
        .when("/favorites-page", {
            template: `
            <favorites-page></favorites-page>
            `
        })
        .otherwise({
            redirectTo: '/search-criteria'
        })

    }])