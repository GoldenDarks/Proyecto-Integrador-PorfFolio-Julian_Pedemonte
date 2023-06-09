import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[] = [];


    constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

      isLogged = false;

      ngOnInIt(): void {
        this.cargaExperiencia();

        if(this.tokenService.getToken()){
          
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }

      }

      cargaExperiencia():void{
        this.sExperiencia.lista().subscribe(
          data => {this.expe = data;})
      }

      delete(id?: number) {
        if (id != undefined){
          this.sExperiencia.delete(id).subscribe(
            data => {
              this.cargaExperiencia();
            }, err => {
              alert("No se pudo borrar la experiencia");
            }
          )
        }
      }
    } 

 