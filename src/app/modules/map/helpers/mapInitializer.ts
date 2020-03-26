import { Map, View } from 'ol';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';

import { map_declaration } from '../constants';

export function initializeMap(targer: string): Map {
  /* Map views always need a projection.  Here we just want to map image
    coordinates directly to map coordinates, so we create a projection that uses
     the image extent in pixels. */
  const extent = map_declaration.extend;
  const projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent,
  });
  return initMapWithProjection(targer, projection, extent);
}

export function initMapWithProjection(
  targer: string,
  projection: Projection,
  extent: number[]
): Map {
  return new Map({
    layers: [
      new ImageLayer({
        source: new Static({
          url: map_declaration.url,
          projection: projection,
          imageExtent: extent,
        }),
      }),
    ],
    target: targer,
    view: new View({
      projection: projection,
      center: getCenter(extent),
      zoom: 2,
      maxZoom: 8,
    }),
  });
}
