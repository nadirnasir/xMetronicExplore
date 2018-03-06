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
import { ApiConstant } from './core/api.constant';
import { RestApiService } from './_services/http.service';
import { LeadsDataHandler } from './_services/leads-data-handle.service';
import { LeadsService } from './_services/leads/lead.service';

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
        LeadsDataHandler
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }