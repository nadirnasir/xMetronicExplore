import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { LeadsService } from '../../../../_services/leads/lead.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ["./leads.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LeadsComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  arr: any;
  // datatable rows
  rows = [];
  // copy of rows data to filter
  temp = [];
  // row which is selected
  selected = [];

  constructor(private _script: ScriptLoaderService, private elRef: ElementRef, private router: Router, private leadService: LeadsService) {
    // to fetch data fetchData function below
    this.fetchData();
  }

  ngOnInit() { }

  fetchData() {
    // this get the results from getAllLeads function in lead service
    this.leadService.getAllLeads()
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

    this.arr.forEach(obj => {
      let id = obj.InquiryNo;
      // converting quantity type from string to integer
      // obj.Quantity = parseInt(obj.Quantity);
      if (!this[id]) {
        result.push(this[id] = obj);
      } else {
        // converting quantity type from string to integer
        // this[id].Quantity += parseInt(obj.Quantity);
        this[id].Quantity += obj.Quantity;
        this[id].InquireDate += `, ${obj.InquireDate}`;
        this[id].ProductDesc += `, ${obj.ProductDesc}`;
      }
    }, Object.create(null));

    // copy of the same data
    this.temp = [...result];
    this.rows = result;

    console.log(typeof (this.temp[0].InquiryNo));
  }

  // filtering data using the copy of data which is in merge data
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.InquiryNo.toString().indexOf(val) !== -1 || !val;
    });

    // updating the rows to show filtered data
    this.rows = temp;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  // when user has clicked on any of the row
  onSelect(selected) {
    console.log(this.selected[0].InquiryNo);
    const inquiryNumber = this.selected[0].InquiryNo;
    this.router.navigate(['/lead', inquiryNumber]);
  }
}
