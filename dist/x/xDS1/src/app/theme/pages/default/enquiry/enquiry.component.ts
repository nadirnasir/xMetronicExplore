import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { RestApiService } from '../../../../_services/http.service';
import { LeadsDataHandler } from '../../../../_services/leads-data-handle.service';
import { Router } from '@angular/router';
import { LeadsService } from '../../../../_services/leads/lead.service';


@Component({
    selector: "enquiry-inner",
    templateUrl: "./enquiry.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class EnquiryComponent implements OnInit, AfterViewInit {

    leads: any;
    leadId: string;

    constructor(private _script: ScriptLoaderService, private leadService: LeadsService, private leadData: LeadsDataHandler, private router: Router) { }

    ngOnInit() {
        this.leadService.getAllLeads()
            .subscribe(
                async (res: any) => {
                    this.leads = await res.data;
                    console.log(this.leads);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-inner',
            ['assets/app/js/dashboard.js']);
    }

    ngOnDestroy() {
        this.leadData.leadId = this.leadId;
    }

    detailPage(leadId) {
        // Storing id of the row which user has clicked
        this.leadId = leadId;
        // changing the route when we have the id of user
        this.leadId !== undefined ? this.router.navigate(['/detail-enquiry']) : console.log("There was no value passed");

    }

}