import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-home',
    templateUrl: './page-home.component.html',
    styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
    welcomeText = '';
    welcomeMessage = 'Welcome to my home.';
    welcomeInterval = 100;
    welcomeEndPause = 1000
    welcomeEnded = false;

    infoText = '';
    infoMessage = 'Enjoy your stay.';
    infoInterval = 66;
    infoEndPause = 1000;
    infoEnded = false;

    buttonText = '';
    buttonMessage = 'Notice the environment?';
    buttonInterval = 50;
    buttonEndPause = 1000;
    buttonEnded = false;

    monsters: boolean[] = [];
    monsterCount = 10;
    monsterInterval = 100;
    ngOnInit(): void {
        this.startWelcomeMessage();
    }

    startWelcomeMessage() {
        const welcomeInterval = setInterval(() => {
            this.welcomeText += this.welcomeMessage.charAt(this.welcomeText.length);
            if (this.welcomeText === this.welcomeMessage) {
                setTimeout(() => {
                    this.welcomeEnded = true;
                    this.startInfoMessage();
                }, this.welcomeEndPause);
                clearInterval(welcomeInterval);
            }
        }, this.welcomeInterval);
    }

    startInfoMessage() {
        const introInterval = setInterval(() => {
            this.infoText += this.infoMessage.charAt(this.infoText.length);
            if (this.infoText === this.infoMessage) {
                setTimeout(() => {
                    this.infoEnded = true;
                    this.startButtonMessage();
                }, this.infoEndPause);
                clearInterval(introInterval);
            }
        }, this.infoInterval);
    }

    startButtonMessage() {
        const buttonInterval = setInterval(() => {
            this.buttonText += this.buttonMessage.charAt(this.buttonText.length);
            if (this.buttonText === this.buttonMessage) {
                setTimeout(() => {
                    this.buttonEnded = true;
                    this.startMonsters();
                }, this.buttonEndPause);
                clearInterval(buttonInterval);
            }
        }, this.buttonInterval);
    }

    startMonsters() {
        const monsterInterval = setInterval(() => {
            this.monsters.push(true);
            if (this.monsters.length === this.monsterCount) {
                clearInterval(monsterInterval);
            }
        }, this.monsterInterval);
    }
}
