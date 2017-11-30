import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[formControl][disableCond]'
})
export class DisabledDirective {
    @Input() public formControl: FormControl;

    get disableCond(): boolean {
        return !!this.formControl && this.formControl.disabled;
    }

    @Input('disableCond') set disableCond(s: boolean) {
        if (!this.formControl) {
            return;
        } else if (s) {
            this.formControl.disable();
        } else {
            this.formControl.enable();
        }
    }
}
