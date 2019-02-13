import { NgModule } from '@angular/core';

import { JuiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JuiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JuiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JuiSharedCommonModule {}
