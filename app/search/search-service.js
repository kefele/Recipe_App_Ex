"use strict";
function SearchService($http){

    const vm = this;
    vm.recipeSearch = (ingredients, remove, diet) =>{
        return $http({
            method: "GET",
            url:`https://api.edamam.com/search?q=${ingredients}&app_id=7e8a1c29&app_key=f2007cb8c4262d5df92210ce6ae366a0&excluded=${remove}&diet=${diet}`

        }).then((response) => {
            console.log(response);
            return response;
        })
    };
    vm.favFood = [];

    vm.setFavFood =(newItem)=>{
        vm.favFood.push(newItem);
        console.log(vm.favFood);
        return vm.favFood;
        
   }

    vm.getFavFood =()=>{
        return vm.favFood;
    }
    // vm.addFav=(newItem)=>{
    //     vm.favFood.push("newItem")
    // }
    


    // vm.addFav= (newItem) =>{
    //     vm.favFood.push(newItem)
    //     $location.path("/favorites-page")
    // };
   
}
angular
.module("Food")
.service("SearchService", SearchService);




