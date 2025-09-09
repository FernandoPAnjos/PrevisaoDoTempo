import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheaterCards } from '../components/wheater-cards/wheater-cards';
import { SearchInput} from '../components/search-input/search-input';
import { HttpClientModule } from '@angular/common/http';
import { Weather } from './services/weather';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WheaterCards,  SearchInput, HttpClientModule, CommonModule  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('PrevisaoDoTempo');
  previsoes: any;

  constructor(private weather: Weather) {}

  handlePesquisa(dados: {cidade: string, dias: number | null}): void {
  console.log('DADOS RECEBIDOS NO PAI:', dados);

  if (!dados.cidade) {
      alert('Por favor, digite o nome de uma cidade.');
      return;
    }

    this.weather.getWeather(dados.cidade, dados.dias)
      .subscribe(
        (resposta) => {
          console.log('RESPOSTA DA API:', resposta);
          this.previsoes = resposta; 
        },
        (erro) => {
          console.error('ERRO AO CHAMAR A API:', erro);
          alert('Não foi possível encontrar a previsão para esta cidade. Verifique o nome e tente novamente.');
        }
      );
  }
}

