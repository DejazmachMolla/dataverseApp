import { SummaryPipe } from './pipes/summary.pipe';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule }                 from '@angular/core';
import { AppComponent }             from './app.component';
import { NavBarComponent }          from './components/nav-bar/nav-bar.component';
import { AppRoutingModule }         from './app.routing';
import { HttpModule } from '@angular/http';
import { FlashMessageModule} from 'angular-flash-message';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatSidenavModule, MatProgressSpinnerModule, MatListModule } from '@angular/material';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ScrollEventModule } from 'ngx-scroll-event';
import { ColorPickerModule } from 'ngx-color-picker';
import { DatasetListComponent } from './components/dataset/dataset-list/dataset-list.component';
import { SingleDatasetComponent } from './components/dataset/single-dataset/single-dataset.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { DatasetService } from './services/dataset/dataset.service';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DatasetListComponent,
    SingleDatasetComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FlashMessageModule,
    AngularFontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    ImageCropperModule,
    MatSidenavModule,
    ScrollEventModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MalihuScrollbarModule.forRoot(),
    NgbModule,
    ColorPickerModule
  ],
  providers: [
    JwtHelperService,
    DatasetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 