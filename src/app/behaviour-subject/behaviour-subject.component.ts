import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  standalone: true,
  imports: [],
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.scss'
})
export class BehaviourSubjectComponent implements OnInit {

  behaviourSubject?: BehaviorSubject<number>;
  ngOnInit(): void {
    this.behaviourSubject = new BehaviorSubject(0);

    this.behaviourSubject.subscribe(data=>{
      console.log('Subscribe 1: ',data);
    });

    this.behaviourSubject.next(1);

    this.behaviourSubject.subscribe(data=>{
      console.log('Subscribe 2: ',data);
    });

    this.behaviourSubject.next(2);
  }
}


// ----------------------------------------------------------------

// it has the inital value so it prints
// 'Subscribe 1: 0'


// now we are sending 1 as value at line 21 at that time only one subescriber was there so it prints 
// 'Subscribe 1: 1'

// now on line 23 since it is behaviour subject it buffers the latest value in state so it will print
// 'Subscribe 2: 1'

// now on line 27 we are emitting  next value so it prints 
// 'Subscribe 1: 2'
// 'Subscribe 2: 2'
