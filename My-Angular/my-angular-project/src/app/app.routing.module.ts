import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LaptopAddComponent } from './laptop-add/laptop-add.component';
import { LaptopEditComponent } from './laptop-edit/laptop-edit.component';
import { LaptopDeleteComponent } from './laptop-delete/laptop-delete.component';
const routes: Routes = [  
    { path: '', redirectTo: '/laptops', pathMatch: 'full' },
    { path: 'laptops', component: LaptopListComponent },
    { path: 'add', component: LaptopAddComponent },
    { path: 'laptops/edit/:id', component: LaptopEditComponent },
    
    { path: 'delete/:id', component: LaptopDeleteComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],//routes
    exports: [RouterModule]
    })
   export class AppRoutingModule { }
   export const routingComponent =[]