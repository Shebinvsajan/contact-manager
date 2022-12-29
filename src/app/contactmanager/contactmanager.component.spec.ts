import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmanagerComponent } from './contactmanager.component';

describe('ContactmanagerComponent', () => {
  let component: ContactmanagerComponent;
  let fixture: ComponentFixture<ContactmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
