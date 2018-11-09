import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "app",
    loadChildren: "./tabs/tabs.module#TabsPageModule"
  },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardPageModule"
  },
  {
    path: "add-items",
    loadChildren: "./add-items/add-items.module#AddItemsPageModule"
  },
  {
    path: "deep",
    loadChildren: "./deep/deep.module#DeepPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
