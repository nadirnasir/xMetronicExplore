import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrdersService } from '../../../../_services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ["./orders.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class OrdersComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  arr: any;
  // datatable rows
  rows = [];
  // copy of rows data to filter
  temp = [];
  // row which is selected
  selected = [];

  constructor(private _script: ScriptLoaderService, private elRef: ElementRef, private router: Router, private orderService: OrdersService) {
    // to fetch data fetchData function below
    this.fetchData();
  }

  ngOnInit() { }

  fetchData() {
    // this get the results from getAllLeads function in lead service
    this.orderService.getAllOrders()
      .subscribe(
        async (res: any) => {
          this.arr = await res.data;
          this.mergeData();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // merging data W.R.T Inquiry Number
  mergeData() {
    let result = [];

    this.arr.forEach((obj) => {
      let id = obj.os_no;
      // converting quantity type from string to integer
      // obj.Quantity = parseInt(obj.Quantity);
      if (!this[id]) {
        result.push(this[id] = obj);
      } else {
        // converting quantity type from string to integer
        this[id].Quantity += obj.Quantity;
        this[id].order_qty_pcs += obj.order_qty_pcs;
        this[id].ProductDesc += `, ${obj.ProductDesc}`;
      }
    }, Object.create(null));

    console.log(result);

    this.trackMultiple(result);
  }

  // concatinating Quantity and product description(showing 'multiple products' if there are more than on products)
  trackMultiple(resultRow: any) {

    for (let i = 0; i < resultRow.length; i++) {
      resultRow[i].ProductDesc.split(", ").length ? resultRow[i].ProductDesc = `${resultRow[i].order_qty_pcs}, PCS Multiple Products` : resultRow[i].ProductDesc = `${resultRow[i].order_qty_pcs}, ${resultRow[i].ProductDesc}`;
    }

    this.temp = [...resultRow];
    this.rows = resultRow;

  }

  // filtering data using the copy of data which is in merge data
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.os_no.toString().indexOf(val) !== -1 || !val;
    });

    // updating the rows to show filtered data
    this.rows = temp;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  // when user has clicked on any of the row
  onSelect(selected) {
    console.log(this.selected[0].os_no);
    const customerNumber = this.selected[0].os_no;
    this.router.navigate(['/order', customerNumber]);
  }
}
