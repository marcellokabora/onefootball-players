import { TestBed } from '@angular/core/testing'
import { Player, Profile } from '../interface/player'
import { PlayerService } from './player.service'
import {
  HttpClientTestingModule, HttpTestingController,
} from '@angular/common/http/testing'
import { mockPlayer, mockProfile } from 'src/mock/player'

describe('PlayerService', () => {

  let service: PlayerService
  let httpController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService]
    })
    service = TestBed.inject(PlayerService)
    httpController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should call getPlayer', () => {
    const id = 'fabio'
    service.getPlayer(id).subscribe((res) => {
      expect(res).toEqual(mockPlayer)
    })
    const req = httpController.expectOne({
      method: 'GET',
      url: `https://web-sandbox.onefootball.com/assignments/player/data/${id}.json`,
    })
    req.flush(mockPlayer)
  })

  it('should call getProfile', () => {
    const id = 'profile-111.json'
    service.getProfile(id).subscribe((res) => {
      expect(res).toEqual(mockProfile)
    })
    const req = httpController.expectOne({
      method: 'GET',
      url: `https://web-sandbox.onefootball.com/assignments/player/profile/${id}`,
    })
    req.flush(mockProfile)
  })


})
