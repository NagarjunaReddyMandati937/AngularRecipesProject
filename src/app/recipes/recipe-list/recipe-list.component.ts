import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Lemon Chiken', 
    'Curry for dinner', 
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg%3Fitok%3DsGWzw71z',[])
    , new Recipe('Butter Chiken', 
    'Curry for dinner with out spicy', 
    'https://i.ytimg.com/vi/sqxT9Po9gUI/maxresdefault.jpg',
    [new Ingredient('chicken pieces',200),
    new Ingredient('Lemon pieces',20)])
    , new Recipe('Chiken 65', 
    'Includes 10-15 pieces', 
    'https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/10/28zAKtbsfd.jpg',
    [new Ingredient('Mutton pieces',200),
    new Ingredient('Tomatos',200)])
    , new Recipe('Mutton Kheema', 'Includes 10-15 pieces', 'https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/10/28zAKtbsfd.jpg',[])
  ];
  constructor(private recipeService : RecipeService) { 
    
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipewasSelected.emit(recipe);

  }

}
