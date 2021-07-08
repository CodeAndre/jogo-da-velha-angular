import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {


  constructor() { }

  private readonly TAB_TAM: number = 3; //Aqui nada será modificado
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 3;

  private tabuleiro: any;   // Atributos de controle do jogo
  private numeroMov: number;
  private vitoria: any;

  private _jogador: number;  //atributos para mostrar o jogo na view
  private _mostrarInicio: boolean;
  private _mostrarTabuleiro: boolean;
  private _mostrarFim: boolean;


  incializar(): void {
    this._mostrarInicio = true;
    this._mostrarTabuleiro = false;
    this._mostrarFim = false;
    this.numeroMov = 0;
    this._jogador = this.X;
    this.vitoria = false ;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro() : void {
    this.tabuleiro = [this.TAB_TAM];
    for (let i = 0; i< this.TAB_TAM; i++) { //para cada linha, ponha vazio
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO] //cada linha (9) vai ter vazio
    }
  }

  //Tela de inicio ser exebida
  get mostrarInicio(): boolean {
    return this.mostrarInicio
  }

  //Tabuleiro deve ser exibido

  get mostrarTabuleiro(): boolean {
    return this.mostrarTabuleiro
  }

  // Retornar se a tela de fim de jogo deve ser exibida

  get mostrarFim(): boolean {
    return this._mostrarFim
  }

  //Retornar o número do jogador a jogar

  get jogador(): number {
    return this._jogador
  }

  //Exibir o tabuleiro 

  iniciarJogo(): void { //quando cliar o botão vai executar tais funções
    this._mostrarInicio = false;
    this._mostrarTabuleiro = true;
  }


}