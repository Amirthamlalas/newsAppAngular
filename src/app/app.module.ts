import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { SearchNewsComponent } from './search-news/search-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myroute:Routes=[

  {
    path:"",
    component:ViewNewsComponent
  },
  {
    path:"add",
    component:AddNewsComponent
  },
  {
    path:"search",
    component:SearchNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    AddNewsComponent,
    SearchNewsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
