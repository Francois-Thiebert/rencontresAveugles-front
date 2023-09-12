import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReponsePage } from './reponse.page';

describe('ReponsePage', () => {
  let component: ReponsePage;
  let fixture: ComponentFixture<ReponsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
