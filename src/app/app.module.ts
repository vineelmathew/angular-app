import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SecondComponent } from './second/second.component';
import {yearpipe} from './pipes/yearpipe';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SecondComponent,
    yearpipe,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
