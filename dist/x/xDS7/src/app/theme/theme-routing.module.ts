import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/subheader--type-search\/index\/index.module#IndexModule"
            },
            {
                "path": "leads",
                "loadChildren": ".\/pages\/default\/leads\/leads.module#LeadsModule"
            },
            {
                "path": "lead",
                redirectTo: '/leads',
                pathMatch: 'full'
            },
            {
                "path": "lead/:id",
                "loadChildren": ".\/pages\/default\/leads\/lead\/lead.module#LeadModule"
            },
            {
                "path": "orders",
                "loadChildren": ".\/pages\/default\/orders\/orders.module#OrdersModule"
            },
            {
                "path": "order",
                redirectTo: '/orders',
                pathMatch: 'full'
            },
            {
                "path": "order/:id",
                "loadChildren": ".\/pages\/default\/orders\/order\/order.module#OrderModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "blank",
                "loadChildren": ".\/pages\/default\/blank\/blank.module#BlankModule"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }