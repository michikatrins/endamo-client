import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.page.html',
  styleUrls: ['./edit-enterprise.page.scss'],
})
export class EditEnterprisePage implements OnInit {

  enterprise = {
    email : '',
    name: '',
    password: '' 
  }

  public error: boolean = false;

  constructor(public empresaService: EmpresaService,
              public toastController: ToastController)  { }
  
  ngOnInit() {
    this.readData();
  }

   readData(){
    this.enterprise.email = localStorage.getItem('correo');
    if(this.enterprise.email != null){
      this.enterprise.email = this.enterprise.email.substr(1,this.enterprise.email.length-2)
      this.empresaService.getData(this.enterprise.email).subscribe(
        res => {
          this.enterprise.name = res[0].nombre;
          this.enterprise.password = res[0].password;
        }
      )
    } 
  }

  updateData(){
    this.empresaService.updateData(this.enterprise).subscribe(
      res => {
        this.presentToast("Perfil modificado de forma exitosa.");
      },
      err => {
        this.presentToast("El perfil no pudo modificarse, intente nuevamente.");
      }
    )
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'Warning',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

}
