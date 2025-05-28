<script>
    import { locations, services } from "$lib/PoI.svelte";
    import { Capacitor } from '@capacitor/core';
    import Map from "$lib/Map.svelte";
    import DownloadButton from "$lib/DownloadButton.svelte";
	import Modal from "$lib/Modal.svelte";

    const filters = $state({
        housing: true,
        feeding: true,
        consulate: true,
        humanRights: true,
        public: true,
        justice: true,
        lgbti: true,
        women: true,
        children: true,
        health: true,
        international: true,
        education: true,
        orientation: true,
        transport: true
    });
    let showFilters = $state(false);

    const labels = {
        housing: "Albergues",
        feeding: "Alimentación",
        consulate: "Consulados",
        humanRights: "Derechos Humanos",
        public: "Instituciones Públicas",
        justice: "Justicia",
        lgbti: "LGBTI",
        women: "Mujeres",
        children: "Niñez y Juventud",
        health: "Salud",
        international: "Organismos Internacionales",
        education: "Educación",
        orientation: "Orientación y Apoyo",
        transport: "Transporte"
    }

    let showAbout = $state(false);

    function toggleAbout() {
        showAbout = !showAbout;
        console.log("Cambiado");
    }

    async function getMarkers () {
        let finalLocations = {};
        for (let f in filters) {
            if (filters[f]) {
                services[f].forEach((key) => {
                    if (!finalLocations[key]) {
                        finalLocations[key] = {
                            ...locations[key],
                            key
                        };
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

<!-- Botón de filtros -->
 <div class="absolute bottom-6 right-4 pointer-events-auto">
    <button
        class="flex place-items-center place-content-center rounded-full bg-gray-500 shadow-md w-16 h-16 text-4xl cursor-pointer"
        onclick=
            {
                () => {showFilters = !showFilters}
            }
    >
        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
            fill="#ffffff" viewBox="0 0 24 24" >
            <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="m12,2C6.49,2,2,6.49,2,12s4.49,10,10,10,10-4.49,10-10S17.51,2,12,2Zm0,18c-4.41,0-8-3.59-8-8S7.59,4,12,4s8,3.59,8,8-3.59,8-8,8Z"></path><path d="M12 10.5A1.5 1.5 0 1 0 12 13.5 1.5 1.5 0 1 0 12 10.5z"></path><path d="M16.5 10.5A1.5 1.5 0 1 0 16.5 13.5 1.5 1.5 0 1 0 16.5 10.5z"></path><path d="M7.5 10.5A1.5 1.5 0 1 0 7.5 13.5 1.5 1.5 0 1 0 7.5 10.5z"></path>
        </svg>
    </button>
</div>

<Modal bind:active={showFilters}>
    {#snippet header()}
        <p class="text-center align-middle font-semibold">Filtros</p>
    {/snippet}
    {#snippet body()}
        <!-- for filter in filters -->
        {#each Object.keys(filters) as f}
        <div class="flex items-center">
            <input
                type="checkbox"
                bind:checked={filters[f]}
                id="{f}"
                class="form-checkbox h-5 w-5 text-blue-500 border-none focus:ring-transparent focus:ring-offset-0 bg-gray-50 rounded-xs cursor-pointer"
            />
            <label for="{f}" class="ml-2 pb-0.5 text-sm hover:cursor-pointer">    
                {labels[f]}
            </label>
        </div>
        {/each}
    {/snippet}
</Modal>

<!-- Botón de información -->
<div class="absolute top-4 right-4 pointer-events-auto">
    <button
        class="flex place-items-center place-content-center rounded-full bg-cyan-500 shadow-md w-16 h-16 text-4xl cursor-pointer"
        onclick={toggleAbout}
        aria-label="Acerca del proyecto"
    >
        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
            fill="#ffffff" viewBox="0 0 24 24" >
            <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="M11 11h2v6h-2zM11 7h2v2h-2z"></path><path d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8"></path>
        </svg>
    </button>
</div>

{#if Capacitor.getPlatform() === 'web'}
    <!-- Botón de descarga del app (si es web) -->
    <div class="absolute top-24 right-4 pointer-events-auto">
        <DownloadButton />
    </div>
{/if}

<!-- Modal de información -->
<Modal bind:active={showAbout}>
    {#snippet header()}
        Acerca del proyecto
    {/snippet}

    {#snippet body()}
        Este proyecto nació al observar una necesidad urgente en las calles de Tijuana: personas migrantes buscando ayuda, orientación y un lugar seguro. 
        A partir de las necesidades observadas en Tijuana, surgió la idea de crear un mapa que no solo muestre ubicaciones, sino que muestre esfuerzos colectivos de la comunidad y conecte a las personas.
        <br>
        Esta herramienta ha sido construida con un enfoque comunitario, escuchando a quienes están migrando y colaborando con quienes ofrecen apoyo. 
        Es un gesto de solidaridad digital, hecho para acompañar, guiar y recordar que nadie camina solo.
        <br>
        <br>
    {/snippet}

    {#snippet footer()}
        <strong>Referencias:</strong><br>
        OIM. (2024). Seguimiento de flujos de población migrante. <a href="https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2024-05/dtm-q1-2024-tijuana.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a><br>
        OIM. (2023). Directorio de servicios gratuitos para personas migrantes, refugiadas, desplazadas y retornadas en Tijuana. <a href="https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2023-12/ficha-de-servicios_tijuana_2023.10oim_acnur.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a><br>
        OIM. (2023). Mapa de servicios para personas refugiadas y migrantes en Tijuana. <a href="https://help.unhcr.org/wp-content/uploads/sites/22/pdf/MapaTijuana.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a>
    {/snippet}
</Modal>