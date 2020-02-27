import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HometwoPage } from './hometwo.page';

describe('HometwoPage', () => {
  let component: HometwoPage;
  let fixture: ComponentFixture<HometwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HometwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
