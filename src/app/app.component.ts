import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";

  userData = {
    email: "joaquim@email.com",
    telefone: '88988888888',
    rua: 'Rua Seu Antônio'
  };

  title = 'curso-angular';
}
