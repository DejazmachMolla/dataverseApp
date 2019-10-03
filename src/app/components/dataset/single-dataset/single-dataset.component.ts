import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-dataset',
  templateUrl: './single-dataset.component.html',
  styleUrls: ['./single-dataset.component.css']
})
export class SingleDatasetComponent implements OnInit {
  @Input() dataset : any;
  constructor() { }

  ngOnInit() {
  }

}
