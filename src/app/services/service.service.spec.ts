import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServiceService } from './service.service';


describe('ServiceService(login y registro)', () => {
  let injector: TestBed;
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    injector = getTestBed();
    service = injector.get(ServiceService);
    httpMock = injector.get(HttpTestingController);
  });

  const loginData = {
    email: 'jorge@usac.com',
    password: '123'
  };

  it('validar datos incorrectos', async function () {
    expect(service.verificarLogin(loginData)).toBe(true);
  });

});