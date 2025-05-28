<script>
	import { browser } from "$app/environment";
	import Modal from "$lib/Modal.svelte";
    import Button from "$lib/Button.svelte";

    let showDownload = $state(false);
    let showLinks = $state(false);

    const emails = [
        "david.santana@cetys.edu.mx",
        "mauricio.alcantar@cetys.edu.mx",
        "diego.casta@cetys.edu.mx",
        "ingrid.kuri@cetys.mx"
    ];

    const platforms = [
      {
        name: 'Android (APK)',
        icon: 'M21.94 17.56s-.01-.08-.02-.12a10 10 0 0 0-1-2.99c-.48-.92-1.1-1.76-1.83-2.49a10.4 10.4 0 0 0-1.77-1.41s0-.01.01-.02c.2-.35.4-.7.61-1.05l.59-1.02c.14-.24.28-.49.42-.73.14-.25.16-.55.05-.82a.93.93 0 0 0-.38-.43c-.12-.07-.25-.11-.39-.13h-.17c-.29.03-.55.2-.7.45-.14.24-.28.49-.42.73l-.59 1.02c-.2.35-.4.7-.61 1.05-.02.04-.04.08-.07.11-.03-.01-.06-.02-.09-.04-1.11-.42-2.32-.66-3.58-.66h-.1a10 10 0 0 0-3.55.69c-.02-.04-.04-.07-.06-.11-.2-.35-.4-.7-.61-1.05l-.59-1.02c-.14-.24-.28-.49-.42-.73a.9.9 0 0 0-.87-.45c-.14.01-.27.05-.39.13-.13.08-.24.19-.32.32l-.06.12c-.09.2-.1.43-.03.64.02.06.05.12.08.18.14.24.28.49.42.73.2.34.39.68.59 1.02.2.35.4.7.61 1.05-.41.25-.79.53-1.16.84-.66.55-1.24 1.18-1.73 1.88a10.021 10.021 0 0 0-1.73 4.18c0 .04-.01.08-.02.12l-.06.44h20l-.06-.44ZM8.13 14.82c-.33.49-.92.68-1.32.41s-.46-.88-.13-1.38c.33-.49.92-.68 1.32-.41s.46.88.13 1.38m9.07.41c-.4.27-.99.08-1.32-.41s-.27-1.11.13-1.38.99-.08 1.32.41.27 1.11-.13 1.38',
        link: 'https://github.com/HakkinDavid/migrant-aid-map/releases/download/latest/migrant-aid-map-android.apk',
        is_disabled: false,
        enabled: 'bg-green-600',
        disabled: 'disabled:bg-green-100 disabled:cursor-not-allowed',
        hover: 'hover:bg-green-500',
        text: 'text-white',
        fill: '#FFFFFF'
      },
      {
        name: 'Google Play Store',
        icon: 'm12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098zm8.854 8.855L4.902 20.91q.232.09.495.09.47 0 .968-.276l9.255-5.197z',
        link: '',
        is_disabled: true,
        enabled: 'bg-rose-600',
        disabled: 'disabled:bg-rose-100 disabled:cursor-not-allowed',
        hover: 'hover:bg-rose-500',
        text: 'text-white disabled:text-black',
        fill: '#000000'
      },
      {
        name: 'App Store',
        icon: 'M19.665 16.811a10.3 10.3 0 0 1-1.021 1.837q-.807 1.15-1.316 1.592-.787.723-1.692.744-.649.001-1.562-.373-.914-.372-1.683-.371-.805-.001-1.73.371-.924.375-1.495.393-.866.038-1.729-.764-.55-.48-1.377-1.648-.885-1.245-1.455-2.891-.61-1.78-.611-3.447 0-1.91.826-3.292a4.86 4.86 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662q.69.001 1.81.422c1.12.421 1.227.422 1.436.422q.237 0 1.593-.498 1.279-.46 2.163-.384 2.4.192 3.6 1.895-2.145 1.301-2.123 3.637.02 1.82 1.317 3.023a4.3 4.3 0 0 0 1.315.863q-.159.46-.336.882M15.998 2.38q-.001 1.426-1.039 2.659c-.836.976-1.846 1.541-2.941 1.452a3 3 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688q.528-.606 1.343-1.009.813-.397 1.536-.435.02.192.019.381',
        link: '',
        is_disabled: true,
        enabled: 'bg-black',
        disabled: 'disabled:bg-gray-100 disabled:cursor-not-allowed',
        hover: 'hover:bg-gray-600',
        text: 'text-white disabled:text-black',
        fill: '#000000'
      }
    ];

    function download (link) {
        if (browser) {
            window.open(link, "_blank");
        }
    }
</script>

<Button bind:value={showDownload} color="bg-green-500">
    {#snippet icon()}
        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
            fill="#ffffff" viewBox="0 0 24 24" >
            <path d="m21.8 6.4-2.7-3.6c-.38-.5-.97-.8-1.6-.8h-11c-.63 0-1.23.3-1.6.8L2.2 6.4h.01c-.13.18-.21.37-.21.6v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-.23-.09-.42-.21-.59h.01ZM6.5 4h11L19 6H5zM4 20V8h16v12z"></path><path d="M13 10h-2v4H8l4 4 4-4h-3z"></path>
        </svg>
    {/snippet}
</Button>

<!-- Modal de descarga -->
<Modal bind:active={showDownload}>
    {#snippet header()}
        Descarga el mapa como app
    {/snippet}
    {#snippet body()}
        La aplicación es ligera y simple, funciona sin conexión y te permitirá estar siempre ubicado.
        <br>
        Necesitamos fondos para pagar las licencias de Google y Apple. Usa los medios de contacto a continuación si estás en posibilidad de donar y apoyar este proyecto.
        <br>
    {/snippet}
    {#snippet footer()}
        <strong>Contacto para donaciones:</strong><br>
        {#each emails as email}
            <a href="mailto:{email}" class="text-blue-600 underline" target="_blank">{email}</a><br>
        {/each}
    {/snippet}
    {#snippet children()}
        <button
            class="bg-blue-800 text-white w-full text-center py-2 rounded hover:bg-blue-700 cursor-pointer"
            onclick={
                () => {showLinks = !showLinks}
            }
        >
            Descargar
        </button>
    {/snippet}
</Modal>

<!-- Modal de enlaces -->
<Modal bind:active={showLinks}>
    {#snippet header()}
        ¡Aún no podemos publicar en las tiendas oficiales!
    {/snippet}
    {#snippet body()}
        Solo necesitamos reunir 25 USD para publicar en Google Play Store (Android) y 100 USD para publicar en App Store (iOS).
        <br>
        El proyecto puede descargarse e instalarse de manera independiente en los siguientes botones.
    {/snippet}
    {#snippet footer()}
        <strong>Contacto para donaciones:</strong><br>
        {#each emails as email}
            <a href="mailto:{email}" class="text-blue-600 underline" target="_blank">{email}</a><br>
        {/each}
    {/snippet}
    {#snippet children()}
        <strong class="text-sm">Plataformas</strong>
        {#each platforms as platform}
            <button
                class="flex place-items-center place-content-center gap-2 {platform.enabled} {platform.disabled} {platform.text} w-full text-center py-2 text-center align-middle rounded {platform.hover} cursor-pointer"
                onclick={() => download(platform.link)}
                disabled='{platform.is_disabled}'
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                    fill="{platform.fill}" viewBox="0 0 24 24" >
                    <path d="{platform.icon}"></path>
                </svg>
                <span class="text-center align-middle h-full">{platform.name}</span>
            </button>
        {/each}
    {/snippet}
</Modal>