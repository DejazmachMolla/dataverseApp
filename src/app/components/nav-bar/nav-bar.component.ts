import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  subscription: Subscription;
  url:string;
  isPageSelected = true;
  constructor(){
    
  }

  ngOnInit() {
    
  }
}
