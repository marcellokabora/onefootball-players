import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerstatComponent } from './playerstat.component'

describe('PlayerstatComponent', () => {
  let component: PlayerstatComponent
  let fixture: ComponentFixture<PlayerstatComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerstatComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(PlayerstatComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
