import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTitle, RouterPaths} from "./shared/routes/routes.model";
import {RelationshipIncomeComponent} from "./pages/relationship-income/relationship-income.component";
import {GenericPageComponent} from "./pages/generic-page/generic-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: RouterPaths.RELATIONSHIP_INCOME,
    pathMatch: 'full',
  },
  {
    path: RouterPaths.RELATIONSHIP_INCOME,
    component: RelationshipIncomeComponent,
    data: {
      title: DataTitle.RELATIONSHIP_INCOME
    }
  },
  {
    path: RouterPaths.DASHBOARD,
    component: GenericPageComponent,
    data: {
      title: DataTitle.DASHBOARD
    }
  },
  {
    path: RouterPaths.DEALS,
    component: GenericPageComponent,
    data: {
      title: DataTitle.DEALS
    }
  },
  {
    path: RouterPaths.ACCESS,
    component: GenericPageComponent,
    data: {
      title: DataTitle.ACCESS
    }
  },
  {
    path: RouterPaths.DETAILS,
    component: GenericPageComponent,
    data: {
      title: DataTitle.DETAILS
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
