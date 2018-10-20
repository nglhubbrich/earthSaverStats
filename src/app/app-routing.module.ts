import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'addItems', loadChildren: './add-items/add-items.module#AddItemsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'deep-view', loadChildren: './deep-view/deep-view.module#DeepViewPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
