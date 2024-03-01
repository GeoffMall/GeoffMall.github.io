import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-go',
    templateUrl: './page-go.component.html',
    styleUrls: ['./page-go.component.scss']
})
export class PageGoComponent implements OnInit, AfterViewChecked {

    constructor() {
    }

    // blogPost: BlogPostInterface;
    highlighted: boolean = false;

    ngAfterViewChecked(): void {
    }

    ngOnInit(): void {
    }
}
