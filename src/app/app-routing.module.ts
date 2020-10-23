import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'idea-list',
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  {
    path: 'idea-details',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
