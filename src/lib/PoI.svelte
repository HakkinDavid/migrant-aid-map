<script context="module">
    class Location {
        name = "Ubicación";
        geo = [0.0,0.0];
        
        constructor (name, geo) {
            this.name = name;
            this.geo = geo;
        }
    };

    export const locations = {
        CasaMigrante: new Location ("Casa del Migrante en Tijuana, AC", [32.522813, -117.001688])
    };

    export const services = {
        housing: ["CasaMigrante"]
    };
</script>