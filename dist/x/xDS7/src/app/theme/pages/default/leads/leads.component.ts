import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LeadsComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) {
  }

  ngOnInit() {

    var localStObject = JSON.parse(localStorage.getItem("currentUser"));
    console.log(localStObject.fullName)
    
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-leads',
      ['assets/app/js/leads.js']);
      
  }
}