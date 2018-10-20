import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs.router.module";

import { TabsPage } from "./tabs.page";
import { AboutPageModule } from "../about/about.module";
import { HomePageModule } from "../home/home.module";
import { DashboardPageModule } from "../dashboard/dashboard.module";
import { AddItemsPageModule } from "../add-items/add-items.module";
import { DeepPageModule } from "../deep/deep.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    DashboardPageModule,
    AddItemsPageModule,
    DeepPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
