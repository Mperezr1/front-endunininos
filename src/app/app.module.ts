import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, OnDestroy } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { PreguntasComponent } from './Components/preguntas/preguntas.component';
import { ModificarComponent } from './Components/preguntas/modificar/modificar.component';
import { ModificarAgregarComponent } from './Components/preguntas/modificar/modificar-Agregar/modificar-Agregar.component';
import { ModificarEliminarComponent } from './Components/preguntas/modificar/modificar-Eliminar/modificar-Eliminar.component';
import { ParticipantesComponent } from './Components/participantes/participantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatCheckboxModule,
         MatSelectModule, MatTabsModule, MatFormFieldControl } from '@angular/material';
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { EstadisticasListComponent } from './Components/estadisticas/estadisticas-list/estadisticas-list.component';
import { EstadisticasCreateComponent } from './Components/estadisticas/estadisticas-create/estadisticas-create.component';
import { appRoutes } from './routes';
import { HomeComponent } from './Components/home/home.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';
import { ConsultasColegioComponent } from './Components/consultas/consultas-colegio/consultas-colegio.component';
import { ConsultasNombreComponent } from './Components/consultas/consultas-nombre/consultas-nombre.component';
import { ConsultasDocumentoComponent } from './Components/consultas/consultas-documento/consultas-documento.component';
import { ConsultasGrupoComponent } from './Components/consultas/consultas-grupo/consultas-grupo.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { SignupComponent } from './Components/auth/signup/signup.component';
import { AuthInterceptor } from './Components/auth/auth-interceptor';
import { AuthService} from './Services/auth.service';
import { HeaderComponent } from './Components/header/header.component';
import { CronogramaComponent } from './Components/cronograma/cronograma.component';
import { ModificarCronogramaComponent } from './Components/cronograma/modificar-cronograma/modificar-cronograma.component';
import { RegistroAdminComponent } from './Components/participantes/registro-admin/registro-admin.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AsignacionGruposComponent } from './Components/consultas/asignacion-grupos/asignacion-grupos.component';
import { DescargaDatosComponent } from './Components/consultas/descarga-datos/descarga-datos.component';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      SignupComponent,
      PreguntasComponent,
      ModificarComponent,
      ModificarAgregarComponent,
      ModificarEliminarComponent,
      ParticipantesComponent,
      ProfileComponent,
      EstadisticasComponent,
      EstadisticasListComponent,
      EstadisticasCreateComponent,
      HomeComponent,
      ConsultasComponent,
      ConsultasColegioComponent,
      ConsultasNombreComponent,
      ConsultasDocumentoComponent,
      ConsultasGrupoComponent,
      CronogramaComponent,
      RegistroAdminComponent,
      ModificarCronogramaComponent,
      AsignacionGruposComponent,
      DescargaDatosComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatSelectModule,
      MatTabsModule,
      ChartsModule,
      
      RouterModule.forRoot(appRoutes)
      
   ],
   providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
 
 }
