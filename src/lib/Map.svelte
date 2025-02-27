<script>
    import { onMount, onDestroy } from 'svelte';

    let mapElement;
    let map;

    onMount(async () => {
        const leaflet = await import('leaflet');

        let map = L.map('map').setView([32.522499, -117.046623], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    
        let marker = L.marker([32.522813, -117.001688]).addTo(map);
        marker.bindPopup("Casa del Migrante en Tijuana, AC").openPopup();
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>