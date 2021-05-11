import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoreService} from "../../core.service";

@Component({
  selector: 'tl-enter-item',
  templateUrl: './enter-item.component.html',
  styleUrls: ['./enter-item.component.scss']
})
export class EnterItemComponent implements OnInit {

  form:FormGroup;

  @Output() inputTitle$ = new EventEmitter(null);

  constructor(private formBuilder:FormBuilder,
              private coreService:CoreService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputTask: ['',[Validators.required, Validators.minLength(3)]]
    })
  }

  addTask() {
    if(this.form.valid) {
      const data = {
        title: this.form.value.inputTask,
        id: Math.random().toString(36).substr(2, 9),
        completed: false
      };
      this.coreService.saveItems(data).subscribe((response) => {
        console.log(response);
      })
    }
    else {
      alert('Please add task first');
    }
  }
}
