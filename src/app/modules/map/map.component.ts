import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';

import { initializeMap } from './helpers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map: Map;

  constructor() {}

  ngOnInit(): void {
    this.map = initializeMap('map');
  }

  public mapClicked(event: any) {
    console.log(event);
  }
}
