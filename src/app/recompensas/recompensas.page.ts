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
  // cod_usuario:any;
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
      // this.cod_usuario = Variableglobal.cod_usuario;

    }
  
  recompensas:any;
  misPuntos:any;
  
  ngOnInit() {

    this.servicio.obtenerrecompensas().subscribe((data)=>{
      this.recompensas = data;},
      (error)=>{console.log(error);}
    )
    // this.cod_usuario = Variableglobal.cod_usuario;
 

   
      //Esta variable llamada this.cod_usuario almacena el ID del usuario. 
      //Obtenemos los puntos del usuario logeado corrientemente
      // this.cod_usuario = Variableglobal.cod_usuario;    


      //comentado temporalmente
      // this.servicioPuntos.obtenerMisPuntos(this.cod_usuario)
      // .subscribe(
      //   (data)=>{this.misPuntos = data;},
      //   (error)=>{console.log(error);}
      // )

      //Llamamos al procedimiento para actualizar los puntos
    // this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos, this.cod_usuario, this.puntosAcumulados)
    // .subscribe(
    //   (data)=>{this.recompensas = data;}, 
    //   (error)=>{console.log(error);}
    // )   
    

    
  }

  //obtener recompensas

  CargarRecompensas(){
    this.servicio.obtenerrecompensas().subscribe((data)=>{
      this.recompensas = data;},
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
 cod_puntos:any;

 //Para seleccionar
 cod_recompensas:any;
 nombre_recompensa:any;
 boton:any;
 puntos:any;
 imagenUrl:any;
 descripcion_recompensa:any;

 
 //datos para llenar
 imagenUrlReceptor:any;
 cod_recompensaReceptor:any;
 puntosReceptor:any;
 nombre_recompensaReceptor:any;
 descripcion_recompensaReceptor:any;


 //para servicio




 //Oculta la sección de editar y actualizar recompensas
    ocultarSeccion(){
      this.vaciarElementos();
      (document.getElementById('clases') as HTMLDivElement).className = "ocultar";
      (document.getElementById('container') as HTMLDivElement).className = "mostrar";
      
    }

    //Muestra la sección  de editar y actualizar recompensas
    mostrarSeccion(){
      (document.getElementById('clases') as HTMLDivElement).className = "mostrar";
      (document.getElementById('container') as HTMLDivElement).className = "ocultar";
    }

    //Enfoca la sección de editar y actualizar recompensas
    Enfocar() {
      document.getElementById("descripcion").focus();
    }

    //Deja en "" los elementos a eliminar / modificar
    vaciarElementos(){
      this.puntosReceptor = (document.getElementById('puntosReceptor')as HTMLIonInputElement).value = "";
      this.imagenUrlReceptor = (document.getElementById('imagenUrlReceptor')as HTMLIonInputElement).value = "";
      this.descripcion_recompensaReceptor = (document.getElementById('descripcion')as HTMLIonInputElement).value = "";
      this.cod_recompensaReceptor = (document.getElementById('cod_recompensaReceptor')as HTMLIonInputElement).value = "";
      this.nombre_recompensaReceptor = (document.getElementById('nombre_recompensaReceptor')as HTMLIonInputElement).value = "";

    }

      ActualizarRecompensa(){
        this.puntosReceptor = (document.getElementById('puntosReceptor')as HTMLTextAreaElement).value;
        this.imagenUrlReceptor = (document.getElementById('imagenUrlReceptor')as HTMLTextAreaElement).value;
        this.descripcion_recompensaReceptor = (document.getElementById('descripcion')as HTMLTextAreaElement).value;
        this.cod_recompensaReceptor = (document.getElementById('cod_recompensaReceptor')as HTMLIonLabelElement).textContent;
        this.nombre_recompensaReceptor = (document.getElementById('nombre_recompensaReceptor')as HTMLTextAreaElement).value;
         
        // console.log( this.cod_recompensaReceptor);
        //   console.log( this.nombre_recompensaReceptor);
        //   console.log(this.puntosReceptor);
        //   console.log(this.imagenUrlReceptor);
        //   console.log(this.descripcion_recompensaReceptor );


       let resultado=   window.confirm('Estas seguro de que desea modificacer la recompensa No. ?' + this.cod_recompensaReceptor );
            if (resultado === true) {
              this.servicio.actualizarRecompensas( this.cod_recompensaReceptor,   this.puntosReceptor,  this.nombre_recompensaReceptor,  this.imagenUrlReceptor,  this.descripcion_recompensaReceptor)
              .subscribe(
                (data)=>{this.recompensas = data;},
                (error)=>{console.log(error);}
              )
              alert('Actualización Exitosa');
              document.getElementById("cargar").click();
              this.ocultarSeccion();
                
            } else { 
                window.alert('Intenelo más tarde');
            }
      }

    llenarDatos(i){
      //Mostramos La sección para editar o eliminar
      this.mostrarSeccion();
     
      //Dirigimos la pantalla a esa zona
      this.Enfocar();
      (document.getElementById('container') as HTMLDivElement).className = "ocultar";
      
      //this.boton = (document.getElementById('editarEliminar' + i) as HTMLIonButtonElement).id;


      //Datos de las recompentas
      this.puntos=((document.getElementById('puntosArticulo' + i) as HTMLIonLabelElement).textContent);
   
      this.precioArticulo = ((document.getElementById('puntosArticulo' + i) as HTMLIonLabelElement).textContent);
      this.imagenUrl=((document.getElementById('imagen' +i) as HTMLImageElement).textContent);
      this.cod_recompensas = ((document.getElementById('cod_recompensas' +i) as HTMLIonLabelElement).textContent);
      this.nombre_recompensa = ((document.getElementById('nombre_recompensa' +i) as HTMLIonLabelElement).textContent);
      this.descripcion_recompensa = ((document.getElementById('descripcion' +i) as HTMLIonLabelElement).textContent);

      console.log(this.descripcion_recompensa);
 

      this.puntosReceptor = (document.getElementById('puntosReceptor')as HTMLIonInputElement).value = this.puntos;
      this.imagenUrlReceptor = (document.getElementById('imagenUrlReceptor')as HTMLIonInputElement).value = this.imagenUrl;
      this.descripcion_recompensaReceptor = (document.getElementById('descripcion')as HTMLIonInputElement).value = this.descripcion_recompensa;
      this.cod_recompensaReceptor = (document.getElementById('cod_recompensaReceptor')as HTMLIonLabelElement).textContent = this.cod_recompensas;
      this.nombre_recompensaReceptor = (document.getElementById('nombre_recompensaReceptor')as HTMLIonInputElement).value = this.nombre_recompensa;

      this.nombre_recompensaReceptor = (document.getElementById('nombre_recompensaReceptor') as HTMLIonInputElement).textContent =  this.nombre_recompensa;
      
    }

    public restrictNumeric(e) {
      let input;
      if (e.metaKey || e.ctrlKey) {
  
        return true;
      }
      if (e.which === 32) {
       return false;
      }
      if (e.which === 0) {
       return true;
      }
      if (e.which < 33) {
        return true;
      }
      input = String.fromCharCode(e.which);
      return !!/[\d\s]/.test(input);
    
     }


 canjearPuntos(i) {
 
//   //Almacena los puntos cumulados por el usuario
//    this.puntosAcumulados= ((document.getElementById("puntos") as HTMLIonLabelElement).textContent);

//   //Almacena el precio del articulo
//   this.precioArticulo = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).textContent);

//   //Valida cual de los artículos fue seleccionado o si un artículo fue seleccionado
//   this.articuloSeleccionado = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).checked);

//   //Capturamos el id del boton 
//   let botonId = ((document.getElementById('boton'+i) as HTMLIonButtonElement).id);

//   //Almacenamos el cod_puntos que está activo en ese momento.
//   this.cod_puntos=((document.getElementById('cod_puntos') as HTMLIonLabelElement).textContent);


//   //Seleccionamos el untimo caracter de los botones dinámicos.
//   let ultimoCaracterBoton = botonId.charAt(botonId.length - 1);

// //Cambiamos el tipo de datos a entero para poder hacer la resta
//   let puntosInt= parseInt(this.puntosAcumulados);
//   let precioInt =parseInt(this.precioArticulo);
 
// //Obtenemos el ID del artículo para luego insertarlo en el recibo
//   this.cod_recompensas = ((document.getElementById('cod_recompensas'+ i) as HTMLInputElement).textContent);


 

//   console.log( this.cod_recompensas);
//   console.log(this.cod_puntos);



  
//   //Para registro de recibo

// //Condición que valida si el botón seleccionado y el index son el mismo, además si el checkbox está seleccionado
//   if (i == ultimoCaracterBoton && this.articuloSeleccionado==true){


//     //Condición que valida si los puntos de la recompensa exceden los puntos que tenemos
//       if(precioInt > puntosInt){
//         alert('El artículo seleccionado excede la cantidad de puntos acumulados');
//         return;

//         }
        
//     //Confirma antes de procesar el cambio de recompensa por puntos
//     if (confirm('¿Está seguro de que desea cambiar sus puntos por este artículo?')) {
     
//       let resultado = parseInt(this.puntosAcumulados) - parseInt(this.precioArticulo);
//       console.log(resultado);

//       let cod_usuarios, puntos_acumulados;
//       cod_usuarios = this.cod_usuario;
//       puntos_acumulados = resultado;

 
 
//   //Creamos los datos del recibo e insertamos los datos en la tabla Recibos
//   this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos,puntos_acumulados,cod_usuarios).subscribe((data)=>{
//     this.datos=data;
//     if(this.datos.respuesta=="OK"){
//         alert('¡Enhorabuena!, su recompensa ha sido procesada');
//         this.registroRecibo.IngresarRecibo(this.cod_usuario,this.cod_recompensas).subscribe((data)=>{
//           this.datos = data; 
//           console.log (this.datos);

//           document.getElementById('puntos').innerHTML =resultado+"";
          
//         },
//         (error)=>{
//           alert(error);
//         });
        
//     }
//     else{
//       console.log('No funcionó')
//     }
    
    
//   })

      
//       } 

//     }
//     else{
//       alert('Recuerde seleccionar la recompensa a cambiar.');
//       return;
//     }

  
  }

}



