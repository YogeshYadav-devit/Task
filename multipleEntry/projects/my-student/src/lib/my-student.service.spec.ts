import { TestBed } from '@angular/core/testing';

import { MyStudentService } from './my-student.service';

describe('MyStudentService', () => {
  let service: MyStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
