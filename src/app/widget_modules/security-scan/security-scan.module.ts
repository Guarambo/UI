import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityScanRoutingModule } from './security-scan-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {SecurityScanWidgetComponent} from './security-scan-widget/security-scan-widget.component';
import {SecurityScanConfigComponent} from './security-scan-config/security-scan-config.component';

@NgModule({
  declarations: [SecurityScanWidgetComponent, SecurityScanConfigComponent],
  entryComponents: [SecurityScanWidgetComponent, SecurityScanConfigComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SecurityScanRoutingModule
  ],
  exports: [SecurityScanWidgetComponent, SecurityScanConfigComponent]
})
export class SecurityScanModule { }
