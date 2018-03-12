import { Component, OnInit, ViewEncapsulation, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { RestApiService } from '../../../../../_services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadsService } from '../../../../../_services/leads/lead.service';

@Component({
    selector: "lead",
    templateUrl: "./lead.component.html",
    styleUrls: ["./lead.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class LeadComponent implements OnInit, AfterViewInit {

    leadResponse: any;
    totalQuantity: string;
    // showing product description
    checker: boolean = false;

    // singular properties
    customerName: string;

    constructor(private _script: ScriptLoaderService, private http: RestApiService, private leadService: LeadsService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(
            params => this.getLead(params['id'])
        );
    }

    ngOnInit() { }

    getLead(id: string) {
        this.leadService.getLead(id)
            .subscribe(
                async (res: any) => {
                    this.leadResponse = await res.data;
                    this.customerName = this.leadResponse[0].CustomerName;
                    this.getTotal(this.leadResponse);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getTotal(data) {
        let result = [];

        data.forEach(obj => {
            let id = obj.InquiryNo;
            !this[id] ? result.push(this[id] = obj) : this[id].Quantity += obj.Quantity;
        }, Object.create(null));

        this.totalQuantity = result[0].Quantity;
    }

    ngAfterViewInit() {
        this._script.loadScripts('lead',
            ['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
                'assets/custom/components/portlets/draggable.js']);
    }

}