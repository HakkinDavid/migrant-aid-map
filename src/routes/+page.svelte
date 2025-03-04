<script>
    import { locations, services } from "$lib/PoI.svelte";
    import Map from "$lib/Map.svelte";

    let showHousing = false;

    async function getMarkers () {
        let finalLocations = {};
        if (showHousing) {
            services.housing.forEach((element) => {
                if (!finalLocations[element]) {
                    finalLocations[element] = locations[element];
                };
            });
        }
        return Object.values(finalLocations);
    }
</script>

{#await getMarkers()}
    <div>
        Cargando ...
    </div>
{:then L}
    <Map markers={L} />
{/await}

<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="absolute bottom-12 right-12 rounded-lg bg-{showHousing ? 'red' : 'green'}-300 px-2 py-2"
    on:click=
        {
            () => {showHousing = !showHousing}
        }
>
    {#if showHousing}
        Ocultar alojamiento
    {:else}
        Mostrar alojamiento
    {/if}
</button>