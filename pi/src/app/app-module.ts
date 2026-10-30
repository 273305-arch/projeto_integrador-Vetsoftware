import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { PainelCliente } from './pages/painel-cliente/painel-cliente';
import { PainelVet } from './pages/painel-vet/painel-vet';
import { CadastrarPaciente } from './pages/cadastrar-paciente/cadastrar-paciente';

@NgModule({
  declarations: [App, Layout, Login, PainelCliente, PainelVet, CadastrarPaciente],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
