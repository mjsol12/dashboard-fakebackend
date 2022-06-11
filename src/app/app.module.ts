import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EntityFilterComponent} from "./component/entity-filter/entity-filter.component";
import { RelationshipIncomeComponent } from './pages/relationship-income/relationship-income.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import {HttpClientModule} from "@angular/common/http";
import {fakeBackendProvider} from "./shared/fake-backend/fake-backend.service";
import {CustomerServiceService} from "./shared/services/customer-service.service";

@NgModule({
  declarations: [
    AppComponent,
    EntityFilterComponent,
    RelationshipIncomeComponent,
    GenericPageComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [fakeBackendProvider, CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
