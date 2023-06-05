import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import axios from "axios";
//import https from "https";
const cors=require('cors');


@Injectable({providedIn: 'root'})
export class LoginService {




    //public url:string = '/api/IniciaSesion'
  //  public params = {usuario:'utmcorreo@utm.edu.ec',clave:'12345678'}


    //public header:HttpHeaders = new HttpHeaders().set('X-Api-Key', '3ecbcb4e62a00d2bc58080218a4376f24a8079e1' )
    //http: any;



    constructor(private httpClient: HttpClient) { }



    iniciarSesion(usuario: string, clave: string) {
        const headers = new HttpHeaders({
          'X-Api-Key': '3ecbcb4e62a00d2bc58080218a4376f24a8079e1'
        });

        var formData = new FormData();
        formData.append("usuario", usuario);
        formData.append("clave", clave);
        //ng serve --proxy-config proxy.conf.json
        return this.httpClient.post<any>('/api/IniciaSesion', formData, { headers });
      }

}
