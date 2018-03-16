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
    customerId: string;
    customerName: string;

    constructor(private _script: ScriptLoaderService, private http: RestApiService, private orderService: OrdersService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(
            params => this.getOrder(params['id'])
        );
    }

    ngOnInit() { }

    getOrder(id: string) {
        this.orderService.getOrder(id)
            .subscribe(
                async (res: any) => {
                    this.orderResponse = await res.data;
                    this.customerName = this.orderResponse[0].CustomerName;
                    this.customerId = id;
                    this.getTotal(this.orderResponse);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getTotal(data) {
        console.log(data.length);
        let result = [];

        for (let i = 0; i < data.length; i++) {
            result.push(data[i].order_qty_pcs);
        }

        this.totalQuantity = result.reduce((a, b) => a + b, 0);

        console.log(this.totalQuantity);
    }

    ngAfterViewInit() {
        this._script.loadScripts('lead',
            ['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
                'assets/custom/components/portlets/draggable.js']);
    }

}