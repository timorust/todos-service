import {EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemModelInterface} from "./item-model.interface";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private httpClient:HttpClient) {
  }

  getItems() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
  }

  saveItems(item:ItemModelInterface) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/todos', item);
  }

  private _removeItem = new EventEmitter(null);
  removeItem$ = this._removeItem.asObservable();
  removeItem(itemId:string) {
    this._removeItem.emit(itemId);
  }
}
