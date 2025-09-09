import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduzirCondicao',
  standalone: true
})
export class TraduzirCondicaoPipe implements PipeTransform {

  private traducoes: { [key: string]: string } = {
    'Clear': 'Ensolarado',
    'Partly Cloudy': 'Parcialmente Nublado',
    'Overcast': 'Nublado',
    'Cloudy': 'Nublado',
    'Partially cloudy': 'Parcialmente Nublado',
    'Rain': 'Chuva',
    'Showers': 'Pancadas de Chuva',
    'Rain, Partially cloudy': 'Chuva, Parcialmente Nublado',
    'Rain, Overcast': 'Chuva, Nublado',
  };

  transform(value: string): string {
    return this.traducoes[value] || value;
  }

}
