import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoArgentinaProgramaComponent } from './componente/logo-argentina-programa/logo-argentina-programa.component';
import { BannerComponent } from './componente/banner/banner.component';
import { DatosComponent } from './componente/datos/datos.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componente/skills/skills.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componente/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componente/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componente/educacion/neweducacion.component';
import { EditeducacionComponent } from './componente/educacion/editeducacion.component';
import { EnvironmentComponent } from './environment/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaProgramaComponent,
    BannerComponent,
    DatosComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EnvironmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
