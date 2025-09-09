import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatAutocompleteModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css'
})

export class SearchInput {

  cidade: string = '';
  diasSelecionados: number | null = null;
  
  @Output() pesquisar = new EventEmitter<{cidade: string, dias: number | null}>();

  constructor() { }

  onPesquisarClick(): void {
    console.log('Dados capturados:', this.cidade, this.diasSelecionados);

    this.pesquisar.emit({ cidade: this.cidade, dias: this.diasSelecionados });
  }
}

