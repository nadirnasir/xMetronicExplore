//== Class definition
var Leads = function () {


    //== Datatable.
    var datatableLatestOrders = function () {
        if ($('#m_datatable_latest_orders').length === 0) {
            
            return;
        }

        var datatable = $('.m_datatable').mDatatable({
            
            data: {
                type: 'remote',
                source: {
                    read: {
                        // url: 'http://c3-0413/inc/api/datatables/demos/default.php',
                        url: 'http://deverp:8022/api/values/getAllLeadsMock',
                        method: 'GET',
                    }
                },
                pageSize: 20,
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
            }, {
                field: "CustomerName",
                title: "Account",
                sortable: 'asc',
                filterable: false,
                width: 200,
                
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
                title: "Inquired"
            }, 
            // {
            //     field: "Status",
            //     title: "Status",
            //     width: 100,
            //     // callback function support for column rendering
            //     template: function (row) {
            //         var status = {
            //             1: {
            //                 'title': 'Pending',
            //                 'class': 'm-badge--brand'
            //             },
            //             2: {
            //                 'title': 'Delivered',
            //                 'class': ' m-badge--metal'
            //             },
            //             3: {
            //                 'title': 'Canceled',
            //                 'class': ' m-badge--primary'
            //             },
            //             4: {
            //                 'title': 'Success',
            //                 'class': ' m-badge--success'
            //             },
            //             5: {
            //                 'title': 'Info',
            //                 'class': ' m-badge--info'
            //             },
            //             6: {
            //                 'title': 'Danger',
            //                 'class': ' m-badge--danger'
            //             },
            //             7: {
            //                 'title': 'Warning',
            //                 'class': ' m-badge--warning'
            //             }
            //         };
            //         return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                    
            //     }
            // }, {
            //     field: "Type",
            //     title: "Type",
            //     width: 100,
            //     // callback function support for column rendering
            //     template: function (row) {
            //         var status = {
            //             1: {
            //                 'title': 'Online',
            //                 'state': 'danger'
            //             },
            //             2: {
            //                 'title': 'Retail',
            //                 'state': 'primary'
            //             },
            //             3: {
            //                 'title': 'Direct',
            //                 'state': 'accent'
            //             }
            //         };
            //         return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
            //     }
            // },
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
                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
                            <i class="la la-edit"></i>\
                        </a>\
                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
                            <i class="la la-trash"></i>\
                        </a>\
                    ';
                }
            }]
        });
    }

    return {
        //== Init demos
        init: function () {
            // datatables
            datatableLatestOrders();
            
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function () {
    Leads.init();
    
});
//# sourceMappingURL=leads.js.map

//# sourceMappingURL=leads.js.map
