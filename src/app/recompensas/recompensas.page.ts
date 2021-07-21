import { RecompensasService } from '../Services/recompensas.service';
import {ActualizarpuntosService} from '../Services/actualizarpuntos.service'
import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import {RegistroReciboService} from '../Services/registrorecibo.service';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';
import { Router } from "@angular/router"; 


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {
  cod_usuario:any;
  public datos:any;
  subscription: Subscription;


  constructor(
    public servicio:RecompensasService, 
    public servicioPuntos: MispuntosService,
    public servicioActualizarPuntos:ActualizarpuntosService,
    public registroRecibo: RegistroReciboService,
    public alertController: AlertController,
    private router:Router
    ) { 
      this.cod_usuario = Variableglobal.cod_usuario;

    }
  
  recompensas:any;
  misPuntos:any;
  
  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.servicio.obtenerrecompensas()
    .subscribe(
      (data)=>{this.recompensas = data;},
      (error)=>{console.log(error);}
    )

   
      //Esta variable llamada this.cod_usuario almacena el ID del usuario. 
      //Obtenemos los puntos del usuario logeado corrientemente
      this.cod_usuario = Variableglobal.cod_usuario;    
      this.servicioPuntos.obtenerMisPuntos(this.cod_usuario)
      .subscribe(
        (data)=>{this.misPuntos = data;},
        (error)=>{console.log(error);}
      )

      //Llamamos al procedimiento para actualizar los puntos
    this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos, this.cod_usuario, this.puntosAcumulados)
    .subscribe(
      (data)=>{this.recompensas = data;}, 
      (error)=>{console.log(error);}
    )   
    

    
  }

  async SuccesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Error',
      message: 'Usuario Registrado con Exito.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Usuario o Contraseña Incorrecta.',
      buttons: ['OK']
    });
    await alert.present();
  }

 //Temporalmente tanto el cod_punto y cod_usuarios le asignaremos el 1 hasta poder generarlo de forma dinámica

 puntosAcumulados:any;
 precioArticulo:any;
 articuloSeleccionado:any;
 cod_recompensas:any;

 cod_puntos:any;

 




 canjearPuntos(i) {
 
  //Almacena los puntos cumulados por el usuario
   this.puntosAcumulados= ((document.getElementById("puntos") as HTMLIonLabelElement).textContent);

  //Almacena el precio del articulo
  this.precioArticulo = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).textContent);

  //Valida cual de los artículos fue seleccionado o si un artículo fue seleccionado
  this.articuloSeleccionado = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).checked);

  //Capturamos el id del boton 
  let botonId = ((document.getElementById('boton'+i) as HTMLIonButtonElement).id);

  //Almacenamos el cod_puntos que está activo en ese momento.
  this.cod_puntos=((document.getElementById('cod_puntos') as HTMLIonLabelElement).textContent);


  //Seleccionamos el untimo caracter de los botones dinámicos.
  let ultimoCaracterBoton = botonId.charAt(botonId.length - 1);

//Cambiamos el tipo de datos a entero para poder hacer la resta
  let puntosInt= parseInt(this.puntosAcumulados);
  let precioInt =parseInt(this.precioArticulo);
 
//Obtenemos el ID del artículo para luego insertarlo en el recibo
  this.cod_recompensas = ((document.getElementById('cod_recompensas'+ i) as HTMLInputElement).textContent);


 

  console.log( this.cod_recompensas);
  console.log(this.cod_puntos);



  
  //Para registro de recibo

//Condición que valida si el botón seleccionado y el index son el mismo, además si el checkbox está seleccionado
  if (i == ultimoCaracterBoton && this.articuloSeleccionado==true){


    //Condición que valida si los puntos de la recompensa exceden los puntos que tenemos
      if(precioInt > puntosInt){
        alert('El artículo seleccionado excede la cantidad de puntos acumulados');
        return;

        }
        
    //Confirma antes de procesar el cambio de recompensa por puntos
    if (confirm('¿Está seguro de que desea cambiar sus puntos por este artículo?')) {
     
      let resultado = parseInt(this.puntosAcumulados) - parseInt(this.precioArticulo);
      console.log(resultado);

      let cod_usuarios, puntos_acumulados;
      cod_usuarios = this.cod_usuario;
      puntos_acumulados = resultado;

 
 
  //Creamos los datos del recibo e insertamos los datos en la tabla Recibos
  this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos,puntos_acumulados,cod_usuarios).subscribe((data)=>{
    this.datos=data;
    if(this.datos.respuesta=="OK"){
        alert('¡Enhorabuena!, su recompensa ha sido procesada');
        this.registroRecibo.IngresarRecibo(this.cod_usuario,this.cod_recompensas).subscribe((data)=>{
          this.datos = data; 
          console.log (this.datos);

          document.getElementById('puntos').innerHTML =resultado+"";
          
        },
        (error)=>{
          alert(error);
        });
        
    }
    else{
      console.log('No funcionó')
    }
    
    
  })

      
      } 

    }
    //Condición que devuelvel mensaje cuando no se marca ningún checkbox
    else{
      alert('Recuerde seleccionar la recompensa a cambiar.');
      return;
    }
    // this.router.navigate(['/login']); 
  
  }

}



