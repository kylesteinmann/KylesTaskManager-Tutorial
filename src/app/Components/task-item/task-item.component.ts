import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from "../../Models/Task.model"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onDelete(task){
  this.onDeleteTask.emit(task)

}
}