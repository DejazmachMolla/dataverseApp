import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  backgroundColor;
     
  subscription: Subscription;
  loading : boolean = true;
  constructor(private router : Router) {

      router.events.subscribe((routerEvent : Event)=>{
        this.checkRouterEvent(routerEvent);
      })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkRouterEvent(routerEvent) {
    if(routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if(routerEvent instanceof NavigationEnd) {
      this.loading = false;
    }
  }
}
