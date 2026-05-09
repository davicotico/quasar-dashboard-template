<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Map from 'ol/Map.js';
import './style.css';
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
  id: string;
  height?: string;
  zoom?: number;
  coordinate: {
    lon: number;
    lat: number;
  };
};
const props = withDefaults(defineProps<OLAttributes>(), {
  height: '400px',
  zoom: 15,
  coordinate: () => ({ lon: 0, lat: 0 }),
});

const url = ref('');

onMounted(() => {
  const coords = fromLonLat([props.coordinate.lon, props.coordinate.lat]);
  const marker = new Feature({
    geometry: new Point(coords),
  });
  marker.setStyle(
    new Style({
      image: new Icon({
        src: '/icons/favicon-32x32.png',
        //scale: 0.1,
      }),
      /*new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: 'red' }),
        stroke: new Stroke({ color: 'white', width: 2 }),
      }),*/
    }),
  );
  const vectorSource = new VectorSource({
    features: [marker],
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const map = new Map({
    target: props.id,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    view: new View({
      center: coords,
      zoom: props.zoom,
    }),
  });
  console.log(map);
  url.value = generateMapUrl();
});

function generateMapUrl() {
  const lon = props.coordinate.lon;
  const lat = props.coordinate.lat;
  const zoom = props.zoom;
  return `https://www.openstreetmap.org/#map=${zoom}/${lat}/${lon}`;
}
</script>
<template>
  <q-card>
    <q-card-section class="q-pa-none">
      <div :id="props.id" :style="`height: ${props.height}`" class="full-width"></div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <q-btn
        :href="url"
        target="_blank"
        label="Open"
        class="full-width"
        icon="open_in_new"
        flat
      ></q-btn>
    </q-card-section>
  </q-card>
</template>
