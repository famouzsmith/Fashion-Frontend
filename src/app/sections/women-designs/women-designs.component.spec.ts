import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDesignsComponent } from './women-designs.component';

describe('WomenDesignsComponent', () => {
  let component: WomenDesignsComponent;
  let fixture: ComponentFixture<WomenDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenDesignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
