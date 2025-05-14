import { Component, OnInit } from '@angular/core';

import { EventService } from '../core/services/event.service';
import {
  LAYOUT_VERTICAL, LAYOUT_HORIZONTAL, LAYOUT_TWOCOLUMN, LAYOUT_MODE, LAYOUT_WIDTH,
  LAYOUT_POSITION, SIDEBAR_SIZE, SIDEBAR_COLOR, TOPBAR,
  BODY_IMAGE
} from './layout.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

/**
 * Layout Component
 */
export class LayoutComponent implements OnInit {

  layoutType!: string;
  sidebarSize!: string;
  bodyImage!: string;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    const storedBodyImage = sessionStorage.getItem('data-body-image');
    this.bodyImage = storedBodyImage || BODY_IMAGE;
  
    this.layoutType = LAYOUT_VERTICAL;

    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout) => {
      this.layoutType = layout;
    });

    this.sidebarSize = SIDEBAR_SIZE;
    document.documentElement.setAttribute('data-sidebar-size', this.sidebarSize);

    this.bodyImage = BODY_IMAGE;
    document.documentElement.setAttribute('data-body-image', this.bodyImage);

  }

  /**
  * Check if the vertical layout is requested
  */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isTwoColumnLayoutRequested() {
    return this.layoutType === LAYOUT_TWOCOLUMN;
  }

}
