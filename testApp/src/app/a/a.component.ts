import { Position } from './../home/home.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit, AfterViewInit {
    @ViewChild('myCanvas') myCanvas: ElementRef;

    context: CanvasRenderingContext2D;
    mousePos: Position = new Position();
    lastLine: Position = new Position();

    keepDrawing = false;

    dropdownOne: Items[] = [];

    dropdownTwo: Items[] = [];

  constructor() {
    this.dropdownOne = [
      {name: 'gaem', action: '/home'},
      {name: 'brasil', action: '/funzies'},
    ];

    this.mousePos.x = -1;
    this.mousePos.y = -1;

    this.lastLine.x = 0;
    this.lastLine.y = 0;
   }

    ngOnInit() {
    }

    ngAfterViewInit() {
      this.context = (this.myCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
      this.context.beginPath();
      $('#canvas').mousemove(event => {
        const x_offset = this.myCanvas.nativeElement.offsetLeft;
        const y_offset = this.myCanvas.nativeElement.offsetTop;

        this.mousePos.x = event.pageX - x_offset;
        this.mousePos.y = event.pageY - y_offset;
      });

      $('#canvas').mousedown(() => {
        console.log('mouse-down');
        this.keepDrawing = true;
        this.draw();
      });

      $('#canvas').mouseup(() => {
        console.log('mouse-up');
        this.keepDrawing = false;
        this.draw();
      });
    }

  draw() {
    this.context.moveTo(this.mousePos.x, this.mousePos.y);
    setTimeout(() => {
      this.context.lineTo(this.mousePos.x, this.mousePos.y);
      this.context.stroke();
      console.log('drawing');
      if (this.keepDrawing) {
        this.draw();
      }
    }, 1);

  }

    makeLine() {
      // this.context.moveTo(this.lastLine.x, this.lastLine.y);
      this.context.lineTo(this.mousePos.x, this.mousePos.y);
      console.log(this.mousePos, this.context);
      this.context.stroke();
    }

  }

export class Items {
  name: string;
  action: string;
}
