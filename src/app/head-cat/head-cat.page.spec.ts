import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadCatPage } from './head-cat.page';

describe('HeadCatPage', () => {
  let component: HeadCatPage;
  let fixture: ComponentFixture<HeadCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
