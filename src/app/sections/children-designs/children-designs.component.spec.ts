import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDesignsComponent } from './children-designs.component';

describe('ChildrenDesignsComponent', () => {
  let component: ChildrenDesignsComponent;
  let fixture: ComponentFixture<ChildrenDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenDesignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
