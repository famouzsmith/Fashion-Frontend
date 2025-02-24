import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleDesignsComponent } from './male-designs.component';

describe('MaleDesignsComponent', () => {
  let component: MaleDesignsComponent;
  let fixture: ComponentFixture<MaleDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaleDesignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaleDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
