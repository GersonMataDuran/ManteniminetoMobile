import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtencionPage } from './atencion.page';

describe('AtencionPage', () => {
  let component: AtencionPage;
  let fixture: ComponentFixture<AtencionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
