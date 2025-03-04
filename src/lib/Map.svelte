<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';

    export let markers = [];

    let mapElement;
    let map;

    async function buildMap () {
        const leaflet = await import('leaflet');

        await removeMap();

        map = leaflet.map(mapElement).setView([32.522499, -117.046623], 13);
    
        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        markers.forEach(m => {
            m.element = leaflet.marker(m.geo).addTo(map);
            m.element.bindPopup(m.name).openPopup();
        });
    }

    async function removeMap () {
        if (map) {
            map.remove();
        }
    }

    onMount(buildMap);

    afterUpdate(buildMap);

    onDestroy(removeMap);
</script>


<main>
    <div class="z-0" bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 100vh;
    }
</style>