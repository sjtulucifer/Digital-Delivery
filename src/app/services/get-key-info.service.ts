import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ViewToken } from '../entity/view-token';


@Injectable({
  providedIn: 'root'
})
export class GetKeyInfoService {

  constructor(private $http: HttpClient) { }

  getViewToken(): Observable<any> {
    
    // let viewToken: ViewToken = new ViewToken();

    return this.$http.get(environment.webApiUrl + "api/TokenControler/GetViewToken/" + environment.fileId);
    // return environment.viewToken;
    //return viewToken.data;
  }
}
