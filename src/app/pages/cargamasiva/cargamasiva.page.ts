import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.page.html',
  styleUrls: ['./cargamasiva.page.scss'],
})
export class CargamasivaPage implements OnInit {

  constructor(private fileChooser: FileChooser) { }

  ngOnInit() {
  }

  selectFile(){
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

}
