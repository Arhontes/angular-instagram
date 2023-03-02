import { Component } from '@angular/core'
import { Grade } from './child/child.component'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  grades: Grade[] = []

  getGrade(grade: Grade) {
    this.grades.push(grade)
  }
}
