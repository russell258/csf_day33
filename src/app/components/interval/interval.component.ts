import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// ngOnChange --> ngOnInit --> ngDoCheck --> ngAfterContentInit --> ngAfterViewInit

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit{

  count: number = 0;

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
