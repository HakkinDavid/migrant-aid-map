<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import { services } from '$lib/PoI.svelte';
    import { PUBLIC_BASE_PATH } from '$env/static/public';

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
    
        leaflet.tileLayer(PUBLIC_BASE_PATH + '/tiles/{z}/{x}/{y}.png', {
            maxZoom: 15,
            minZoom: 12,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            errorTileUrl: PUBLIC_BASE_PATH + '/tiles/miss.png'
        }).addTo(map);

        if (!houseIcon) {
            // if screen size etc etc size can change for visual clarity
            houseIcon = leaflet.icon({iconUrl: PUBLIC_BASE_PATH + '/house.png', iconSize: [30,30]});
        }

        icons = {
            housing: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/house.png', iconSize: [30, 30] }),
            feeding: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/food.png', iconSize: [30, 30] }),
            consulate: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/consulate.png', iconSize: [30, 30] }),
            humanRights: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/rights.png', iconSize: [30, 30] }),
            public: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/public.png', iconSize: [30, 30] }),
            justice: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/justice.png', iconSize: [30, 30] }),
            lgbti: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/lgbti.png', iconSize: [30, 30] }),
            women: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/women.png', iconSize: [30, 30] }),
            children: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/children.png', iconSize: [30, 30] }),
            health: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/health.png', iconSize: [30, 30] }),
            international: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/international.png', iconSize: [30, 30] }),
            education: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/education.png', iconSize: [30, 30] }),
            orientation: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/orientation.png', iconSize: [30, 30] }),
            transport: leaflet.icon({ iconUrl: PUBLIC_BASE_PATH + '/transport.png', iconSize: [30, 30] })
        };

        if (!dotIcon) {
            dotIcon = leaflet.icon({iconUrl: PUBLIC_BASE_PATH + '/dot.png', iconSize: [50,50]});
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
                const marker = leaflet.marker(m.geo, { icon }).addTo(map).bindPopup(m.name + (m.url && m.url.length > 0 ? "<br><a href=" + m.url + ">Más información</a>" : ""));
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