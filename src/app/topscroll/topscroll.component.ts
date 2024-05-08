import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, pipe, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-topscroll',
  standalone: true,
  imports: [],
  templateUrl: './topscroll.component.html',
  styleUrl: './topscroll.component.scss'
})
export class TopscrollComponent implements OnInit {

  scrollbar: any;

  getScrollWidth(){
    const doc = document.documentElement;
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;

    return (winScroll/height) * 100;
  }

  constructor(){
    
  }

  ngOnInit(): void {
    this.scrollbar = document.getElementById('scrollbar');

    fromEvent(document, 'scroll').pipe(
      throttleTime(20),
      tap(()=>{        
          console.log('hit');
          this.scrollbar.style.width = this.getScrollWidth()+'%';
      })
    ).subscribe();
  }
}
