import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class DomUtilsService {
  static getContentHeight(el: HTMLElement): number {
    return ['padding-top', 'padding-bottom'].reduce((prevValue: number, prop: string) => {
      return prevValue - Number.parseInt(this.getPropValueByEl(el, prop), 10) || 0;
    }, el.clientHeight);
  }

  static getPropValueByEl(el: HTMLElement, prop: string): string {
    return window.getComputedStyle(el, null).getPropertyValue(prop);
  }

  static calculateScrollbarWidth(renderer: Renderer2): number {
    const scrollDiv = renderer.createElement('div');

    renderer.addClass(scrollDiv, 'scrollbar-block');
    renderer.appendChild(document.body, scrollDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    renderer.removeChild(document.body, scrollDiv);

    return scrollbarWidth;
  }

  static getMiddleXPosition(el: HTMLElement): number {
    const elPositions = el.getBoundingClientRect();

    return elPositions.left + elPositions.width / 2;
  }
}
