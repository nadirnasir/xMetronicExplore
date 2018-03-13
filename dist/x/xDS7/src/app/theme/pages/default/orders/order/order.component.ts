import { Component, OnInit, ViewEncapsulation, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { RestApiService } from '../../../../../_services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../../../_services/orders/orders.service';

@Component({
    selector: "order",
    templateUrl: "./order.component.html",
    styleUrls: ["./order.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class OrderComponent implements OnInit, AfterViewInit {

    orderResponse: any;
    totalQuantity: string;
    // showing product description
    checker: boolean = false;

    // singular properties
    customerName: string;

    constructor(private _script: ScriptLoaderService, private http: RestApiService, private orderService: OrdersService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(
            params => this.getLead(params['id'])
        );
    }

    ngOnInit() { }

    getLead(id: string) {
        this.orderService.getOrder(id)
            .subscribe(
                async (res: any) => {
                    this.orderResponse = await res.data;
                    this.customerName = this.orderResponse[0].CustomerName;
                    this.getTotal(this.orderResponse);
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