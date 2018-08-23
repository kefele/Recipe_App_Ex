"use strict";
const favoritesPage = {
    template:`
    <section>

    <ul>
    
        <li ng-repeat="newItem in $ctrl.newItem" newItem = "newItem">{{newItem}}<button ng-click="$ctrl.delete(index)">X</button></li>
    </ul>
        <button ng-click="$ctrl.backToSearch()">Search</button>

    </section>
    
    `,
    controller: ["SearchService", "$location", function (SearchService, $location){
        const vm = this;
        vm.fav = SearchService.favFood;
        vm.delete = (index)=>{
            vm.fav.splice(index,1);

        }
        vm.newItem=SearchService.getFavFood();
        console.log(vm.newItem);

        vm.backToSearch = () =>{
            $location.path("/search-criteria")
        }

    }]
}
angular
.module("Food")
.component("favoritesPage", favoritesPage)