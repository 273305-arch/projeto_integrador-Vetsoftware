import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListadeexercicioModule } from './listadeexercicio/listadeexercicio-module';
import { Listadeexercicio2Module } from './listadeexercicio2/listadeexercicio2-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadeexercicioModule,
    Listadeexercicio2Module
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
