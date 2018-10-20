import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { HomePage } from "../home/home.page";
import { AboutPage } from "../about/about.page";
import { DashboardPage } from "../dashboard/dashboard.page";
import { AddItemsPage } from "../add-items/add-items.page";
import { DeepPage } from "../deep/deep.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/(home:home)",
        pathMatch: "full"
      },
      {
        path: "home",
        outlet: "home",
        component: HomePage
      },
      {
        path: "about",
        outlet: "about",
        component: AboutPage
      },
      {
        path: "dashboard",
        outlet: "dashboard",
        component: DashboardPage
      },
      {
        path: "addItems",
        outlet: "addItems",
        component: AddItemsPage
      },
      {
        path: "deep",
        outlet: "deep",
        component: DeepPage
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/(home:home)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
