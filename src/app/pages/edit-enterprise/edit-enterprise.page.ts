import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.page.html',
  styleUrls: ['./edit-enterprise.page.scss'],
})
export class EditEnterprisePage implements OnInit {

  constructor(private services: ProductoServiceService)  { }

  enterprise = {
    email : '',
    name: '',
    password: '' 
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.enterprise.email = localStorage.getItem('correo');
    this.enterprise.email = this.enterprise.email.substr(1,this.enterprise.email.length-2)
    
  }

  updateData(){

  }

}
