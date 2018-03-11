import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { TableComponent } from './table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": TableComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, NgxDatatableModule
    ], exports: [
        RouterModule
    ], declarations: [
        TableComponent
    ]
})
export class TableModule {



}