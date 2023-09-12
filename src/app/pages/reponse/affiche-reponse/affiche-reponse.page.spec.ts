import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfficheReponsePage } from './affiche-reponse.page';

describe('AfficheReponsePage', () => {
  let component: AfficheReponsePage;
  let fixture: ComponentFixture<AfficheReponsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfficheReponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
