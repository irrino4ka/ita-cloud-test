import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserTrafficService } from './user-traffic.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FilteringModule } from './filtering.module';

import { FilteringComponent } from './filtering.component';

describe('FilteringComponent', () => {
    let component: FilteringComponent;
    let fixture: ComponentFixture<FilteringComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CustomMaterialsModule,
                NgxDatatableModule,
                FilteringModule
            ],
            declarations: [
            ],
            providers: [
                UserTrafficService,
                {
                    provide: AngularFirestore,
                    useValue: {}
                }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilteringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create filtering component', () => {
        expect(component).toBeTruthy();
    });

    it('should set disabled', () => {
        component.setDisabled();
        expect(component.disabled).toEqual(true);
    });

    it('should set today', () => {
        spyOn(component, 'setDisabled');
        component.setToday();
        expect(component.startDateValue).toEqual(new Date());
        expect(component.setDisabled).toHaveBeenCalled();
    });

    it('should set 7 days', () => {
        spyOn(component, 'setDisabled');
        component.set7Days();
        expect(component.setDisabled).toHaveBeenCalled();
    });

    it('should set custom', () => {
        component.setCustom();
        expect(component.startDateValue).toEqual(null);
        expect(component.endDateValue).toEqual(null);
        expect(component.disabled).toEqual(false);
    });

    it('should create array of filters', () => {
        component.checked();
        expect(component.filters).toEqual([]);
    });

    it('should reset filters', () => {
        component.resetFilters();
        expect(component.filters).toEqual([]);
    });

});
