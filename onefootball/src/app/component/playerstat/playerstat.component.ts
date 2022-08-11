import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-playerstat',
  templateUrl: './playerstat.component.html',
  styleUrls: ['./playerstat.component.scss']
})
export class PlayerstatComponent {

  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() stat: number = 0

}
