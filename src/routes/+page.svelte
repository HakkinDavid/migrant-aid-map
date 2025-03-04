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

<h1>BIENVENIDO, AMIGO(A)</h1>

{#await getMarkers()}
    <div>
        Cargando ...
    </div>
{:then L}
    <Map markers={L} />
{/await}

<!-- svelte-ignore a11y_consider_explicit_label -->
<button on:click={
    () => {showHousing = !showHousing}
}>{#if showHousing} ocultar casas {:else} mostrar casas {/if}</button>