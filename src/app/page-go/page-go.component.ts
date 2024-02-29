import { AfterViewChecked, Component, OnInit } from '@angular/core';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import "prismjs/components/prism-go";

@Component({
    selector: 'app-page-go',
    templateUrl: './page-go.component.html',
    styleUrls: ['./page-go.component.scss']
})
export class PageGoComponent implements OnInit, AfterViewChecked {
    longText = `Go is simple and fast, ideal for efficient multitasking in programs. It offers built-in tools for safe and speedy software, plus it's great for web servers and concurrent tasks. With a strong community, Go provides ample support and resources.`;
    helloWorld = `
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`;

    constructor() {
    }

    // blogPost: BlogPostInterface;
    highlighted: boolean = false;

    ngAfterViewChecked(): void {
    }

    ngOnInit(): void {
    }
}
