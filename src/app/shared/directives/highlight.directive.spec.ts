import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'fake-component',
  template: '<div appHighlight></div>',
})
class FakeComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<FakeComponent>;
  let $component: HTMLElement;
  let directive: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeComponent, HighlightDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(FakeComponent);
    /*
    <fake-component>
      <div appHighlight></div>
    </fake-component>
    */
    directive = fixture.debugElement.query(By.directive(HighlightDirective))
    $component = directive.nativeElement;
    fixture.detectChanges();
  })

  it('should add highlight class', () => {
    directive.triggerEventHandler('mouseover');
    fixture.detectChanges();
    expect($component.classList.contains('border')).toEqual(true);
  });

  it('should remove highlight class', () => {
    $component.classList.add('border');
    fixture.detectChanges();
    directive.triggerEventHandler('mouseleave');
    fixture.detectChanges();
    expect($component.classList.contains('border')).toEqual(false);
  });
});