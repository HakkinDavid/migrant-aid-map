<script>
    import { locations, services } from "$lib/PoI.svelte";
    import Map from "$lib/Map.svelte";

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

 <div class="absolute bottom-6 right-4 min-w-2xs rounded-xl px-2 py-2 bg-gray-200 shadow-md">
    <button
        class="w-full cursor-pointer"
        onclick=
            {
                () => {showFilters = !showFilters}
            }
    >
        <p class="text-center align-middle">Filtros</p>
    </button>

    <div class="w-7/8 mx-auto mt-2 mb-1 space-y-0.5" hidden={!showFilters}>
        <!-- for filter in filters -->
         {#each Object.keys(filters) as f}
        <div class="flex items-center">
            <input
                type="checkbox"
                bind:checked={filters[f]}
                id="{f}"
                class="form-checkbox h-5 w-5 text-blue-500 border-none focus:ring-transparent focus:ring-offset-0 bg-gray-50 rounded-xs"
            />
            <label for="{f}" class="ml-2 pb-0.5 text-sm hover:cursor-pointer">    
                {labels[f]}
            </label>
        </div>
        {/each}
    </div>
</div>

<!-- Botón de información -->
<div class="absolute top-4 right-4 z-[1000] pointer-events-auto">
    <button
        class="rounded-full bg-white shadow-md p-2 text-xl"
        onclick={toggleAbout}
        aria-label="Acerca del proyecto"
    >
        ℹ️
    </button>
</div>

<!-- Modal de información -->
{#if showAbout}
    <div class="fixed inset-0 flex justify-center items-center z-[1000]" style="background-color: rgba(0,0,0,0.5)" onclick={toggleAbout}>
        <div class="bg-white rounded-xl p-6 w-11/12 max-w-md shadow-lg" onclick={e => e.stopPropagation()}>
            <h2 class="text-xl font-bold mb-4">Acerca del proyecto</h2>
            <p class="text-gray-800 text-justify space-y-">
                Este proyecto nació al observar una necesidad urgente en las calles de Tijuana: personas migrantes buscando ayuda, orientación y un lugar seguro. 
                A partir de las necesidades observadas en Tijuana, surgió la idea de crear un mapa que no solo muestre ubicaciones, sino que muestre esfuerzos colectivos de la comunidad y conecte a las personas.
                <br>
                Esta herramienta ha sido construida con un enfoque comunitario, escuchando a quienes están migrando y colaborando con quienes ofrecen apoyo. 
                Es un gesto de solidaridad digital, hecho para acompañar, guiar y recordar que nadie camina solo.
                <br>
                <br>
            </p>

            <div class="mt-4 text-sm text-gray-700 leading-relaxed">
                <strong>Referencias:</strong><br>
                OIM. (2024). Seguimiento de flujos de población migrante. <a href="https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2024-05/dtm-q1-2024-tijuana.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a><br>
                OIM. (2023). Directorio de servicios gratuitos para personas migrantes, refugiadas, desplazadas y retornadas en Tijuana. <a href="https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2023-12/ficha-de-servicios_tijuana_2023.10oim_acnur.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a><br>
                OIM. (2023). Mapa de servicios para personas refugiadas y migrantes en Tijuana. <a href="https://help.unhcr.org/wp-content/uploads/sites/22/pdf/MapaTijuana.pdf" class="text-blue-600 underline" target="_blank">Ver PDF</a>
            </div>
            <button
                class="mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                onclick={toggleAbout}
            >
                Cerrar
            </button>
        </div>
    </div>
{/if}