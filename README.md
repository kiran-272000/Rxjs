RxJs

1. Reactive programming is a new way of building apps
    - our app will react to changes and handle data streams rather than we write each handler

2. Rxjs is a libarary which helps us in making asunc calls and implement clllback machanism easily

3. Rxjs consist of three thingd
    - Observable
    - Satelite Data Types- Observer, Schedulers, Subjects
    - Operators
        - Array methids
            - map
            - filter
            - reduce

4. Observable
    - Its a continuos data stream
    - Emits data over a period of time
    needs to be subscribed else it wont do anything on its own
    - has three methids 
        - next
        - complete
        - error
    - angular uses observable extensively on routing, forms and other features
    

    - Subscriber
        - Listen to Observable for data changes

5. Rxjs Operators
    - It is nothing but a pure function.
        - It will always return same result for same input
    - Operators
        - creation
            - of -- create observablr from [string | array | object]
            - from -- create observable from [ array | arrray like]
            - fromEvent -- observable out of event
            
            - Interval -- emits sequetial number every specified interval

            - debounce time -- wait till sepecified time before subscribe

            - take -- take only specified value

            - takeWhile -- will count only if condition satisfies

            - takelast(2)  -- take last two fromthe array

            - fist() -- takes first element from the array

            - last() -- takes the last element from the arrray

            - elementAt -- takes the element from the index

5. Maps
    - Switch Map -- when source observable emits new value then inner observable will switch to the new value and oldvalue will get cancelled
        - Eg: this.searchTeam.get('name').valueChanges.pipe(
            switchMap((searchTearm)=>this.sharedService.search(searchTerm)).subscribe(res);
        )

        - here value change observable is source observable
        - observable inside switch map is inner observable

    - MergeMap -- Merges all the inner observable and return whichever completed first will get those value

    - concatMap -- merges all and excute in the order.
    only after getting the response of first emit will hit 
    second inner obsrvable

    - ExhaustMap -- removes all the new inner observable before the old observable gets completed.

6. Join
    - combaineLatest -- 
        - each observabe should emit atleast once
        - it will take only latest value
        - if any observable throws error combine latest will trow an error.

    - fork join
        - accepts an array of observables and emits only after all the observable completed and emits as an array of same order
        - 

7. subject
    - Subject is a special type of Observable that allows values to be multicasted to many Observers.
    - While plain Observables are unicast.
    - has no initial value and 
    - nad does not buffer the value once its emitted
    - EventEmitters in angular useses this subject.
    - Syntax: new subject()

8. Behaviour subject
    - It is a type of subject
    - It will the have the inital state
    - and buffers the lastest value emitted,
    - Syntax: new behaviourSubject(initialValue);

9. Replay subject
    - Type of subject
    - it accpets two parameters: buffer size and buffer time
    - buffer size states the number of latest value to be stored
    - buffer time, states the time till when it should store those data in buffer
    - Syntax: new replaySubject(bufferSize, bufferTime: optional);

10. AsyncSubject
    - type of subject
    - it will emit values only when it is completed
    - Syntax: new AsyncSubject()

11. void subject
    - syntax: new Subject<void>();