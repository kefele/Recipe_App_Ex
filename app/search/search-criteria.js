"use strict"
const searchCriteria = {
    template: 
    `
    
        <div id="searchPage">
            <label>Ingredients</label>
            <input type ="text" ng-model="$ctrl.ingredientOne">
            <label>Exclude Ingredients: </label>
            <input type="text" ng-model="$ctrl.excludes">
        
            select a diet:

            <select ng-model="$ctrl.diet">
                <option value="balanced">Balanced
                <option value="high-protein">High Protein
                <option value="high-fiber">High Fiber
                <option value="low-fat">Low Fat
                <option value="low-carb">Low Carb
            </select>   
            <button ng-click="$ctrl.search($ctrl.ingredientOne, $ctrl.excludes, $ctrl.diet)">Search for Recipes</button>
        </div>
        
            <ul>
                <li class="data"  ng-repeat="item in $ctrl.recipes" track by $index>
                    <p>{{item.recipe.label}}</p>

                    <img src="{{item.recipe.image}}" >
                    
                     <a href="{{item.recipe.url}}" target="_blank">link</a>
                    <button class="btnsInSearch" ng-init="num=1" ng-click="num= num+1">Ingredients</button>
                    <button class="btnsInSearch" ng-click="$ctrl.add(item.recipe)">Add</button>
                    
                    <p ng-if="num % 2 ==0" ng-repeat="list in item.recipe.ingredientLines"track by $index>{{list}}</p>            
                </li>
            </ul>
 
    `,
    controller: ["SearchService", "$location", function (SearchService, $location) {
        const vm = this;
        vm.search = (ingredientOne, excludes, diet) => {
            SearchService.recipeSearch(ingredientOne, excludes, diet).then((response) => {
                console.log(response);
                vm.recipes = response.data.hits;

            });

        }
        vm.add = (newItem) => {
            SearchService.setFavFood(newItem);
            // $location.path("/favorites-page")
        }
        


    }]

};
angular
    .module("Food")
    .component("searchCriteria", searchCriteria);