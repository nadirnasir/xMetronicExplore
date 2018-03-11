import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ["./leads.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LeadsComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  obj = {
    meta: {
      page: "1",
      pages: "1",
      perpage: "-1",
      total: 114,
      sort: "asc",
      field: "InquiryNo"
    },
    data: [
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Hand Towel"
      },
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Towel"
      },
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Wash Cloth"
      },
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Sheett5"
      },
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Non Terry Kitchen Towel"
      },
      {
        InquiryNo: 38090,
        Quantity: "27000",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "2/6/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Window Pane Solid KT"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Hand Towel"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Towel"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Wash Cloth"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Sheett5"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Non Terry Kitchen Towel"
      },
      {
        InquiryNo: 38303,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Window Pane Solid KT"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Hand Towel"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Towel"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Wash Cloth"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Terry Bath Sheett5"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Non Terry Kitchen Towel"
      },
      {
        InquiryNo: 38304,
        Quantity: "10",
        QualityCode: null,
        ColorCode: null,
        PatternCode: null,
        StyleCode: null,
        Post: "U",
        PostStatus: null,
        CustCode: 0,
        Unit: 1,
        CustomerName: "WAL-MART STORES INC.",
        InquireDate: "8/1/2017",
        LeadTime: null,
        ShipDate: null,
        ProductDesc: "Window Pane Solid KT"
      }
    ]
  };
  // datatable rows
  rows = [];
  // copy of rows data to filter
  temp = [];
  // row which is selected
  selected = [];
  // columns = [
  //   { prop: 'InquiryNo' },
  //   { prop: 'Quantity' },
  //   // { prop: 'QualityCode' },
  //   // { prop: 'ColorCode' },
  //   // { prop: 'PatternCode' },
  //   // { prop: 'StyleCode' },
  //   { prop: 'Post' },
  //   // { prop: 'PostStatus' },
  //   { prop: 'CustCode' },
  //   { prop: 'Unit' },
  //   { prop: 'CustomerName' },
  //   { prop: 'InquireDate' },
  //   // { prop: 'LeadTime' },
  //   // { prop: 'ShipDate' },
  //   { prop: 'ProductDesc' }
  // ];

  constructor(private _script: ScriptLoaderService, private elRef: ElementRef, private router: Router) {
    this.temp = [...this.obj.data];
    this.rows = this.obj.data;
  }

  ngOnInit() { }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.InquiryNo.toString().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    console.log(this.selected[0].InquiryNo);
    const inquiryNumber = this.selected[0].InquiryNo;
    this.router.navigate(['/lead', inquiryNumber]);
  }
}
