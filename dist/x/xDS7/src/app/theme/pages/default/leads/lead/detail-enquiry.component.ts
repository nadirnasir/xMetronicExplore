import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { RestApiService } from '../../../../_services/http.service';
import { LeadsDataHandler } from '../../../../_services/leads-data-handle.service';
import { Router } from '@angular/router';
import { LeadsService } from '../../../../_services/leads/lead.service';



@Component({
    selector: "detail-enquiry-inner",
    templateUrl: "./detail-enquiry.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DetailEnquiryComponent implements OnInit, AfterViewInit {

    leadId: String;
    leadResponse: any;

    constructor(private _script: ScriptLoaderService, private http: RestApiService, private leadService: LeadsService, private leadData: LeadsDataHandler, private router: Router, ) {
        // getting the specific lead Id on which the user has clicked
        this.leadId = this.leadData.leadId;
        console.log(this.leadId);

        // checking if the leadId is undefined if so then it will call goBack() and send the user back to main enquiry page or it will call detailEnquiryCall() and hit the api for getting specipfic detial of a lead
        this.leadId === undefined ? this.goBack() : this.detailEnquiryCall();
        // if (this.leadId == undefined) {
        //     console.log(`leadId is ${this.leadId}`);
        //     this.goBack();
        // } else this.detailEnquiryCall();
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this._script.loadScripts('app-inner',
            ['assets/app/js/dashboard.js']);
    }

    goBack() {
        // if the link is directly accessed or with no parameters then we will be sending the user to enquiry page
        this.router.navigate(['/enquiry']);
    }

    // 
    detailEnquiryCall() {
        this.leadService.getSpecificLead(this.leadId)
            .subscribe(
                async (res: any) => {
                    console.log(`Here I am also accessable from leads service: ${this.leadId}`);
                    console.log(res);
                    this.leadResponse = await res;
                },
                (err) => {
                    console.log(err);
                }
            );
    }

}