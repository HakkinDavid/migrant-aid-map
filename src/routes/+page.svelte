<script>
    import { locations, services } from "$lib/PoI.svelte";
    import Map from "$lib/Map.svelte";

    const filters = {
        housing: true
    };

    async function getMarkers () {
        let finalLocations = {};
        for (let f in filters) {
            if (filters[f]) {
                services[f].forEach((element) => {
                    if (!finalLocations[element]) {
                        finalLocations[element] = locations[element];
                    };
                });
            }
        }
        return Object.values(finalLocations);
    }
</script>

<svelte:head>
    <title>Servicio de apoyo migrante</title>
</svelte:head>

{#await getMarkers()}
    <div>
        Cargando ...
    </div>
{:then L}
    <Map markers={L} />
{/await}

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    class="absolute bottom-12 right-12 rounded-lg px-2 py-2"
    class:bg-red-300={filters.housing}
    class:bg-green-300={!filters.housing}
    on:click=
        {
            () => {filters.housing = !filters.housing}
        }
>
    {#if filters.housing}
        Ocultar alojamiento
    {:else}
        Mostrar alojamiento
    {/if}
</button>