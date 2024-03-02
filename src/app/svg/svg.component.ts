import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit{
    @Input() name: string = 'none';
    images: Map<string,string> = new Map<string, string>();

    currentImage: string = '';

    ngOnInit(): void {
        this.images.set('none', '');
        this.images.set('home', 'M3 9.5V22h18V9.5L12 3l-9 6.5zM9 22V12h6v');
        this.images.set('menu', 'M4 6h16M4 12h16M4 18h16');
        this.images.set('close', 'M6 18L18 6M6 6l12 12');
        this.currentImage = this.images.get(this.name) ?? '';
    }


}

