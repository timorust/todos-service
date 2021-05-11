import {Component, EventEmitter, Input} from '@angular/core';
import {ItemModelInterface} from "../../item-model.interface";

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() listTodos: ItemModelInterface[];
}
