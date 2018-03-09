import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, AfterViewInit {
    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company', sortable: false }
    ];

    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() { }

    ngAfterViewInit() { }

    onSelect(event) {
        console.log(event)
    }

}