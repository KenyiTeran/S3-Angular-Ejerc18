import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  // Consumiendo servicio
  // Creando una instancia de userServices
  constructor(private userServices:UserservicesService){}

  //Ejecutar el método GetUserAll del servicio al cargar el componente
  listado = new Array();
  ngOnInit(){
    this.userServices.getUserAll().subscribe({
      next: (userAll:Users[]) => this.listado = userAll,
      error: (e) => console.log(e),
      complete: () => console.info('La API devolvió todos los registros')
    });
  }

}
