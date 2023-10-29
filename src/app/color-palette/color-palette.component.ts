import { Component } from '@angular/core';

@Component({
    selector: 'app-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent {
    colors: Color[] = [
        new Color(255, 0, 0),
        new Color(0, 255, 0),
        new Color(0, 0, 255),
        new Color(255, 255, 0),
        new Color(0, 255, 255),
        new Color(255, 0, 255),
    ];

    randomizeColor(color: Color): void {
        color.randomize();
    }
}

export class Color {
    rValue: number;
    gValue: number;
    bValue: number;
    aValue?: number;

    constructor(rValue: number, gValue: number, bValue: number, aValue?: number) {
        this.rValue = rValue;
        this.gValue = gValue;
        this.bValue = bValue;
        this.aValue = aValue;
    }

    randomize(): void {
        this.rValue = Math.floor(Math.random() * 256);
        this.gValue = Math.floor(Math.random() * 256);
        this.bValue = Math.floor(Math.random() * 256);
    }
    getRGB(): string {
        return `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`;
    }

    /**
     * The function checks if any of the RGB values are outside the range [0, 255]. If they are, it throws an error.
     * For the conversion:
     * The red value (r) is shifted left by 16 bits: (r << 16)
     * The green value (g) is shifted left by 8 bits: (g << 8)
     * The blue value (b) is used as is.
     * These values are then added together.
     * An additional left shift by 24 ((1 << 24)) is performed to ensure the resulting number has at least 8 characters (for cases when the RGB values are low).
     * This combined value is then converted to a hexadecimal string using .toString(16).
     * .slice(1) removes the leading "1" from the 8-character hexadecimal string.
     * .toUpperCase() converts the hex string to uppercase.
     * You can call the function with any RGB values you want to convert to their hex format.
     */
    getDisplayRGB(): string {
        let r = this.rValue;
        let g = this.gValue;
        let b = this.bValue;
        if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255)) {
            throw new Error('Invalid RGB values. Each value must be between 0 and 255.');
        }

        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
}
