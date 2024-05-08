import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, count, debounceTime, distinct, filter, from, fromEvent, interval, of, retry, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit{
  agents?: Observable<string>;
  agentName: string='';
  order: string ='';
  simpleForm: FormGroup;
  @ViewChild('mybutton') mybutton?: ElementRef;
  //of Operator
  students$: Observable<string[]> = of(['kiran', 'gokul', 'raji' ]);
  studentName$: Observable<string> = of('kiran');
  student$: Observable<any> = of({
    name: 'kiran',
    age: 21
  });
  
  // from operator

  order$: Observable<string> = from(['Fashion', 'Electrnics', 'HouseHols'])

  constructor(){
    this.simpleForm = new FormGroup({
      name: new FormControl('')
    });

    this.simpleForm.get('name')?.valueChanges.pipe(
      filter((v)=> this.checkSearchCount(v)),
      distinct(),
      debounceTime(2000),
      // count(),
      retry(2)
    ).subscribe(data=>{
      console.log(data);
      
    })
  }

  checkSearchCount(value:any):boolean{
    return value.length > 2;
  }

  ngOnInit(): void {
    //custom Observable
    this.agents = new Observable(
      function(observer){
        try{
          observer.next('kiran');
          observer.next('Gokul')
        }catch(err){
          observer.error(err);
        }
      }
    );

    // Subscriber
    this.agents.subscribe(res=>{
      this.agentName = res;
    });

    this.students$?.subscribe(data=>{
      console.log(data);
      
    });
    this.studentName$?.subscribe(data=>{
      console.log(data);
    });

    this.student$?.subscribe(data=>{
      console.log(data);
    });
    
    this.order$.subscribe(data=>{
        this.order = data;
    });
  }

  rxjsEventObservable(){
    const btnObservable = fromEvent(this.mybutton?.nativeElement, 'click');
    btnObservable.subscribe(data =>{
      console.log(data);
    })
  }

  valueChange(){

  }

}
