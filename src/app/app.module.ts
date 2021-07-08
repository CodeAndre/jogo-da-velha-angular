import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { JogoDaVelhaService } from './jogo-da-velha/shared/jogo-da-velha.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogoDaVelhaModule
  ],
  providers: [JogoDaVelhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
