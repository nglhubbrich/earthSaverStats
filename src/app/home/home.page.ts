import { Component } from "@angular/core";
import { async } from "q";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router) {}

  async navTabs() {
    this.router.navigateByUrl("/app/tabs/(dashboard:dashboard)");
  }
}
