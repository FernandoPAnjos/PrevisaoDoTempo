import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchInput } from '../components/search-input/search-input';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchInput, MatGridListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrevisaoDoTempo');
}
