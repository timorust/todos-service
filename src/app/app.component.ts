import {Component, OnDestroy} from '@angular/core';
import {ItemModelInterface} from "./item-model.interface";
import {CoreService} from "./core.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  todoList: ItemModelInterface[] = [];

  constructor(private coreService:CoreService) {
    // this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [];
  }
  itemSub;
  removeItemSub;
  ngOnInit() {
    this.removeItemSub = this.coreService.removeItem$.subscribe((itemId:string) => {
      this.deleteEnd(itemId);
    })
    this.itemSub = this.coreService.getItems().subscribe((items:ItemModelInterface[]) => {
      this.todoList = [...items];
    })
  }

  ngOnDestroy() {
    if(this.removeItemSub) this.removeItemSub.unsubscribe();
  }

  saveLocalStorage() {
    localStorage.setItem('item', JSON.stringify(this.todoList));
  }

  addNewTitle(taskTitle:string) {
    this.todoList.push({
      title: taskTitle,
      id: Math.random().toString(36).substr(2, 9),
      completed: false
    })
    this.saveLocalStorage();
  }

  deleteEnd(itemId) {
    this.todoList = this.todoList.filter((item:ItemModelInterface) => item.id !== itemId);
    this.saveLocalStorage();
  }
}
