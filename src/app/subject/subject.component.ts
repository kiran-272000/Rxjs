import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit{

  subject$?: Subject<number>;
  ngOnInit(): void {
    this.subject$ = new Subject();

    this.subject$.subscribe(data=>{
      console.log('Subscribe 1: ',data);
    });

    this.subject$.next(1);

    this.subject$.subscribe(data=>{
      console.log('Subscribe 2: ',data);
    });

    this.subject$.next(2);
  }
}

// ------------------------------------------------
// 
// On line 17 

// Since there is no emit it wont print anything to the console

// // on line 21

// We are sending the data to subject for the first time at that time there is only one subscriber so it will print "Subscribe 1: 1" 

// // on line 23

// Since subject wont buffer the data When initalizing the second subscribe there is no data so it wont print

// // on line 27

// now we are wmiting another value Now there are two subscriber. so it will print

// "Subscribr 1: 2"
// "Subscriber 2: 2"


// //Final output will be 

// Subscriber 1: 1
// Subscriber 1: 2
// Subscriber 2: 2
