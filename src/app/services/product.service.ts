import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //subject:any = new BehaviorSubject(null);
  subject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  constructor() { }
}
