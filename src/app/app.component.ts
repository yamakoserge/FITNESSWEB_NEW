import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareModule } from './share/share.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitnessWeb';
}
