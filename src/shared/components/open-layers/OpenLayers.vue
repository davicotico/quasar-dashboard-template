<script setup lang="ts">
import { onMounted } from 'vue';
import './style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Style, /*Circle as CircleStyle,*/ Icon } from 'ol/style.js';
//import Fill from 'ol/style/Fill';
//import Stroke from 'ol/style/Stroke';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

type OLAttributes = {
  height: string;
  coordinates: string;
};
//const props =
defineProps<OLAttributes>();
onMounted(() => {
  const coords = fromLonLat([-68.13446, -16.497192]);
  const marker = new Feature({
    geometry: new Point(coords),
  });
  marker.setStyle(
    new Style({
      image: new Icon({
        src: '/icons/favicon-16x16.png',
        scale: 0.1,
      }) /*new CircleStyle({
        radius: 8,
        fill: new Fill({ color: 'red' }),
        stroke: new Stroke({ color: 'white', width: 2 }),
      }),*/,
    }),
  );
  const vectorSource = new VectorSource({
    features: [marker],
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    view: new View({
      center: coords,
      zoom: 12,
    }),
  });
  console.log(map);
});
</script>
<template>
  <div id="map" style="height: 400px" class="full-width"></div>
</template>
