import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: false
})
export class BienvenidaPage {

  constructor(private navCtrl: NavController) {}

  // Navegar a la página de login
  irALogin() {
    this.navCtrl.navigateForward('/login');
  }

  // Navegar a la página de registro
  irARegistro() {
    this.navCtrl.navigateForward('/register'); // corregido de '/registro' a '/register'
  }

  // Navegar a la página de videollamada
  irAVideoCall() {
    this.navCtrl.navigateForward('/video-call');
  }
}
