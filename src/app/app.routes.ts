import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'rxjs',
        pathMatch: 'full'
    },
    {
        path: 'rxjs',
        loadComponent: ()=> import('./rxjs/rxjs.component').then((a)=> a.RxjsComponent)
    },
    {
        path: 'observable',
        loadComponent: ()=> import('./observable/observable.component').then((a)=> a.ObservableComponent)
    },
    {
        path: 'subject',
        loadComponent: ()=> import('./subject/subject.component').then((a)=> a.SubjectComponent)
    },
    {
        path: 'behavioursubject',
        loadComponent: ()=> import('./behaviour-subject/behaviour-subject.component').then((a)=> a.BehaviourSubjectComponent)
    },
    {
        path: 'topscrollbar',
        loadComponent: ( )=>import('./topscroll/topscroll.component').then((a)=> a.TopscrollComponent)
    }
];
