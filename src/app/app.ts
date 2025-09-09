import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchInput } from '../components/search-input/search-input';
import { WheaterCards } from '../components/wheater-cards/wheater-cards';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchInput, WheaterCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrevisaoDoTempo');
}
