import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CrudService } from './service/crud.service';
import { UserformComponent } from './component/userform/userform.component';
import { UsertableComponent } from './component/usertable/usertable.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserformComponent,
    UsertableComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
