import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

// ngOnChange --> ngOnInit --> ngDoCheck --> ngAfterContentInit --> ngAfterViewInit --> ngAfterViewCheck

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{

  count: number = 0;
  fullName:string='';

  interval: any;

  ngOnInit(): void{
    console.log('Interval component OnInit');
  }

  ngOnChanges(changes: SimpleChanges):void{
    console.log('Interval component OnChange');
  }

  ngDoCheck(): void {
    console.log('Interval component DoCheck');
  }

  ngAfterContentInit():void{
    console.log('Interval component AfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('Interval component AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Interval component AfterViewChecked');
  }

  ngOnDestroy():void{
    console.log('Interval component OnDestroy');
    this.stopCount();
  }

  onChange(){
    console.log('onChange called');
  }

  startCount(){
    this.interval = setInterval(()=>{
      //on documentation, ms on the 2nd parameter refers to milliseconds
      this.count++;
    }, 1000);
  }

  stopCount(){
    clearInterval(this.interval);
  }

}
