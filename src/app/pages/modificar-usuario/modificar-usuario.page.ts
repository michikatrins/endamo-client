import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})
export class ModificarUsuarioPage implements OnInit {

  avatars = [
    {
      img: '/assets/avatars/av-1.png',
      seleccionado: true
    },
    {
      img: '/assets/avatars/av-2.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-3.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-4.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-5.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-6.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-7.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  }

  User = {
    email: '',
    password: '',
    avatar: '/assets/avatars/av-2.png' 
  }

  constructor(private service: ServiceService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.getData();
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.User.avatar = avatar.img;
  }

  async getData(){
    this.User.email = localStorage.getItem('correo');
    this.User.email = this.User.email.substr(1,this.User.email.length-2);
    const data = await this.service.getDataUser(this.User.email)
    this.User.password = (<any>data[0]).password;
    this.User.avatar = (<any>data[0]).avatar;
  }

  async modificarUsuario(fModificar){
    console.log("modificar :D");
    const res = await this.service.modificarPerfil(this.User);

    if(res["success"])
      this.presentToast("Perfil modificado de forma exitosa.");
    else 
      this.presentToast("El perfil no pudo modificarse, intente nuevamente.");
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
