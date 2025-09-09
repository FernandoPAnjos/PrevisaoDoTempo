import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImage',
  standalone: true
})
export class WeatherImagePipe implements PipeTransform {

  transform(condition: string): string {
    const basePath = 'assets/images/';

    const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes('clear')) {
      return basePath + 'sun.png';
    } 
    else if (lowerCaseCondition.includes('cloudy') || lowerCaseCondition.includes('overcast')) {
      return basePath + 'partially-cloudy.png';
    } 
    else if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('showers')) {
      return basePath + 'rain.png';
    } 
    else if (lowerCaseCondition.includes('snow')) {
      return basePath + 'snow.png';
    } 
    else if (lowerCaseCondition.includes('thunder')) {
      return basePath + 'thunder.png';
    } 
    else {
      return basePath + 'default.png';
    }
  }

}
