import { NgModule } from '@angular/core';
import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilteringComponent } from './filtering.component';
import { SimpleTableComponent } from '../simple-table/simple-table.component';
import { UserTrafficService } from './user-traffic.service';
import { DateFormatPipe } from './date-format.pipe';
import { DisabledDirective } from './disabled.directive';
import { VALIDATION_CONFIG, validationConfig } from './validation-config.const';
import { SERVICE_CONFIG, serviceConfig } from './service-config.const';

@NgModule({
    imports: [
        CustomMaterialsModule,
        NgxDatatableModule
    ],
    declarations: [
        FilteringComponent,
        SimpleTableComponent,
        DisabledDirective,
        DateFormatPipe
    ],
    exports: [
        FilteringComponent
    ],
    providers: [
        UserTrafficService,
        {
            provide: VALIDATION_CONFIG,
            useValue: validationConfig
        },
        {
            provide: SERVICE_CONFIG,
            useValue: serviceConfig
        },
        DateFormatPipe
    ]
})

export class FilteringModule { }
