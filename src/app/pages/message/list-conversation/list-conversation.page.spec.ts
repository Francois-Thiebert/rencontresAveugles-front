import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListConversationPage } from './list-conversation.page';

describe('ListConversationPage', () => {
  let component: ListConversationPage;
  let fixture: ComponentFixture<ListConversationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListConversationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
