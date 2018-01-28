import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {Helpers} from "./helpers";

@Component({
	selector: 'body',
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
	title = 'app';
	globalBodyClass = 'm-page--loading-non-block m--skin- m-content--skin-light m-header--fixed m-header--fixed-mobile m-aside-left--offcanvas-default m-aside-left--enabled m-aside-left--fixed m-aside-left--skin-dark m-aside--offcanvas-default';

	constructor(private _router: Router) {
	}

	ngOnInit() {
		this._router.events.subscribe((route) => {
			if (route instanceof NavigationStart) {
				Helpers.setLoading(true);
				Helpers.bodyClass(this.globalBodyClass);
			}
			if (route instanceof NavigationEnd) {
				Helpers.setLoading(false);
			}
		});
	}
}