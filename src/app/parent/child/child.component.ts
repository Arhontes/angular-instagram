import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface Grade {
  math?: string
  chemical?: string
}
@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() sendGrade = new EventEmitter<Grade>()

  grade = ''

  sendGradeHandler() {
    const newGrade: Grade = {
      math: this.grade,
      chemical: this.grade,
    }
    this.sendGrade.emit(newGrade)
  }
}
