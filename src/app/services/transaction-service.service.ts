import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpClient:HttpClient) { } 
  public Gettransactions(vari){
    return this.httpClient.get("$(environment.apiUrl}/transaction/account/"+vari);
  }
  public Gettransaction(vari){
    return this.httpClient.get("$(environment.apiUrl}/transaction/transactions/"+vari);
  }
  public fairetransaction(receiver,sender,data){
    return this.httpClient.post("$(environment.apiUrl}/transaction/sendTransaction/"+receiver+"/"+sender,data)
  }
  public Gettransactionsender(vari){
    return this.httpClient.get<Array<Transaction>>("$(environment.apiUrl}/transaction/senderAccount/"+vari);
  }
  public Gettransactionreceiver(vari){
    return this.httpClient.get<Array<Transaction>>("$(environment.apiUrl}/transaction/receiverAccount/"+vari);
  }
}
