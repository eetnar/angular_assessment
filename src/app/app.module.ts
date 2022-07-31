import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { InputComponent } from './input/input.component';
import { ThearrayComponent } from './thearray/thearray.component';
import { ModalComponent } from './modal/modal.component';
import { ParseflickrComponent } from './parseflickr/parseflickr.component';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, JsonpInterceptor, JsonpClientBackend } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    InputComponent,
    ThearrayComponent,
    ModalComponent,
    ParseflickrComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // HttpClient,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    // JsonpInterceptor,
    // JsonpClientBackend
    // HttpClient,
    // HttpClientJsonpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
