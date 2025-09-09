import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TraduzirCondicaoPipe } from '../../app/pipes/traduzir-condicao-pipe';
import { WeatherImagePipe } from '../../app/pipes/weather-image-pipe';


@Component({
  selector: 'app-wheater-cards',
  imports: [MatCardModule, MatButtonModule, DatePipe, CommonModule, TraduzirCondicaoPipe, WeatherImagePipe],
  templateUrl: './wheater-cards.html',
  styleUrl: './wheater-cards.css'
})
export class WheaterCards {
  @Input() previsoesInput!: any;

  constructor() { }
}
