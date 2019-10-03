import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { DatasetService } from '../../../services/dataset/dataset.service';
import { mainRouteAnimation} from '../../../animations';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css'],
  animations: [
    mainRouteAnimation
  ]
})
export class DatasetListComponent implements OnInit {
  @HostBinding('@mainRouteAnimation') routeAnimation = true;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  data : any;
  perPage : number = 10;
  pageIndex : number;
  orderBy : string;
  ascDes : string;
  searchTextVal;
  sort;  
  order;
  loading : boolean = false;
  fetchError : boolean = false;
  pageSizes : number[] = [10, 20, 50, 100];
  start = 0;
  length;
  orderBys = [ {id:0, label:'Name', value: "name"},
          {id:1, label:'Date', value: 'date'}
        ];
  ascDess = [
    {id:0, label:'Ascending', value:'asc'},
    {id:1, label:'Descending', value:'desc'}
  ];
  
  constructor(private datasetService : DatasetService) {}

  ngOnInit() {
    this.sort = 'name';
    this.order = 'asc';
    this.getDatasets();
  }

  getDatasets() {
    this.loading = true;
    this.data = null;
    this.datasetService.getDatasets(this.searchTextVal, this.sort, this.order, this.start, this.perPage).subscribe(response =>{
      
      this.data = response.data;
      this.length = response.data.total_count;
      this.checkPageIndex();
      this.fetchError = false;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.fetchError = true;
    }, () => {
      console.log('fetch completed');
      this.loading = false;

    })
  }
  onPage(event) {
    this.start = event.pageIndex;
    this.perPage = event.pageSize;
    this.getDatasets();
  }

  checkPageIndex() {
    if((this.start +1)*this.perPage >=this.length + this.perPage ) {
      this.start = 0;
    }
  }
}
