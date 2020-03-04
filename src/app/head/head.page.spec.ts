import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadPage } from './head.page';

describe('HeadPage', () => {
  let component: HeadPage;
  let fixture: ComponentFixture<HeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
