import { Routes } from '@angular/router';
import { ParticipantesComponent } from './Components/participantes/participantes.component';
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { EstadisticasListComponent } from './Components/estadisticas/estadisticas-list/estadisticas-list.component';
import { PreguntasComponent } from './Components/preguntas/preguntas.component';
import { ModificarComponent } from './Components/preguntas/modificar/modificar.component';
import { ModificarAgregarComponent } from './Components/preguntas/modificar/modificar-Agregar/modificar-Agregar.component';
import { ModificarEliminarComponent } from './Components/preguntas/modificar/modificar-Eliminar/modificar-Eliminar.component';
import { HomeComponent } from './Components/home/home.component';
import { ConsultasParticipantesComponent } from './Components/consultas/consultas-participantes/consultas-participantes.component';
import { CronogramaComponent } from './Components/cronograma/cronograma.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { SignupComponent } from './Components/auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './Components/profile/profile.component';
import { AsignacionGruposComponent } from './Components/consultas/asignacion-grupos/asignacion-grupos.component';
import { DescargaDatosComponent } from './Components/consultas/descarga-datos/descarga-datos.component';
import { CrearGrupoComponent } from './Components/consultas/crear-grupos/crear-grupo.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'perfil', component: ProfileComponent},
    { path: 'auth/login', component: LoginComponent},
    { path: 'auth/signup', component: SignupComponent},
    { path: 'participantes', component: ParticipantesComponent },
    { path: 'descarga', component: DescargaDatosComponent },
    { path: 'consultas', component: ConsultasParticipantesComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'estadisticasList', component: EstadisticasListComponent },
    { path: 'cronograma', component: CronogramaComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'modificar', component: ModificarComponent },
    { path: 'modificar-Agregar', component: ModificarAgregarComponent },
    { path: 'modificar-Eliminar', component: ModificarEliminarComponent },
    { path: 'crearGrupo', component: CrearGrupoComponent },
    { path: 'asignacionGrupos', component: AsignacionGruposComponent },
    { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },

];
