import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


import { WelcomeComponent } from './welcome.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';




@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, NzStepsModule, NzBreadCrumbModule
],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
