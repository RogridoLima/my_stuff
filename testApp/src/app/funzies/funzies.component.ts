import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Position } from '../home/home.component';

@Component({
  selector: 'app-funzies',
  templateUrl: './funzies.component.html',
  styleUrls: ['./funzies.component.scss']
})
export class FunziesComponent implements OnInit {
  brasilgol = false;
  mousePos: Position = new Position();


  trollx;
  trolly;
  constructor() { }

  ngOnInit() {
    const windowHeight = parseInt($('#container').css('height').split('p')[0], 10);
    const windowWidth = parseInt($('#container').css('width').split('p')[0], 10);

    $('#container').mousemove(event => {
      this.mousePos.x = event.pageX;
      this.mousePos.y = event.pageY;
    });

    $('#clicaaquipo').mouseover(() => {
      const left = parseInt($('#clicaaquipo').css('left').split('p')[0], 10);
      const top = parseInt($('#clicaaquipo').css('top').split('p')[0], 10);
      this.trollx = [left - 60, left + 70, left - 90, left + 93, left - 100];
      this.trolly = [top + 40, top - 80, top + 110, top - 80, top + 150];
      const trollx = this.trollx[Math.floor((Math.random() * 5))];
      const trolly = this.trolly[Math.floor((Math.random() * 5))];

      if (trolly > windowHeight || trolly < 0 || trollx > windowWidth || trollx < 0) {
      console.log(trollx, trolly, windowHeight, windowWidth);

        $('#clicaaquipo').css('left', '50%');
        $('#clicaaquipo').css('top', '50%');
        return;
      }
      $('#clicaaquipo').css('left', trollx);
      $('#clicaaquipo').css('top', trolly);
    });
  }

  brasilfezgolpnois() {
    $('.base').css('animation', 'egolpora 2s infinite');
    this.brasilgol = true;
  }

  paraqueisso() {
    $('.base').css('animation', 'none');
    this.brasilgol = false;
  }
}
