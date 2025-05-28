<script>
    let {
        value = $bindable(false),
        label = "",
        size = "w-16 h-16",
        color = "bg-cyan-500",
        icon
    } = $props();
</script>

<!-- Botón -->
<button
    class="flex place-items-center place-content-center rounded-full {color} shadow-md {size} cursor-pointer"
    onclick={
            () => {value = !value}
        }
    aria-label="{label}"
>
    {#if icon}
        {@render icon()}
    {/if}
</button>