import {NgModule} from '@angular/core';
import { DefaultComponent } from '../pages/default/default.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { LoaderEnabledEnabledTypeSpinnerMessageComponent } from '../pages/loader-enabled-enabled-type-spinner-message/loader-enabled-enabled-type-spinner-message.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HrefPreventDefaultDirective} from '../../_directives/href-prevent-default.directive';
import {UnwrapTagDirective} from '../../_directives/unwrap-tag.directive';

@NgModule({
	declarations: [
DefaultComponent,
HeaderNavComponent,
AsideNavComponent,
LoaderEnabledEnabledTypeSpinnerMessageComponent,
FooterComponent,
QuickSidebarComponent,
ScrollTopComponent,
TooltipsComponent,
		HrefPreventDefaultDirective,
		UnwrapTagDirective,
	],
	exports: [
DefaultComponent,
HeaderNavComponent,
AsideNavComponent,
LoaderEnabledEnabledTypeSpinnerMessageComponent,
FooterComponent,
QuickSidebarComponent,
ScrollTopComponent,
TooltipsComponent,
		HrefPreventDefaultDirective,
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class LayoutModule {
}