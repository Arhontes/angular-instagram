import { Component } from '@angular/core'

@Component({
  selector: 'inst-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {
  text = ''
  changeText(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
}
