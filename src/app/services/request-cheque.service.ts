import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{requestcc} from '../Models/requestcc';
import {compteCheque} from '../Models/compteCheque';

@Injectable({
  providedIn: 'root'
})
export class RequestChequeService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("$(environment.apiUrl}/requestCC/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("$(environment.apiUrl}/requestCC/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("$(environment.apiUrl}/requestCC/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("$(environment.apiUrl}/requestCC/update/"+vari,data)
  }
  public voircartes(vari){
    return this.httpClient.get<requestcc[]>("$(environment.apiUrl}/requestCC/ByClient/"+vari)
  }

  public getCompteCheckByClient(vari){
    return this.httpClient.get<compteCheque[]>("$(environment.apiUrl}/cheque/comptes/client/"+vari)
  }




}
