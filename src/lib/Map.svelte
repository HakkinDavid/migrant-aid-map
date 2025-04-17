<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import { services } from '$lib/PoI.svelte';

    const TIJUANA_CENTER = [32.522499, -117.046623];
    
    export let markers = [];
    export let m_id = [];
    
    let positionMarker;
    let mapElement;
    let map;
    let dotIcon;
    let houseIcon;
    let icons = {};
    let posWatcher;
    let showAbout = false;

    let typeByLocationName = {};

    for (const [type, names] of Object.entries(services)) {
        names.forEach(name => {
            typeByLocationName[name] = type;
        });
    }

    async function buildMap () {
        const leaflet = await import('leaflet');
        const { Geolocation } = await import('@capacitor/geolocation');

        await removeMap();

        map = leaflet.map(mapElement, {
            center: TIJUANA_CENTER,
            zoom: 12,
            maxBounds: [
                [32.532838, -117.134573],
                [32.571187, -116.688688],
                [32.184594, -116.683403],
                [32.280616, -116.524034]
            ],
            maxBoundsViscosity: 1.0
        });
    
        leaflet.tileLayer('/tiles/{z}/{x}/{y}.png', {
            maxZoom: 15,
            minZoom: 12,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            errorTileUrl: '/tiles/miss.png'
        }).addTo(map);

        if (!houseIcon) {
            // if screen size etc etc size can change for visual clarity
            houseIcon = leaflet.icon({iconUrl: '/house.png', iconSize: [30,30]});
        }

        icons = {
            housing: leaflet.icon({ iconUrl: '/house.png', iconSize: [30, 30] }),
            feeding: leaflet.icon({ iconUrl: '/food.png', iconSize: [30, 30] }),
            consulate: leaflet.icon({ iconUrl: '/consulate.png', iconSize: [30, 30] }),
            humanRights: leaflet.icon({ iconUrl: '/rights.png', iconSize: [30, 30] })
        };

        if (!dotIcon) {
            dotIcon = leaflet.icon({iconUrl: '/dot.png', iconSize: [50,50]});
        }

        await addMarkers();
        
        posWatcher = await Geolocation.watchPosition({}, updatePositionMarker);
    }

    async function removeMap () {
        if (posWatcher) {
            const { Geolocation } = await import('@capacitor/geolocation');
            Geolocation.clearWatch({id: posWatcher});
        }
        if (map) {
            map.removeLayer(positionMarker);
            map.remove();
        }
        positionMarker = undefined;
        dotIcon = undefined;
        posWatcher = undefined;
    }

    async function addMarkers () {
        if (map) {
            const leaflet = await import('leaflet');
            markers.forEach(m => {
                const type = typeByLocationName[m.key];
                const icon = icons[type] || icons.housing;
                const marker = leaflet.marker(m.geo, { icon }).addTo(map).bindPopup(m.name);
                m_id.push(marker);
            });
        }
    }

    function removeMarkers () {
        if (map) {
            m_id.forEach(m => {
                map.removeLayer(m);
            });
        }
    }

    async function updatePositionMarker (position) {
        if (!map || !position) return;

        if (positionMarker) {
            console.log('Updated position to ' + position.coords.latitude + ',' + position.coords.longitude);
            positionMarker.setLatLng([position.coords.latitude, position.coords.longitude]);            
        }
        else {
            const leaflet = await import('leaflet');
            positionMarker = leaflet.marker([position.coords.latitude, position.coords.longitude], {icon: dotIcon}).addTo(map);
            positionMarker.bindPopup("Ubicación actual");
            map.setView([position.coords.latitude, position.coords.longitude], 13);
        }
    }

    async function updateMap () {
        removeMarkers();
        await addMarkers();
    }

    function toggleAbout() {
        showAbout = !showAbout;
    }

    onMount(buildMap);

    afterUpdate(updateMap);

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