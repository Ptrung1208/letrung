import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/header-layout/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/header-layout/pipes/UpperCasePipe.pipe';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderLayoutComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}

