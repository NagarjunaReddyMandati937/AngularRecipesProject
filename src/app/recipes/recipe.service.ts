import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Lemon Chiken', 
        'Curry for dinner', 
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg%3Fitok%3DsGWzw71z'
        ,[new Ingredient('chicken Pieces',300),new Ingredient('chicken Masala',2)])
        , new Recipe('Butter Chiken', 'Curry for dinner with out spicy', 'https://i.ytimg.com/vi/sqxT9Po9gUI/maxresdefault.jpg',[new Ingredient('chicken Pieces(in Kgs)',6),new Ingredient('chicken Masala(in Packets)',2)])
        , new Recipe('Chiken 65', 'Includes 10-15 pieces', 'https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/10/28zAKtbsfd.jpg',[new Ingredient('chicken Pieces',500),new Ingredient('chicken Masala',4)])
    ];
    constructor(private slService:ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}