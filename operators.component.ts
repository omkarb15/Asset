import { Component, OnInit } from '@angular/core';
import { buffer, catchError, delay, filter, find, findIndex, from, interval, map, merge, Observable, of, pluck, scan, takeWhile, tap, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent implements OnInit {
a: number= 5
b: number=1
num: number=10
age: number=18


ngOnInit(): void {
  const obs1= of(1,2,3,4)
  //obs1.subscribe(value=> console.log(value))

  const obs2= from([10,20,30,40,50,60,70])
  obs2.subscribe(value=> console.log(value))
  const obs3 = interval(1000)
  //obs3.subscribe(value=> console.log(value))
  
  //const obs4 = timer(2000,1000)
  //obs4.subscribe(value=> console.log(value))
    

  //map()
 obs1.pipe(map(value=>value*2)).subscribe(result=>console.log(result))

  //pluck()
  const users=  of(
    {id:1, name:'omkar'},
    {id:2, name: 'Bob'},
    {id:3, name: 'mark'}

  )
  users.pipe(pluck('name')).subscribe(name=> console.log(name))
//scan()
  obs1.pipe(scan((acc ,value)=> acc+value ,0)).subscribe(value=> console.log(value))
  //buffer()
 // obs3.pipe(buffer(interval(3000))).subscribe(result=> console.log(result))
 //filter()
 obs2.pipe(filter(x=> x >50)).subscribe(console.log)
 //merge()
 const combined= merge(obs1,obs2)
 combined.subscribe(console.log)
 //elvis operator(??)
 let username=null
 console.log(username?? 'guest')
 //find first  greater thann 50
 obs2.pipe(find(num=> num>50)).subscribe(result=> console.log(result))
 //find first number's index which is greater than 50
 obs2.pipe(findIndex(num=> num>50)).subscribe(result=> console.log(result))

 obs1.pipe(takeWhile(num=> num>4)).subscribe(result=> console.log(result))
 /*Creation Operators
 Transformation Operators
 Filtering Operators
 Combination Operators
 Error Handling Operators
 Multicasting Operators
 Utility Operators
 Mathematical Operators*/

 obs1.pipe(tap(value=> console.log(`before:${value}`))).subscribe(value=> console.log(`after:${value}`))
 of('Hello').pipe(delay(2000)).subscribe(console.log);
 of(42).pipe(
  timeout(1000), // if no value within 1 second, it throws an errord
  catchError(err => of('Timeout Error!'))
).subscribe(console.log)


  const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete(); 
  });
     observable.subscribe({
      next:value => console.log(value),
    complete:()=> console.log("new observable successful")  
     })


   

  
}

x:boolean= true
y:boolean=false

getPower(){
  return this.a** this.b
}
bitwiseAnd(){
  return this.a& this.b
}
bitwiseOr(){
  return this.a|this.b
}
bitwiseXor(){
  return this.a^this.b
}

bitwiseNot(){
  return ~this.a
}
leftShift(){
return this.a<<this.b
}
rightShift(){
  return this.a>> this.b
}
updatenum(){
  return this.num+=this.a

}
updatenum1(){
  return this.num-=this.a
  
}
updatenum3(){
  return this.num+=this.a

}
ternaryOperTOR(){
  return (this.age>= 18)? 'Adult': 'minor'
}


}
