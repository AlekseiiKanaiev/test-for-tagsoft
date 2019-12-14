import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {path: '', redirectTo: 'rick-and-morty', pathMatch: 'full'},
  {path: 'rick-and-morty', component: RickAndMortyComponent},
  {path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
