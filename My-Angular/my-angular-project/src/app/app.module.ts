import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopAddComponent } from './laptop-add/laptop-add.component';
import { LaptopEditComponent } from './laptop-edit/laptop-edit.component';
// import { LaptopDetailComponent } from './laptop-detail/laptop-detail.component';
import { LaptopDeleteComponent } from './laptop-delete/laptop-delete.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
@NgModule({
    declarations: [
      AppComponent,
    LaptopListComponent,
    LaptopAddComponent,
    LaptopEditComponent,
   
    LaptopDeleteComponent
],
imports: [
  BrowserModule,
  AppRoutingModule,
//   HttpClientModule,
  FormsModule,
//   MatDividerModule, 
  ReactiveFormsModule,
//   RouterModule,
//   BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }