import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    displayedColumns: string[] = ['error-matching', 'error-message', 'guidance'];
    dataSource = ELEMENT_DATA;

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    matcher = new MyErrorStateMatcher();
}

const ELEMENT_DATA: PeriodicElement[] = [
    {errorMatching: 'No', errorMessage: 'static', guidance: '`errors.New`'},
    {errorMatching: 'No', errorMessage: 'dynamic', guidance: '`fmt.Errorf`'},
    {errorMatching: 'Yes', errorMessage: 'static', guidance: 'top-level `var` with `errors.New`'},
    {errorMatching: 'Yes', errorMessage: 'dynamic', guidance: 'custom `error` type'},
];


export interface PeriodicElement {
    errorMatching: string;
    errorMessage: string;
    guidance: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
