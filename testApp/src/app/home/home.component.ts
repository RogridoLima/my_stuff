import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mousePos: Position = new Position();
  enemies: Enemy[] = [];
  color = ['blue', 'red', 'pink', 'black', 'white'];

  bulletMovement;

  constructor() {
    this.mousePos.x = -1;
    this.mousePos.y = -1;
  }

  ngOnInit() {
    // add the enemies
    for (let i = 0; i < 20; i++) {
      const en = new Enemy();
      const colorNumber = Math.floor((Math.random() * 5));
      en.name = 'enemy: ' + i;
      en.speed = 5;
      en.color = this.color[colorNumber];
      en.position.x = 0;
      en.position.y = 0;
      en.alive = true;

      this.enemies.push(en);
    }

    // constantly get mouse position
    $('#container').mousemove(event => {
      this.mousePos.x = event.pageX;
      this.mousePos.y = event.pageY;
    });
    // adds element at mouse position on mouse click
    let bulletId = 0;
    $(document).keydown(event => {
      // $('#mouseElement').css('top', this.mousePos.y);
      // $('#mouseElement').css('left', this.mousePos.x);
      let top, left, speed, direction;
      top = parseInt($('#mouseElement').css('top').split('p')[0], 10);
      left = parseInt($('#mouseElement').css('left').split('p')[0], 10);
      speed = 20;
      switch (event.key) {
        // movement
        case 'w': case 'ArrowUp':
          $('#mouseElement').css('top', top - speed);
          direction = 'up';
          break;

        case 's': case 'ArrowDown':
          $('#mouseElement').css('top', top + speed);
          direction = 'down';
          break;

        case 'a': case 'ArrowLeft':
          $('#mouseElement').css('left', left - speed);
          direction = 'left';
          break;

        case 'd': case 'ArrowRight':
          $('#mouseElement').css('left', left + speed);
          direction = 'right';
          break;

          // attack
        case 'z':
          bulletId++;
          const bullet = document.createElement('div');
          $('#container').append(bullet);
          bullet.id = 'bulletName' + bulletId;
          $('#bulletName' + bulletId).css('background', 'yellow');
          $('#bulletName' + bulletId).css('position', 'absolute');
          $('#bulletName' + bulletId).css('height', '5px');
          $('#bulletName' + bulletId).css('width', '30px');
          $('#bulletName' + bulletId).css('top', top + 5);
          $('#bulletName' + bulletId).css('left', left + 20);
          $('#bulletName' + bulletId).css('transition', 'all .2s');
          const xPos = left + 20;
          const winWidth = parseInt($('.base').css('width').split('p')[0], 10);
          const percentage = ((xPos * 100) / winWidth);
          console.log(xPos, winWidth, percentage);
          $('#bulletName' + bulletId).css('-webkit-transform', 'translate(' + ( percentage - 97 ) * -1 + 'vw,0px)');​
          for (let i = 0; i <= bulletId; i++) {
            setTimeout(() => {
              $('#bulletName' + i).css('display', 'none');
            }, 300);
          }
          break;
      }
      console.log(top, left, event.key);
    });
  }

}

export class Position {
  x: number;
  y: number;
}

export class Enemy {
  name: string;
  position: Position = new Position();
  color: string;
  speed: number;
  alive: boolean;
}
