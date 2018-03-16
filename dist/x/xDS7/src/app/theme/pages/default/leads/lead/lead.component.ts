import { Component, OnInit, ViewEncapsulation, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { RestApiService } from '../../../../../_services/http.service';
import { LeadsDataHandler } from '../../../../../_services/leads-data-handle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadsService } from '../../../../../_services/leads/leads.service';

// @Pipe({ name: 'keyValues' })
// export class KeysPipe implements PipeTransform {
//     transform(value, args: string[]): any {
//         let keys = [];
//         for (let key in value) {
//             keys.push({ key: key, value: value[key] });
//         }
//         return keys;
//     }
// }

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

        for (let i = 0; i < data.length; i++) {
            result.push(data[i].Quantity);
        }

        this.totalQuantity = result.reduce((a, b) => a + b, 0);
    }

    ngAfterViewInit() {
        this._script.loadScripts('lead',
            ['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
                'assets/custom/components/portlets/draggable.js']);
    }

}