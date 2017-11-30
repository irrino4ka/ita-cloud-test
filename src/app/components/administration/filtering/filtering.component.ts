import { Component, OnInit, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';

import { UserTrafficService } from './user-traffic.service';
import { User } from './user.interface';
import { ValidationConfig } from './validation-config.interface';
import { DateFormatPipe } from './date-format.pipe';
import { DisabledDirective } from './disabled.directive';
import { VALIDATION_CONFIG, validationConfig } from './validation-config.const';

@Component({
    selector: 'app-filtering',
    templateUrl: './filtering.component.html',
    styleUrls: ['./filtering.component.scss']
})

export class FilteringComponent implements OnInit {
    public startDateValue: Date;
    public endDateValue: Date;
    public startDate: FormControl;
    public endDate: FormControl;
    public searchOn: boolean;
    public disabled: boolean;
    public filters: string[];
    public users: User[];
    public filterItems: any[];
    public tableRows: User[];
    public loadIndicator: boolean;
    public tableColumns: any[];

    constructor(
        @Inject(VALIDATION_CONFIG) public validationConst: ValidationConfig,
        private userTrafficService: UserTrafficService) {
    }

    public addDays(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    public setDisabled(): void {
        this.disabled = true;
    }

    public setToday(): void {
        this.startDateValue = new Date();
        this.endDateValue = this.addDays(1);
        this.setDisabled();
    }

    public set7Days(): void {
        this.startDateValue = this.addDays(-7);
        this.endDateValue = new Date();
        this.setDisabled();
    }

    public setCustom(): void {
        this.startDateValue = null;
        this.endDateValue = null;
        this.disabled = false;
    }

    public getStartErrorMessage() {
        return this.startDate
            .hasError(validationConfig.errorRequired) ? validationConfig.errorRequiredMessage : '';
    }

    public getEndErrorMessage() {
        return this.endDate
            .hasError(validationConfig.errorRequired) ? validationConfig.errorRequiredMessage : '';
    }

    public checked() {
        this.filterItems.forEach((item) => {
            if (item.checked) {
                return this.filters = this.filters.concat(item.value);
            }
        });
    }

    public applyFilters() {
        if (this.filters.length > 0) {
            return this.users.filter((item) => {
                return this.filters.indexOf(item.domain) >= 0;
            });
        } else {
            return this.users;
        }
    }

    public resetFilters(): void {
        this.loadIndicator = false;
        this.filters = [];
    }

    public submit(): void {
        this.checked();
        this.userTrafficService
            .getQueryResults(this.startDateValue, this.endDateValue)
            .subscribe((users: User[]) => {
                this.users = users;
                this.tableRows = this.applyFilters();
                this.resetFilters();
        });
        this.searchOn = true;
    }

    public ngOnInit(): void {
        this.setCustom();
        this.startDate = new FormControl('', Validators.required);
        this.endDate = new FormControl('', Validators.required);
        this.filters = [];
        this.searchOn = false;
        this.filterItems  = [
            {
                value: 'facebook',
                checked: false
            },
            {
                value: 'github',
                checked: false
            },
            {
                value: 'twitter',
                checked: false
            },
        ];
        this.tableRows = [];
        this.loadIndicator = true;
        this.tableColumns = [
            { prop: 'email' },
            { prop: 'times visited' },
            { prop: 'date', pipe: new DateFormatPipe('en-US') },
            { prop: 'domain'}
        ];
    }

}
