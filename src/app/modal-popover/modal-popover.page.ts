import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
  

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
      providers: [DatePipe]

})

export class ModalPopoverPage implements OnInit {
  
  @Input() nombreproducto: string;
  @Input() usuario: string;
  @Input() cod_bono: number;
  @Input() fechaCompleta: string;
  
  myDate: String = new Date().toISOString();
  correo_usuario:any;
  cedula_usuario: any;
  telefono_Usuario:any;
  cod_usuarioreporte:any;

  constructor(
    private modalCtr: ModalController,
  ) {
    
   }

  ngOnInit() { 
    
  }


  async close() {
    await this.modalCtr.dismiss();
  }

}