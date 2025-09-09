import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
  private apiKey = 'XDNGJ87ESJNF73LJW5524Z55K';

  constructor(private http: HttpClient) { }

  getWeather(cidade: string, dias: number | null): Observable<any> {
    let periodo = 'today'; 

    if (dias && dias > 1) {
      periodo = `next${dias - 1}days`;
    }

    const url = `${this.apiUrl}/${cidade}/${periodo}?unitGroup=metric&include=days&key=${this.apiKey}&contentType=json`;

    console.log("Chamando a API com a URL:", url);

    return this.http.get(url);
}
}