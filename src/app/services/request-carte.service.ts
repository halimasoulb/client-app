import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestcb } from '../Models/Requestcb';

@Injectable({
  providedIn: 'root'
})
export class RequestCarteService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("$(environment.apiUrl}/requestCartCredit/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("$(environment.apiUrl}/requestCartCredit/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("$(environment.apiUrl}/requestCartCredit/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("$(environment.apiUrl}/requestCartCredit/terminer/"+vari,data)
  }
  // a revoir
  public voircartes(vari){
    return this.httpClient.get<Requestcb[]>("$(environment.apiUrl}/requestCartCredit/ByCompte/"+vari)
  }
}
