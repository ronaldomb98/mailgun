import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgunComponent } from './mailgun.component';

describe('MailgunComponent', () => {
  let component: MailgunComponent;
  let fixture: ComponentFixture<MailgunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailgunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
