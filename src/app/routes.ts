import { Routes } from '@angular/router';
import { ParticipantesComponent } from './Components/participantes/participantes.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { EstadisticasCreateComponent } from './Components/estadisticas/estadisticas-create/estadisticas-create.component';
import { EstadisticasListComponent } from './Components/estadisticas/estadisticas-list/estadisticas-list.component';
import { PreguntasComponent } from './Components/preguntas/preguntas.component';
import { ModificarComponent } from './Components/preguntas/modificar/modificar.component';
import { ModificarAgregarComponent } from './Components/preguntas/modificar/modificar-Agregar/modificar-Agregar.component';
import { ModificarEliminarComponent } from './Components/preguntas/modificar/modificar-Eliminar/modificar-Eliminar.component';
import { HomeComponent } from './Components/home/home.component';
import { ConsultasNombreComponent } from './Components/consultas/consultas-nombre/consultas-nombre.component';
import { ConsultasDocumentoComponent } from './Components/consultas/consultas-documento/consultas-documento.component';
import { ConsultasColegioComponent } from './Components/consultas/consultas-colegio/consultas-colegio.component';
import { ConsultasGrupoComponent } from './Components/consultas/consultas-grupo/consultas-grupo.component';
import { CronogramaComponent } from './Components/cronograma/cronograma.component';
import { ModificarCronogramaComponent } from './Components/cronograma/modificar-cronograma/modificar-cronograma.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { SignupComponent } from './Components/auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './Components/profile/profile.component';
import { AsignacionGruposComponent } from './Components/consultas/asignacion-grupos/asignacion-grupos.component';
import { DescargaDatosComponent } from './Components/consultas/descarga-datos/descarga-datos.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'perfil', component: ProfileComponent},
    { path: 'auth/login', component: LoginComponent},
    { path: 'auth/signup', component: SignupComponent},
    { path: 'participantes', component: ParticipantesComponent },
    { path: 'consultas', component: ConsultasComponent},
    { path: 'consultasNombre', component: ConsultasNombreComponent },
    { path: 'descarga', component: DescargaDatosComponent },
    { path: 'consultasDocumento', component: ConsultasDocumentoComponent },
    { path: 'consultasColegio', component: ConsultasColegioComponent },
    { path: 'consultasGrupo', component: ConsultasGrupoComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'estadisticasCreate', component: EstadisticasCreateComponent },
    { path: 'estadisticasList', component: EstadisticasListComponent },
    { path: 'cronograma', component: CronogramaComponent },
    { path: 'cronogramaModificar', component: ModificarCronogramaComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'modificar', component: ModificarComponent },
    { path: 'modificar-Agregar', component: ModificarAgregarComponent },
    { path: 'modificar-Eliminar', component: ModificarEliminarComponent },
    { path: 'asignacionGrupos', component: AsignacionGruposComponent },
    { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },

];
