import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-test',
  templateUrl: "./test.component.html",
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-index',
      ['assets/app/js/dashboard.js']);
  }

}
