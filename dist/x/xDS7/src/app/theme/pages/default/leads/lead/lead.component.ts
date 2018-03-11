import { Component, OnInit, ViewEncapsulation, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { RestApiService } from '../../../../../_services/http.service';
import { LeadsDataHandler } from '../../../../../_services/leads-data-handle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadsService } from '../../../../../_services/leads/lead.service';

@Component({
    selector: "lead",
    templateUrl: "./lead.component.html",
    styleUrls: ["./lead.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class LeadComponent implements OnInit, AfterViewInit {

    leadId: string;
    leadResponse: any;
    idthroughRoute: string;
    total: any;

    constructor(private _script: ScriptLoaderService, private http: RestApiService, private leadService: LeadsService, private leadData: LeadsDataHandler, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(
            params => this.getLead(params['id'])
        );
    }

    getLead(id: string) {
        // for navigation from the leads page use
        // this.router.navigate(['lead', id])
        // our parameter that the browser is reading
        console.log(id);

        this.leadService.getLead(id)
            .subscribe(
                async (res: any) => {
                    console.log(`Here I am also accessable from leads service: ${id}`);
                    console.log(res);
                    this.leadResponse = await res.data;
                    this.total = this.leadResponse.reduce((a: any, b: any) => {
                        a = a + b;
                    }, 0);
                    console.log(this.total);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this._script.loadScripts('lead',
            ['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
                'assets/custom/components/portlets/draggable.js']);
    }

    goBack() {
        // if the link is directly accessed or with no parameters then we will be sending the user to enquiry page
        this.router.navigate(['/leads']);
    }

}