import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  {path: 'display', component: DisplayComponent},
  {path: 'save', component: SaveComponent},
  {path: 'edit', component: EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
