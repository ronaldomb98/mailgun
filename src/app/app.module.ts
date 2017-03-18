import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MailgunComponent } from './mailgun/mailgun.component';
import { Router } from './router';

@NgModule({
  declarations: [
    AppComponent,
    MailgunComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
