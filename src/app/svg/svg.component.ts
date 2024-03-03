import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
    @Input() svg: SVG = SVG.none;
    constructor() {
    }

    ngOnInit(): void {
    }


}

export enum SVG {
    none = '',
    home = 'M3 9.5V22h18V9.5L12 3l-9 6.5Z',
    menu = 'M4 6h16 M4 12h16 M4 18h16',
    close = 'M6 18L18 6 M6 6l12 12',
    closeCircle = 'M18 6L6 18 M6 6l12 12',
}
