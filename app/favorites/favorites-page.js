"use strict";
const favoritesPage = {
    template:`
    <section>

    <ul>
    <button>X</button>
        <li ng-repeat="newItem in $ctrl.newItem" newItem = "newItem">{{newItem}}</li>
    </ul>

    </section>
    
    `,
    controller: ["SearchService", "$location", function (SearchService, $location){
        const vm = this;
        vm.newItem=SearchService.getFavFood();
        console.log(vm.newItem);

    }]
}
angular
.module("Food")
.component("favoritesPage", favoritesPage)