import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatasetService {
  constructor(private httpClient: HttpClient) {}
  
  getDatasets(searchText = 'Software', sort = 'name', order = 'asc', start = 0, per_page = 10) : Observable<any> {
    return this.httpClient.get<any>('https://dataverse.harvard.edu/api/search?q='+searchText+'&type=dataset&show_entity_ids=true&sort='+sort+'&order='+order+'&start='+start+'&per_page='+per_page);
  }
}
