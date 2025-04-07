<script>
    import { locations, services } from "$lib/PoI.svelte";
    import Map from "$lib/Map.svelte";

    const filters = {
        housing: true
    };
    let showFilters = false;

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

 <div class="absolute bottom-6 right-4 min-w-2xs rounded-xl px-2 py-2 pb-4 bg-gray-200 shadow-md">
    <button
        class="w-full cursor-pointer"
        on:click=
            {
                () => {showFilters = !showFilters}
            }
    >
        <p class="text-center">Filtros</p>
    </button>
    <div class="w-7/8 mx-auto mt-2" hidden={!showFilters}>
        <!-- for filter in filters -->
        <div class="flex items-center">
            <input
                type="checkbox"
                bind:checked={filters.housing}
                id="showHousing"
                class="form-checkbox h-5 w-5 text-blue-500 border-none focus:ring-transparent focus:ring-offset-0 bg-gray-50 rounded-xs"
            />
            <label for="showHousing" class="ml-2 pb-0.5 text-sm hover:cursor-pointer">    
                Mostrar alojamiento
            </label>
        </div>
    </div>
</div>
