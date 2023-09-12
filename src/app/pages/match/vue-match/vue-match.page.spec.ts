import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueMatchPage } from './vue-match.page';

describe('VueMatchPage', () => {
  let component: VueMatchPage;
  let fixture: ComponentFixture<VueMatchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
