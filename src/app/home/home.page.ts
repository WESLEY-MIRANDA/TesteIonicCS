import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private alertaControlador:AlertController) {}

  async mensagem(){
    const alerta = await this.alertaControlador.create({
      header: "Teste",
      subHeader: "Etec",
      message: "TesteCodeSpace",
      buttons: ["OK"]
    });
    await alerta.present();
  }

  teste(){
    this.mensagem();
  }
}
