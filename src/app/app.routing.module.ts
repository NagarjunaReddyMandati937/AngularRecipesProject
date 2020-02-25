import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
const appRoutes: Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent }
    // { path: '**', component: PageNotFoundComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}
