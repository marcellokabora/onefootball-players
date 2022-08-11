import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { map, startWith, switchMap } from 'rxjs/operators'
import { Profile } from './interface/player'
import { PlayerService } from './service/player.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myControl = new FormControl('')

  options: string[] = ['fabio']
  filteredOptions: Observable<string[]> = of([])
  profile$: Observable<Profile> = of()

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

  selectPlayer(id: string) {
    this.profile$ = this.playerService.getPlayer(id).pipe(
      switchMap(player => this.playerService.getProfile(player['profile-id'])
        .pipe(map(profile => {
          profile.player = player
          return profile
        })))
    )
  }

  removePlayer() {
    this.profile$ = of()
    this.myControl.setValue('')
  }

}
