import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['login']);
  }

  solicitud(){
    this.router.navigate(['CrearSolicitud']);
  }

  solicitudes(){
    this.router.navigate(['Solicitudes']);
  }

}
