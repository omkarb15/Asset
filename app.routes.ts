import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFromComponent } from './components/template-from/template-from.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetComponent } from './Api/get/get.component';
import { PostComponent } from './Api/post/post.component';
import { PutComponent } from './Api/put/put.component';
import { DeleteComponent } from './Api/delete/delete.component';
import { CoustomerComponent } from './Api/coustomer/coustomer.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { OperatorsComponent } from './components/operators/operators.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch:'full'

    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'ng-class',
        component:NgclassComponent
    },
    {
        path:'ng-style',
        component:NgstyleComponent
    },
    {
        path:'ng-if',
    
        component:NgIfComponent
    },
    {
        path:'ng-for',
        component:NgForComponent
    },
    {
        path:'signal',
        component:SignalComponent
    },
    {
        path:'LinkedSignal',
        component:LinkedSignalComponent
    },
    {
        path:'TempplateForm',
        component:TemplateFromComponent
    },
    {
        path:'reactiveForm',
        component:ReactiveFormComponent
    },
    {
        path:'get-api',
        component:GetComponent
    },
    {
        path:'post-api',
        component:PostComponent
    },
    {
        path:'put-api',
        component:PutComponent
    },
    {
        path:'delete-api',
        component:DeleteComponent
    },
    {
        path:'customer',
        component:CoustomerComponent
    },
    {
        path:'LifecycleEvents',
        component:LifecycleComponent
    
    },
    {
        path:'Ng-for',
        component:NgForComponent
    },
    {
        path:'Operators',
        component:OperatorsComponent
    }
];
