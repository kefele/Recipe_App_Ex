"use strict";
const favoritesPage = {
    template:`
    <section>

    <ul>
    
        <li class="favReturn" ng-repeat="newItem in $ctrl.newItem" newItem = "newItem"><p>{{newItem.label}}<p/>
        <img src="{{newItem.image}}"><button ng-click="$ctrl.delete(index)">X</button></li>
    </ul>
    
    </section>
    <div class ="back">
    <button  ng-click="$ctrl.backToSearch()">Search</button>
    </div>
    
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