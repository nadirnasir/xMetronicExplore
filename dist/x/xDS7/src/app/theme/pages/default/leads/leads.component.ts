import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LeadsComponent implements OnInit, AfterViewInit {
  datatable: any;
  constructor(private _script: ScriptLoaderService, private elRef: ElementRef, private router: Router) {
  }

  ngOnInit() {

    // accessing local storage to pass to datatable call
    var localStObject = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(localStObject.fullName)

    var apiurl: string = 'http://deverp:8022/api/values/getAllLeadsMock'
    var leadStatus: string "open"
    var options = {

      data: {
        type: 'remote',
        source: {
          read: {
            // url: 'http://c3-0413/inc/api/datatables/demos/default.php',
            url: apiurl,
            method: 'GET',
            headers: { // Custome Headers
              // 'x-my-custom-header': 'some value',
              // 'x-test-header': 'the value'.
              Authorization: 'Bearer ' + localStObject.token
            },
            params: {
              query: { // Custom Query parameters
                // generalSearch: '',
                from: 'fromDate',
                to: 'toDate',
                status: leadStatus
              },
            },
          } // Read
        },
        pageSize: 2,
        saveState: {
          cookie: false,
          webstorage: true
        },
        serverPaging: false,
        serverFiltering: false,
        serverSorting: false
      },

      layout: {
        theme: 'default',
        class: '',
        scroll: false,
        height: null,
        footer: false
      },

      sortable: true,

      filterable: false,

      pagination: true,

      search: {
        onEnter: false,
        input: $('#searchDatatable'),
        delay: 400
      },

      toolbar: {
        layout: ['pagination', 'info'],
        placement: ['bottom']
      },
      rows: {
        afterTemplate: function (row, data, index) {
          // console.log(data)
        },

      },
      columns: [{
        field: "headers",
        title: "#",
        sortable: false,
        width: 40,
        selector: {
          class: 'm-checkbox--solid m-checkbox--brand'
        },
        textAlign: 'center'
      }, {
        field: "InquiryNo",
        title: "Lead #",
        sortable: 'asc',
        filterable: false,
        width: 70,
        // template: '{{OrderID}} - {{ShipCountry}}'
        // template: function(row) {
        //   console.log(row);
        //   // add row.idKey to your button
        //   // <a data-id="row.idKey">Edit</a>
        // },
      }, {
        field: "CustomerName",
        title: "Account",
        sortable: 'asc',
        filterable: false,
        width: 200,
        // template: '<a routerLink="/leads" href="/leads?id={{InquiryNo}}">{{CustomerName}}</a>'
      }, {
        field: "ProductDesc",
        title: "Lead Information",
        width: 350,
        responsive: {
          visible: 'lg'
        },
        template: '{{Quantity}} - {{ProductDesc}}'
      }, {
        field: "InquireDate",
        title: "Inquired",
        format: 'MMM DD YYYY' // need to look into this
      },
      {
        field: "Actions",
        width: 110,
        title: "Actions",
        sortable: false,
        overflow: 'visible',
        template: function (row) {
          var dropup = (row.getDatatable().getPageSize() - row.getIndex()) <= 4 ? 'dropup' : '';

          return '\
                  <div class="dropdown ' + dropup + '">\
                      <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                          <i class="la la-ellipsis-h"></i>\
                      </a>\
                      <div class="dropdown-menu dropdown-menu-right">\
                          <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                          <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                          <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                      </div>\
                  </div>\
                  <a class="m-portlet__nav-link btn btn-edit m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
                      <i class="la la-arrow-right"></i>\
                  </a>\
                  <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
                      <i class="la la-trash"></i>\
                  </a>\
              ';
        }
      }]
    };

    // Initialize datatable 
    this.datatable = (<any>$('.m_datatable')).mDatatable(options);


  }


  ngAfterViewInit() {

    // Load metronic specific javascript code
    this._script.loadScripts('app-leads',
      ['assets/app/js/leads.js']);

    // Function to bind click function to btn-edit button in datatable
    let _self = this;
    this.datatable.on('m-datatable--on-layout-updated', function (e) {
      // console.log('m-datatable--on-layout-updated');
      // console.log(this)
      // $(_self.elRef.nativeElement).find('.btn-edit').click(_self.clickEvent); 
      $(_self.elRef.nativeElement).find('.btn-edit').click(function () {
        _self.router.navigate(['/lead']);
      });
    });

    this.datatable.on('m-datatable--on-check', function (e) {
      console.log(e.target);

    });
    this.datatable.row('1')

  }


  // helper function to prevent default click behaviours
  clickEvent(e) {
    e.preventDefault();
    console.log(e)
  }

}
