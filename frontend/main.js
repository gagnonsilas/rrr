import './style.css';
import './login.html';

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Zoomify from 'ol/source/Zoomify';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { circular } from 'ol/geom/Polygon';
import Control from 'ol/control/Control';
import { Text, Fill, Icon, Style } from 'ol/style';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 1
  })
});

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
});
map.addLayer(layer);

const style = new Style({
  fill: new Fill({
    color: 'rgba(0, 0, 255, 0.2)',
  }),
  image: new Icon({
    src: './data/location-heading.svg',
    imgSize: [27, 55],
    rotateWithView: true,
  }),
  text: new Text({
    text: "Person 2",
    offsetY: 25,
    font: "20px sans-serif"
  })
});
layer.setStyle(style);

const locate = document.createElement('div');
locate.className = 'ol-control ol-unselectable locate';
locate.innerHTML = '<button title="Locate me">◎</button>';
locate.addEventListener('click', function () {
  if (!source.isEmpty()) {
    map.getView().fit(source.getExtent(), {
      maxZoom: 18,
      duration: 500,
    });
  }
});
map.addControl(
  new Control({
    element: locate,
  })
);

function updatePosition(pos) {
  const coords = [pos.longitude, pos.latitude];
  const accuracy = circular(coords, 20);
  source.clear(true);
  source.addFeatures([
    new Feature(
      accuracy.transform('EPSG:4326', map.getView().getProjection())
    ),
    new Feature(new Point(fromLonLat(coords))),
  ]);
}

updatePosition({
  longitude: 0,
  latitude: 0
});