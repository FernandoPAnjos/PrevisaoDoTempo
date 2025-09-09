import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheaterCards } from '../components/wheater-cards/wheater-cards';
import { SelectValueBindingExample } from '../components/search-input/search-input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WheaterCards,  SelectValueBindingExample,  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrevisaoDoTempo');
}
