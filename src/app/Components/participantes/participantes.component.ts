import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ParticipanteService } from '../../Services/participante.service'
import { Participante, Acudiente } from '../../Models/participante.model'
import { Colegio, Contacto } from '../../Models/colegio.model'
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  //informacion acudientes
  private acudientes: Acudiente[] = []; //Lista de acudientes
  private nombreCompleto : string;
  //informacion colegio
  public generosparaselector = ['M', 'F'];
  public tiposColegio = ['Oficial', 'No oficial'];
  public calendariosColegios = ['A','B'];
  private contactosColegio: Contacto[] = []; //Lista de contactos colegio
  private nombreCompletoContacto: string;
  private celular: string;
  constructor(public ppService: ParticipanteService, public authService: AuthService, private http: HttpClient) { }

  private selectedFile: File = null;

  ngOnInit() {
  }

  isAdmin() {
    if(this.authService.actualPriority === 2){
      return true;
    }else{
      return false;
    }
  }

  
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const pp : Participante = {
      estadodb: null,
      estado: "Inactivo",
      imagen: null, 
      edadParticipaciones: form.value.edadParticipante,
      genero: form.value.generoparticipante, 
      nombre: form.value.nombre, 
      nombreCompleto: form.value.nombre +  " " + form.value.apellidos, 
      tipoDocumento: form.value.tipodocumento, 
      documento: form.value.documento, 
      fechaNacimiento: String(form.value.fechanac),
      telefono: form.value.telefonopar, 
      celular: form.value.celularpar,
      direccion: form.value.direccionpar, 
      barrio: {
        nombre: form.value.barriopar, 
        comuna: form.value.comunapar, 
        municipio: form.value.munpar
      },
      estrato: form.value.estratopar,
      email: form.value.emailpar, 
      eps: form.value.epspar, 
      origen: {
        tipoIngreso: null, 
        colegioIngreso: {
          nombre: form.value.nombreColegio,
          tipo: form.value.tipocolegio,
          telefono: null,
          email: null,
          sitioWeb: null,
          direccion: null,
          barrio: null,
          estrato: null,
          tipoCalendario: form.value.calendariocolegio,
          caracter: null,
          jornada: null,
          numeroEstudiantes: null,
          contactos: null
      }, 
        gradoIngreso: form.value.gradoColegio, 
        añoIngreso: null
      },
      colegioActual: {
        nombre: form.value.nombreColegio,
        tipo: form.value.tipocolegio,
        telefono: null,
        email: null,
        sitioWeb: null,
        direccion: null,
        barrio: null,
        estrato: null,
        tipoCalendario: form.value.calendariocolegio,
        caracter: null,
        jornada: null,
        numeroEstudiantes: null,
        contactos: null
    },
    egresado: false, 
    ocupacion: null, 
    areaLaboral: null, 
    nivelFormacion: null, 
    programaAcademico: null, 
    universidad: null, 
    observaciones: null, 
    activo: false, 
    participaciones: null,
    numParticipaciones: 0, 
    participacionExpediciones: false, 
    acudientes: [{
      relacion: "padre", 
      nombreCompleto: form.value.nombrepadre + " " + form.value.apellpadre, 
      tipoDocumento: form.value.tipodocpadre, 
      documento: form.value.docpadre, 
      celular: form.value.celularpadre, 
      email: form.value.emailpadre, 
      nivelFormacion: form.value.niveldeformacionpadre, 
      areaConocimiento: form.value.areaconpadre, 
      ocupacion: form.value.ocupacionpadre, 
      lugarTrabajo: form.value.lugardetrabajopadre, 
      telefonoTrabajo: form.value.teltrabajopadre
    },
    {
      relacion: "Madre", 
      nombreCompleto: form.value.nombreMadre + " " + form.value.apellMadre, 
      tipoDocumento: form.value.tipodocMadre, 
      documento: form.value.docMadre, 
      celular: form.value.celularMadre, 
      email: form.value.emailMadre, 
      nivelFormacion: form.value.niveldeformacionMadre, 
      areaConocimiento: form.value.areaconMadre, 
      ocupacion: form.value.ocupacionMadre, 
      lugarTrabajo: form.value.lugardetrabajoMadre, 
      telefonoTrabajo: form.value.teltrabajoMadre
    },
    {
      relacion: "otro", 
      nombreCompleto: form.value.nombreotro + " " + form.value.apellotro, 
      tipoDocumento: form.value.tipodocotro, 
      documento: form.value.docotro, 
      celular: form.value.celularotro, 
      email: form.value.emailotro, 
      nivelFormacion: form.value.niveldeformacionotro, 
      areaConocimiento: form.value.areaconotro, 
      ocupacion: form.value.ocupacionotro, 
      lugarTrabajo: form.value.lugardetrabajootro, 
      telefonoTrabajo: form.value.teltrabajootro
    }]
    };
    this.ppService.addPost(pp);
    alert('Se ha agregado el participante ' + form.value.nombre);
    this.contactosColegio = [];
    this.acudientes = []; 
    form.resetForm();
  }
  addTask(event){
    event.preventDefault();
    console.log("acudientes")
    const newAcudiente:Acudiente = {
      nombreCompleto: this.nombreCompleto,
     /* tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      relacion: this.relacion,
      celular: this.celular,
      email: this.email,
      nivelFormacion: this.nivelFormacion,
      areaConocimiento: this.areaConocimiento,
      ocupacion: this.ocupacion,
      lugarTrabajo: this.lugarTrabajo,
      telefonoTrabajo: this.telefonoTrabajo
      */
    };
    this.acudientes.push(newAcudiente);
    this.acudientes.forEach(element => {
      console.log(element);
    });
    
  }
  
  addContactos(event){
    console.log("contactos")

    event.preventDefault();
    const newContacto:Contacto = {
      nombreCompleto: this.nombreCompletoContacto,
      celular: this.celular
     /* tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      relacion: this.relacion,
      celular: this.celular,
      email: this.email,
      nivelFormacion: this.nivelFormacion,
      areaConocimiento: this.areaConocimiento,
      ocupacion: this.ocupacion,
      lugarTrabajo: this.lugarTrabajo,
      telefonoTrabajo: this.telefonoTrabajo
      */
    };
    this.contactosColegio.push(newContacto);
    this.contactosColegio.forEach(element => {
      console.log(element);
    }); 
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){  
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.ppService.pushImage(fd);
  }


  public todosLosColegios = ["Colegio Alemán De Medellín", "Colegio Gimnasio Los Pinares", "Colegio San José De Las Vegas (f)", "Colegio María Auxiliadora (la Ceja)","InstitutoMusical Diego Echavarría", "I.E. Luis Carlos Galán Sarmiento", "Instituto Jorge Robledo", "Colegio Aspaen Gimnasio Los Alcázares", "Colegio San Ignacio De Loyola", "Colegio Montessori", "Colegio Palermo De San José", "Colegio De La Compañía De María" ,"la Enseñanza", "Corporación Colegio Cumbres", "Colegio Teresiano De Envigado", "The Columbus School", "Comunidad Colegio Jesús María", "Colegio San José De Las Vegas (m)", "Colegio Colombo Británico", "Colegio Campestre Horizontes", "Centro Educativo Rural El Portento", "Instituto Conrado González Mejía", "I.E. San José (itagüí)", "Colegio Hontanares", "Colegio Calasanz", "I.E. Concejo Municipal De Itagüí", "Colegio Waldorf Isolda Echavarría", "I.E. Doctor Luis Eduardo Posada", "Colegio Canadiense", "", "Colegio Salesiano Santo Domingo Savio", "Colegio Funorie", "Colegio Comfama", "Colegio Madre Antonia Cerini", "Colegio La Presentación", "Colegio Colombo Francés", "Colegio De La Salle (bello)", "I.E. Avanzar", "Colegio Marymount", "Colegio El Triángulo", "Colegio San Lucas", "Institución De Educación Formal Compuestudio", "Colegio Coredi", "Instituto Técnico Industrial Pascual Bravo", "Colegio El Carmelo", "Colegio Campestre La Colina", "Colegio De La Universidad Pontificia Bolivariana", "Liceo San Rafael", "Liceo Salazar Y Herrera", "I.E. Santa Catalina", "I.E. Inem José Félix De Restrepo", "I.E. San Juan Bosco", "I.E. Santo Ángel", "Colegio San Gabriel De La Dolorosa", "I.E. Inem Jose Félix De Restrepo Sección Escuela Guillermo Echavarría Misas", "I.E. José Eusebio Caro", "Colegio Antares", "I.E. Santa Teresa", "Centro De Educación Especial Los Andes", "Centro Educativo Rural Carrizales", "I.E. José María Bernal Sección Escuela Joaquín Aristizábal", "Escuela Normal Superior Antioqueña", "Instituto Colombo Venezolano", "Unidad Educativa San Marcos", "Upet Institución Unión Profesional Para La Educación Y El Trabajo", "Liceo Francisco Restrepo Molina", "Corporación Circo Momoi.E. Inem Jose Félix De Restrepo", "Colegio Padre Manyanet", "I.E. Escuela Normal Superior María Auxiliadora (copacabana)", "I.E. Centro Formativo De Antioquia", "I.E Santa María", "I.E. Fe Y Alegría Luis Amigó", "I.E. Jesús Rey", "I.E. San José Obrero", "Colegio Cooperativo San Antonio De Prado", "Corporación Circo Momo", "I.E. Perpetuo Socorro", "Colegio De La Salle (envigado)", "I.E. La Salle De Campoamor", "Colegio De La Inmaculada", "Colegio San José De La Salle", "I.E. Julio César García", "Colegio Gimnasio Cantabria", "I.E. Manuel Uribe Ángel", "I.E. Juan María Céspedes", "Correcaminoscorporación Rural Laboratorio Del Espíritu", "Colegio Benedictino De Santa María", "Colegio Panamericano Colombo Sueco", "Nocturno (10° Y 11°)", "I.E. Madre María Mazzarello", "I.E. Escuela Normal Superior De Medellín", "Colegio Fe Y Alegría Abraham Reyes", "Instituto Salesiano Pedro Justo Berrío", "I.E. Octavio Calderón Mejía", "Colegio Santa Teresita Del Niño Jesús", "Escuela Nasuncieno Peláez", "I.E. Rosalía Suárez", "I.E. El Pedregal", "Colegio Nuestra Madre De Las Mercedes", "I.E. Josefa Campos", "I.E. Suárez De La Presentación", "I.E. Javiera Londoño", "I.E. Héctor Abad Gómez", "Colegio Bethlemitas", "Colegio Carmelitano", "I.E. Pío Xii (san Pedro De Los Milagros)", "I.E. Alvernia", "Colegio Leonardo Da Vinci", "Colegio El Rosario (itagüí)", "I.E. Jose María Bravo Márquez", "Colegio Parroquial San Francisco De Asís", "Colegio Parroquial Nuestra Señora De Chiquinquirá", "Colegio Antonino", "I.E. Colombia (girardota)", "Instituto San Carlos De La Salle", "Santos Angeles Custodios", "Colegio Corazonista", "Instituto Corferrini", "Centro Educativo Rural Don Diego", "Colegio Fontán", "I.E. La Paz", "I.E. Rafael Uribe Uribe", "I.E. Tecnico Industrial Santiago De Arma", "Colegio Parroquial Emaús", "Colegio Conquistadores", "I.E. Mariscal Robledo", "Colegio Gimnasio Vermont", "Colegio Domingo Savio", "Colegio Doctor José Manuel Restrepo Vélez", "Colegio Parroquial Nuestra Señora Del Buen Consejo", "Colegio Militar General Pedro Nel Ospina", "I.E. Lucrecio Jaramillo Vélez", "Colegio Bilingüe Aspean Gimnasio Los Alcazares", "Colegio Soleira", "I.E. Normal Superior De Envigado", "I.E. Simón Bolívar", "I.E. Juvenil Nuevo Futuro", "I.E. La Paz Sede John F. Kennedy", "I.E. Yermo Y Parres Sección Escuela Carlos Franco", "Colegio Bello Oriente", "Colegio Manuel Mejía Vallejo", "I.E. Pedro Luis Villa", "Colegio Santa Leoní Aviat", "Colegio La Anunciación", "I.E. Samuel Barrientos Restrepo", "I.E. Ignacio Botero Vallejo", "Colegio Carlos Castro Saavedra", "I.E. Bernardo Arango Macías", "I.E. Colegio Luis Amigó", "Colegio Salesiano El Sufragio", "I.E. Alcaldía De Medellín", "Colegio Parroquial San Buenaventura", "I.E. Gerardo Valencia Cano", "I.E. Colegio Loyola Para La Ciencia Y La Tecnología", "I.E. Abraham Reyes", "I.E. Guillermo Valencia", "I.E. Benedikta Zur Nieden", "I.E. Jesús María El Rosal", "Colegio Pablo Vi", "Colegio Nuestra Señora De La Providencia", "I.E. Felipe De Restrepo", "Colegio Nuestra Señora Del Rosario De Chiquinquirá", "I.E. La Presentación De Campoamor", "I.E. Carlos Vieco Ortiz", "I.E. Octavio Harry", "I.E. Diego Echavarría Misas", "Centro De Estudios En Sistemas", "Centro Educacional Conquistadores", "Normal Superior De María Rionegro", "I.E. Domingo Savio", "I.E. Antonio Ricaurte", "Colegio Empresarial San Antonio De Prado", "Colegio Agustiniano De San Nicolás", "I.E. Antonio Donado Camacho", "Colegio Gimnasio Internacional De Medellín", "Colegio De La Presentación De Envigado", "Corporación Circo Momoi.E. Villa Del Socorro", "I.E. Las Nieves", "I.E Loma Linda", "I.E Ciencia Y Vida", "I.E. San Antonio (jardín)", "Coe Computo", "I.E. Alejandro Vélez Barrientos", "Centro Educativo Berlín", "Instituto Tomás Carrasquilla", "I.E Las Palmas", "Corporación Circo Momoi.E. Manuel Uribe Ángel", "I.E. Comercial Antonio Roldán Betancur", "I.E. Sor Juana Inés De La Cruz", "Colegio Euskadi", "I.E. Rural Granizada", "I.E. Marco Fidel Suárez", "I.E. Carlos Pérez Mejía", "I.E. Ciudad Itagüí", "I.E. Graciela Vásquez Cano", "Colegio Madrid Campestre", "I.E. Sol De Oriente", "I.E. Antonio Derka (santo Domingo)", "I.E. Federico Ozanam", "Fundación Servicio Juvenil Programa Bosconia Etapa Pulcinela (sede Horizontes) (grupo Proyecciones)", "Centro Educativo La Campiña", "I.E. Rafael J Mejia", "Colegio Fe Y Alegría Santa María", "I.E. Lorenza Villegas De Santos", "Colegio Mano Amiga", "Gimnasio Los Cedros", "Escuela Julio Agudelo", "I.E. Gimnasio Integral Santa Ana", "Colegio Rudolf Steiner", "Colegio Maestro La Sierra", "Colegio Monseñor Alfonso Uribe Jaramillo", "I.E. Concejo De Medellín", "I.E. Comercial De Envigado", "I.E. Oreste Sindicce", "I.E. Liceo Antioqueño", "Sección Escuela El Pinal", "Colegio José María Berrío", "Colegio Alcaravanes", "Colegio Eucarístico De La Milagrosa", "I.E. José Antonio Galán Sede La Inmaculada", "Colegio De La Upb", "I.E. San Antonio De Prado", "I.E.R. El Hatillo", "Pascual Bravo", "I.E. Ángela Restrepo Moreno", "Colegio Juan Bernardone", "Colegio De La Presentación Medellín", "Colegio Adventista Simón Bolivar", "Colegio San Juan Bosco", "I.E. San José", "La Natacha Y Michael", "I.E. Pedro Estrada", "Colegio San Juan Eudes", "Corporacion Creando Futuro", "Colegio Nuestra Señora De Las Mercedes", "Colegio Colombo Venezolano", "I.E. Jose Miguel De La Cll", "Colegio Latino", "Instituto Educativo Carlos Pérez Mejía", "I.E. San Marcos", "San Ignacio De Loyola", "Colegio Alemán", "Colegio San José De Las Vegas", "Colegio Unidad Educativa San Marcos", "I.E. Lola González", "I.E. Federico Ángel", "Colegio Maria Reina Del Carmelo", "I.E. Gilberto Echeverri Mejía", "I.E. Emiliano García", "I.E. República De Honduras", "Colegio Theodoro Hertlz", "I.E. Merceditas Gómez Martínez", "I.E. Tricentenario", "Colegio Campestre El Maestro", "I.E. Ciro Mendia", "Colegio María Josefa Marulanda", "Centro Educacional Don Bosco", "Colegio Santa Clara De Asis", "Colegio Jesús María", "I.E. Villa Del Socorro", "I.E. Eduardo Santos", "I.E. San Nicolás", "Colegio Ana María Janer", "Escuela Alfredo Cook Arango", "I.E. La Esperanza", "I.E Rural Ruicon", "I.E. Santa Juana De Lestonnac", "I.E. María Auxiliadora", "Idem José Ignacio Botero Vallejo", "Centroformativo De Antioquia.Cefa", "Centro Educativo Mi Dulce Hogar", "Colegio Parroquial Juan Pablo Ii", "Colegio Adventista Del Sur", "Colegio Avanzar", "Fundación Educativa Soleira", "I.E. Repúblia De Uruguay", "I.E. Santa Elena", "I.E. Francisco Miranda", "I.E. San Andrés", "I.E. Monseñor Víctor Wiedeman", "I.E. Ramón Giraldo Ceballos", "Colegio Sagrado Corazón Montemayor (corporación Cantoalegre)", "Institución La Presentación De Campoamor", "I.E.Juan De Dios Cock", "Colegio Loyola Para La Ciencia Y La Innivación", "I.E. Adelaida Correa Estrada", "Fundación Evolución Del Pensamiento", "I.E. Compartir", "I.E. Sol De Oriente (enciso)", "Colegio Monte Luna", "Colegio Emilia Riquelme", "Colegio Militar José María Córdoba", "I.E. Fontidueño Jaime Arango Rojas Sección Machado", "Colegio Vid", "I.E. Juan De Dios Carvajal", "C.E.C Tilín Tilán", "I.E. Rosalía Suárez (confraternidad Carcelaria)", "I.E. La Paz Envigado", "Colegio Santa Bertilla Boscardín", "I.E.Presbitero Luís Eduardo Pérez Molina", "I.E.Yermo Y Parres", "Idem Ciro Mendía Sede Arzobispo García", "I.E. Presbitero Luis Rodolfo Gómez", "Colegio San Vicente De Paúl", "I.E. Miraflores", "Colegio Ferrini Bilingue", "I.E. Javiera Londoño Seccional Antonia Santos", "I.E. Instituto Tecnico Industrial Pascual Bravo", "I.E.Pedro Luis Alvarez", "I.E. El Salvador", "Colegio De María", "Escuela Seguros Bolivar", "Asociación Confraternidad Carcelaría De Antioquia", "Colegio Cristóbal Colón (colombus School)", "I.E. Reino De Bélgica", "Colegio La Salle Envigado", "I.E. Barrio París", "I.E. Casd José María Espinosa Prieto","I.E. Villa Del Sol", "The New School", "I.E Esteban Jaramillo", "Instituto Pedro Justo Berrio", "Colegio Campestre El Encanto", "I.E. Raquel Jaramillo", "Colegio Cumbres", "Colegio Santa María Del Rosario", "I.E. Escuela Normal Superior De Envigado", "Colegio Nuestra Señora De Lourdes", "Colegio La Inmaculada De Itagüi", "Colegio U.P.B.", "I.E Juan Xxiii", "Alfredo Cook", "Homeschool", "Asociación Confraternidad Carcelaria / I.E Comercial Antonio Roldán Betancur", "Asociación Confraternidad Carcelaria / I.E Gilberto Echeverri Mejía", "Colegio  Aspaen Gimnasio los Alcázares", "Colegio Alemán Medellín", "Colegio Calasanz Femenino", "Colegio Campestre El Remanso", "Colegio Campestre San Nicolás", "Colegio Cooperativo San Antonio de Prado", "Colegio Cristóbal Colón (Columbus School)", "Colegio de la Compañía de María La Enseñanza", "Colegio de la Inmaculada", "Colegio de la Inmaculada Itagüí", "Colegio Empresarial San Antonio de Prado", "Colegio Ferrini", "Colegio José María Berrio", "Colegio La Salle de Envigado", "Colegio Marymount ", "Colegio Montessori ", "Colegio Nuestra Señora de Rosario de Chiquinquira", "Colegio Palermo de San José", "Colegio Palermo de San José ", "Colegio Parroquial San Francisco de Asís", "Colegio San Ignacio de Loyola", "Colegio San José de las Vegas", "Colegio San José de las vegas ", "Colegio Teresiano de Envigado", "Colegio UPB", "Corporación Cantoalegre / Colegio Alemán Medellín", "Corporación Cantoalegre/ Colegio Isolda Echavarria", "Escuela Esteban Jaramillo", "Escuela Marco Fidel Suárez", "Fundación  Evolución del Pensamiento", "I.E.  Santa Juanma de Lestonnac", "I.E. Concejo de Medellín", "I.E. Concejo Municipal de Itagüí", "I.E. Enrique Vélez Escobar", "I.E. Fe y Alegría Villa de la Candelaria", "I.E. Francisco Antonio Zea", "I.E. INEM José Félix de Restrepo", "I.E. Jesús Rey ", "I.E. Jorge Eliecer Gaitán Ayala", "I.E. Luis Eduardo Arias Reinel", "I.E. Manuel Uribe Ángel ", "I.E. María Reina del Carmelo", "I.E. Monseñor Víctor Wiedemann", "I.E. Normal Superior de Medellín", "I.E. Nuestra Señora de la Providencia", "I.E. Orestes Sindicce", "I.E. Pedro Estrada ", "I.E. Reino de Bélgica", "I.E. Rural El Hatillo", "I.E. Santa Catalina de Siena", "I.E. Tulio Ospina", "I.E. Yermo y Parres", "Instituto San Carlos de la Salle" ];
}
