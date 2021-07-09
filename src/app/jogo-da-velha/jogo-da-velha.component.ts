import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void { //ao iniciar vai sempre executar a função inicializar
    this.jogoDaVelhaService.inicializar();
  }

  get mostrarInicio(): boolean { 
    return this.jogoDaVelhaService.mostrarInicio;
  }

  get mostrarTabuleiro(): boolean {
    return this.jogoDaVelhaService.mostrarTabuleiro;
  }

  get mostrarFim(): boolean {
    return this.jogoDaVelhaService.mostrarFim;
  }

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo(); //ligado no service
  }

  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

}
