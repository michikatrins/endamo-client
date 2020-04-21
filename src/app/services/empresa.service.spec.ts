import { TestBed, getTestBed } from '@angular/core/testing';

import { EmpresaService } from './empresa.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

<<<<<<< HEAD
// describe('EmpresaService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: EmpresaService = TestBed.get(EmpresaService);
//     expect(service).toBeTruthy();
//   });
// });
=======
describe('EmpresaService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });
  
  it('should return the enterprise data', () => {
    const service: EmpresaService = TestBed.get(EmpresaService);
    let exampleUser = {};
    let email = localStorage.getItem('correo')
    service.getData(email).subscribe(res => {
      expect(res).toEqual(exampleUser);
    });
    const req = httpMock.expectOne(`https://endamo-api.herokuapp.com/empresa/edit/${email}`);
    expect(req.request.method).toBe('GET');
    req.flush(exampleUser);
  });  

});
>>>>>>> origin/develop
