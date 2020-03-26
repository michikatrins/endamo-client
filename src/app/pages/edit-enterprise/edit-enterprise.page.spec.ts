import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEnterprisePage } from './edit-enterprise.page';

describe('EditEnterprisePage', () => {
  let component: EditEnterprisePage;
  let fixture: ComponentFixture<EditEnterprisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnterprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEnterprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
