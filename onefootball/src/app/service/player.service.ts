import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Player, Profile } from '../interface/player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  API_PLAYER = 'https://web-sandbox.onefootball.com/assignments/player/data/'
  API_PROFILE = 'https://web-sandbox.onefootball.com/assignments/player/profile/'

  constructor(
    private http: HttpClient
  ) { }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(this.API_PLAYER + id + '.json')
  }

  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(this.API_PROFILE + id)
  }

}
