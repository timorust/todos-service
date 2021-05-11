import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemModelInterface} from "../../item-model.interface";
import {CoreService} from "../../core.service";

@Component({
  selector: 'tl-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() itemTodos: ItemModelInterface;
  constructor(private coreService:CoreService) {
  }

  deleteItem(itemId) {
    this.coreService.removeItem(itemId);
  }

 toggleDone(){
    this.itemTodos.completed = !this.itemTodos.completed;
  }
}
