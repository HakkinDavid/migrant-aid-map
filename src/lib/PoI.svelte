<script context="module">
    class Location {
        name = "Ubicación";
        geo = [0.0,0.0];
        url = ""
        
        constructor (name, geo, url) {
            this.name = name;
            this.geo = geo;
            this.url = url || "";
        }
    };

    export const locations = {
        CasaMigrante: new Location ("Casa del Migrante en Tijuana, AC", [32.522813, -117.001688]),
        MadreAsunta: new Location ("Instituto Madre Asunta, AC", [32.523438, -117.001437]),
        PuertaEsperanza: new Location ("Ejército de Salvación | Casa Puerta de Esperanza", [32.543563, -117.006563]),
        AlbergueEmigrantes: new Location ("Ejército de Salvación | Albergue para Emigrantes", [32.535313, -117.012438]),
        YMCAMenores: new Location ("Casas YMCA de Menores Migrantes", [32.513813, -117.021563]),
        EspacioMigrante: new Location ("Espacio Migrante", [32.538313, -117.034312]),
        JardinMariposas: new Location ("Jardín de las Mariposas", [32.520063, -117.064063]),

        PadreChava: new Location ("Desayunador Salesiano \"Padre Chava\"", [32.536812, -117.032187]),

        ConsuladoElSalvador: new Location ("Consulado de la República de El Salvador en Tijuana", [32.521687, -117.013437]),
        ConsuladoHonduras: new Location ("Consulado General de Honduras en Tijuana", [32.520313, -117.012687]),
        ConsuladoGuatemala: new Location ("Consulado General de Guatemala en Tijuana", [32.524812, -117.014188]),
        ConsuladoEstadosUnidos: new Location ("Consulado General de los Estados Unidos en Tijuana", [32.523313, -116.952438], "https://mx.usembassy.gov/es/visas-es/u-s-embassy-mexico-city-es/u-s-consulate-general-tijuana-es/"),

        CEDH: new Location("Comisión Estatal de los Derechos Humanos de Baja California en Tijuana", [32.504438, -116.951188]),
        CNDH: new Location("Comisión Nacional de los Derechos Humanos, Sede Regional Tijuana", [32.521687, -117.008562])
    };

    export const services = {
        housing: ["CasaMigrante", "MadreAsunta", "PuertaEsperanza", "AlbergueEmigrantes", "YMCAMenores", "EspacioMigrante", "JardinMariposas"],
        feeding: ["PadreChava"],
        consulate: ["ConsuladoElSalvador", "ConsuladoHonduras", "ConsuladoGuatemala", "ConsuladoEstadosUnidos"],
        humanRights: ["CEDH", "CNDH"]
    };
</script>