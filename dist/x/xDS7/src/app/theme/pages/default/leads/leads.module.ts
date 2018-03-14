import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { LeadsComponent } from './leads.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableService } from '../../../../_services/datatable.service';

const routes: Routes = [
  {
    'path': '',
    'component': DefaultComponent,
    'children': [
      {
        'path': '',
        'component': LeadsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule, NgxDatatableModule
  ], exports: [
    RouterModule,
  ], declarations: [
    LeadsComponent,
  ],
  providers: [
    DatatableService
  ]
})
export class LeadsModule {
}
