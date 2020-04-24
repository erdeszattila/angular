import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  isItOpen = false;
  @HostBinding('class.open') elementClassOpen;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isItOpen = !this.isItOpen;
    this.elementClassOpen = this.isItOpen;
  }
}
