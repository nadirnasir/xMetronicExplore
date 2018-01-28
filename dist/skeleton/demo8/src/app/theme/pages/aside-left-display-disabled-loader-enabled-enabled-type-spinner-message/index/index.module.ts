import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { AsideLeftDisplayDisabledLoaderEnabledEnabledTypeSpinnerMessageComponent } from '../aside-left-display-disabled-loader-enabled-enabled-type-spinner-message.component';

const routes: Routes = [
    {
        "path": "",
        "component": AsideLeftDisplayDisabledLoaderEnabledEnabledTypeSpinnerMessageComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
IndexComponent
]})
export class IndexModule  {



}