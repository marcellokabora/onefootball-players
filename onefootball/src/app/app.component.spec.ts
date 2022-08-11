import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, fakeAsync, inject, TestBed, waitForAsync } from '@angular/core/testing'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { By } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { mockProfile } from 'src/mock/player'
import { AppComponent } from './app.component'
import { PlayerService } from './service/player.service'

describe('AppComponent', () => {

  let service: PlayerService
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatInputModule,
        MatAutocompleteModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule
      ],
    }).compileComponents()

    service = TestBed.inject(PlayerService)
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})
