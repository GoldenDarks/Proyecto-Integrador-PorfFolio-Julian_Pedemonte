import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
