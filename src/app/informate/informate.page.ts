import { Component, OnInit } from '@angular/core';
import { InformateService } from '../Services/informate.service';
import { Variableglobal } from '../variableglobal';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.page.html',
  styleUrls: ['./informate.page.scss'], 
})
export class InformatePage implements OnInit {
  posteducacionales;
  cod_ayuntamiento: any;
  //datos a obtener
  cod_post:any;
  titulo:any;
  descripcion:any;
  imagen:any;

  //Datos a llenar o actualizar
  cod_post_llenar:any;
  titulo_llenar:any;
  descripcion_llenar:any;
  imagen_llenar:any;


  //Datos a agregar
  titulo_agregar:any;
  descripcion_agregar:any;
  imagen_agregar:any;


  constructor(public servicio:InformateService) { }

  cargarcodAyuntamiento(i){
    
    }

  ngOnInit() {
    this.cod_ayuntamiento = Variableglobal.cod_ayuntamiento;
  
    this.cargarPost();
    console.log('FFFF',this.cod_ayuntamiento);
    
  }

  cargarPost(){
    this.cod_ayuntamiento = Variableglobal.cod_ayuntamiento;

    this.servicio.obtenerPostEducacionales(this.cod_ayuntamiento)
    .subscribe(
      (data)=>{this.posteducacionales = data;},
      (error)=>{console.log(error);}
    )
  }
  
  ocultarSeccion(){
    (document.getElementById('container') as HTMLIonCardElement).className = "ocultar";
    (document.getElementById('seccion1') as HTMLIonCardElement).className = "mostrar";
  }
  ocultarSeccion2(){
    (document.getElementById('container') as HTMLIonCardElement).className = "ocultar";
    (document.getElementById('seccion1') as HTMLIonCardElement).className = "ocultar";
    (document.getElementById('seccion2') as HTMLIonCardElement).className = "mostrar";
  }

  mostrarSeccion(){
    (document.getElementById('container') as HTMLIonCardElement).className = "mostrar";
    (document.getElementById('seccion1') as HTMLIonCardElement).className = "ocultar";
    (document.getElementById('seccion2') as HTMLIonCardElement).className = "ocultar";
  }



  vaciarElementos(){
    // (document.getElementById('cod_post_llenar') as HTMLLabelElement). = "";
   ( document.getElementById('titulo_llenar') as HTMLInputElement ).value = null;
    ( document.getElementById('descripcion_llenar') as HTMLInputElement ).value = null;
    ( document.getElementById('imagen_llenar') as HTMLInputElement ).value = null;
  }


  llenarDatos(i){
    this.ngOnInit();
    // Obtenemos los datos de cada elemento seleccionado
    this.cod_post =(document.getElementById('cod_post' + i) as HTMLIonLabelElement).textContent;

    // asignamos esos valores a la variable para llenar  

    this.cod_post =(document.getElementById('cod_post_llenar') as HTMLLabelElement).textContent = this.cod_post;
    this.titulo= ( document.getElementById('titulo_llenar') as HTMLInputElement ).value = (document.getElementById('titulo' + i)as HTMLIonCardElement).textContent;
    this.descripcion=  ( document.getElementById('descripcion_llenar') as HTMLInputElement ).value = (document.getElementById('descripcion' + i)as HTMLIonCardElement).textContent;
    this.imagen=( document.getElementById('imagen_llenar') as HTMLInputElement ).value = (document.getElementById('imagen' + i)as HTMLIonCardElement).textContent;
    (document.getElementById('container') as HTMLIonCardElement).className = "ocultar";
    this.ocultarSeccion();
  }

  agregarPost(){
    this.titulo_agregar = (document.getElementById('titulo_agregar')as HTMLTextAreaElement).value;
    this.descripcion_agregar = (document.getElementById('descripcion_agregar')as HTMLTextAreaElement).value;  
    this.imagen_agregar = (document.getElementById('imagen_agregar')as HTMLTextAreaElement).value;
    this.cod_ayuntamiento = Variableglobal.cod_ayuntamiento;

    if ((this.titulo_agregar || this.descripcion_agregar || this.imagen_agregar) ==""){
      alert('Llene cada elemento antes de proseguir.');
      return;
    }
    else{
      this.servicio.RegistrarPost( this.titulo_agregar, this.descripcion_agregar, this.imagen_agregar, this.cod_ayuntamiento)
    .subscribe(
      (data)=>{this.posteducacionales = data;},
      (error)=>{console.log(error);}
    )
    
    }
    alert('Registro Exitoso');
    this.cargarPost();
      this.mostrarSeccion();
      this.vaciarElementos();

  }

  editarPost(){

    this.cod_post =(document.getElementById('cod_post_llenar') as HTMLIonLabelElement).textContent;

    // asignamos esos valores a la variable para llenar  

    this.cod_post =(document.getElementById('cod_post_llenar') as HTMLLabelElement).textContent;
    this.titulo= ( document.getElementById('titulo_llenar') as HTMLInputElement ).value ;
    this.descripcion=  ( document.getElementById('descripcion_llenar') as HTMLInputElement ).value;
    this.imagen=( document.getElementById('imagen_llenar') as HTMLInputElement ).value;

    if (this.titulo=="" || this.descripcion=="" || this.imagen==""){
        alert('Recuerde llenar todos los elementos');
        return;
      }
      else{
        let resultado=   window.confirm('Estas seguro de que desea modificacer : ' + this.titulo + "  ?");
        if (resultado === true){
      this.servicio.ActualizarPost(this.cod_post, this.titulo, this.descripcion, this.imagen)
      .subscribe(
        (data)=>{this.posteducacionales = data;},
        (error)=>{console.log(error);}
      )
      this.cargarPost();
      alert('Actualización Exitosa');
      this.mostrarSeccion();
      this.vaciarElementos();
      
        }
      }
  }

  eliminarPost(){
   
    this.titulo= ( document.getElementById('titulo_llenar') as HTMLTextAreaElement ).value ;
    this.cod_post= ( document.getElementById('cod_post_llenar') as HTMLIonLabelElement ).textContent ;
    let resultado=   window.confirm('Estas seguro de que desea eliminar : ' + this.titulo + "  ?");
    if (resultado === true) {
      this.servicio.EliminarPost( this.cod_post)
      .subscribe(
        (data)=>{this.posteducacionales = data;},
        (error)=>{console.log(error);}
      )
      this.cargarPost();
      alert('Eliminación Exitosa');
      // document.getElementById("cargar").click();
      // this.ocultarSeccion();

      this.mostrarSeccion();
      this.vaciarElementos();
      
        
    } else { 
        // window.alert('Intenelo más tarde');
        return;
    }
    this.mostrarSeccion();
    this.vaciarElementos();
  }


    cancelar(){
      this.mostrarSeccion();
      this.vaciarElementos();
    }
}