import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterprisePage } from './edit-enterprise.page';
import { EmpresaService } from 'src/app/services/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

// describe('EditEnterprisePage', () => {
//   let component: EditEnterprisePage;
//   let fixture: ComponentFixture<EditEnterprisePage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditEnterprisePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(EditEnterprisePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
