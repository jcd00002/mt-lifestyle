import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Gt500CardsComponent } from 'src/body/GT500 Cards/gt500-cards.component';



describe('GT500CardsComponent', () => {
  let component: Gt500CardsComponent;
  let fixture: ComponentFixture<Gt500CardsComponent>;
  let cardDe: DebugElement; 
  let cardEl: HTMLElement; 
  let expectedCardDesription: string = "GT500 Parts"; 
  let expectedCardPrice: number = 25; 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [Gt500CardsComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt500CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cardDe = fixture.debugElement.query(By.css('.card')); 
    cardEl = cardDe.nativeElement; 

    component.description = "GT500 Parts"; 
    component.price = 25; 
    fixture.detectChanges();  
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display card description in uppercase', () => {
      expect(cardEl.textContent).toContain(expectedCardDesription); 
  }); 

  it('should display card price', () => {
    expect(cardEl.textContent).toContain(expectedCardPrice); 
}); 

});