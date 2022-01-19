import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetKeyInfoService {

  constructor() { }

  getViewToken(): string {
    return environment.viewToken;
  }
}
