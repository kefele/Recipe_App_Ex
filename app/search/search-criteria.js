"use strict"
const searchCriteria = {
    template: `
    
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
            <p>{{item.recipe.label}}<button ng-click="$ctrl.add(item.recipe.label)">Add</button></p>

            <img src="{{item.recipe.image}}" >
            <a href="{{item.recipe.url}}" target="_blank">link</a>
            <p ng-repeat="list in item.recipe.ingredientLines"track by $index>{{list}}</p>            
        </li>
    </ul>
    </div>
    
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
            $location.path("/favorites-page")
        }


    }]

};
angular
    .module("Food")
    .component("searchCriteria", searchCriteria);