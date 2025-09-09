import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wheater-cards',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './wheater-cards.html',
  styleUrl: './wheater-cards.css'
})
export class WheaterCards {

}
