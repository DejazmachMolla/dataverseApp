import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessage } from 'angular-flash-message';
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
  constructor(
    private router : Router, 
    private flashMessageService : FlashMessage, private route : ActivatedRoute, 
    ){
    
  }

  ngOnInit() {
    
  }
}
