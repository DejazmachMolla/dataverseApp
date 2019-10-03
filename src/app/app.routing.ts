import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { DatasetListComponent } from './components/dataset/dataset-list/dataset-list.component';
import { SingleDatasetComponent } from './components/dataset/single-dataset/single-dataset.component';
const appRoutes: Routes = [
    {
      path: 'datasets',
      component: DatasetListComponent
    },
    {
      path: 'datasets/:id',
      component: SingleDatasetComponent
    },
    {
      path: '',
      redirectTo: '/datasets', pathMatch: 'full'
    }
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
  export class AppRoutingModule { }