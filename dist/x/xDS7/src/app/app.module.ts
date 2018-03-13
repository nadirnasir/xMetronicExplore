import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";

// Separately added HttpClientModule and Rest Service other than the theme
import { HttpClientModule } from '@angular/common/http';
// API constants
import { ApiConstant } from './core/api.constant';
// rest service
import { RestApiService } from './_services/http.service';
// leads Service
import { LeadsService } from './_services/leads/leads.service';
import { LeadsDataHandler } from './_services/leads-data-handle.service';
import { OrdersService } from './_services/orders/orders.service';
// orders service


@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    ScriptLoaderService,
    ApiConstant,
    RestApiService,
    LeadsService,
    LeadsDataHandler,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }