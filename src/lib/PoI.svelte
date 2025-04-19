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
        CNDH: new Location("Comisión Nacional de los Derechos Humanos, Sede Regional Tijuana", [32.521687, -117.008562]),

        INM: new Location ("Instituto Nacional de Migración (INM)", [32.504937, -116.952313]),
        COMAR: new Location ("Comisión Mexicana de Ayuda a Refugiados (COMAR)", [32.539063, -117.059812]),
        DIF1: new Location ("Subprocuraduría para la Defensa del Menor y la Familia (DIF)", [32.501188, -116.956688]),
        Coexistencia: new Location ("Centro Comunitario para la Coexistencia Pacífica", [32.538187, -117.035062]),
        EstacionMigratoria: new Location ("Estación Migratoria (INM)", [32.471312, -117.013688]),
        SRE: new Location ("Secretaría de Relaciones Exteriores Tijuana", [32.530563,-117.026187]),
        SNE: new Location ("Servicio Nacional de Empleo Tijuana", [32.498688, -116.957188]),
        STPS: new Location ("Secretaría del Trabajo y Previsión Social", [32.508313, -116.987562]),

        FGEBC: new Location ("Fiscalía General del Estado de Baja California (FGEBC)", [32.520812, -117.016312]),
        CEEAV: new Location ("Comisión Ejecutiva Estatal de Atención Integral a Víctimas (CEEAV)", [32.517688, -116.959187]),
        CEAV: new Location ("Comisión Ejecutiva de Atención a Víctimas (CEAV)", [32.522562, -117.016937]),
        IFDP: new Location ("Delegación del Instituto Federal de Defensoría Pública", [32.522937, -117.015187]),
        CentroRecursos: new Location ("Centro de Recursos para Trabajadores Migrantes", [32.528437, -116.980688]),
        HIAS: new Location ("HIAS Tijuana", [32.513063, -117.007688]),
        AlOtroLado: new Location ("Al Otro Lado", [32.535512, -117.049359]),
        // BBP
        AsylumAccess: new Location ("Asylum Access México / Oficina Tijuana", [32.530563, -117.038313]),
        // USCRI
        PGJE: new Location ("Procuraduría General de Justicia del Estado (PGJE) y Delitos Sexuales", [32.515937, -116.960437]),
        Infractores: new Location ("Estancia Municipal de Infractores", [32.515563, -116.988687]),
        Defensoria: new Location ("Delegación del Instituto Federal de Defensoría Pública", [32.522937, -117.015187]),
        CEJA: new Location ("Centro Estatal de Justicia Alternativa en Tijuana (CEJA)", [32.521563, -117.016312]),

        COCUT: new Location ("Comunidad Cultural de Tijuana LGBTI, AC (COCUT)", [32.536812, -117.036812]),

        IMMUJER: new Location ("Instituto Municipal de la Mujer (IMMUJER)", [32.538062, -117.035062]),
        CEJUM: new Location ("Centro de Justicia para las Mujeres en Tijuana (CEJUM)", [32.476813, -116.974312]),

        WorldVision: new Location ("World Vision", [32.493188, -116.951937]),

        HospitalGeneral: new Location ("Hospital General de Tijuana", [32.525437, -117.009563]),
        CruzRoja: new Location ("Cruz Roja Mexicana Delegación Tijuana", [32.506812, -116.963813]),
        IPEBC: new Location ("Instituto de Psiquiatría del Estado de Baja California (IPEBC)", [32.510688, -117.055563]),
        CAPASITS: new Location ("Centro Ambulatorio para la Prevención y Atención en SIDA e Infecciones de Transmisión Sexual (CAPASITS)", [32.471937, -116.849187]),
        Prevencasa: new Location ("Prevencasa, AC", [32.538938, -117.044938]),
        RHA: new Location ("Refugee Health Alliance (RHA): Clínica de Resistencia en Salud", [32.538313, -117.034063]),
        Centro32: new Location ("Centro 32", [32.524812, -117.005313]),
        DIF2: new Location ("DIF Municipal Tijuana", [32.503563, -116.944812]),

        ACNUR: new Location ("Agencia de las Naciones Unidas para los Refugiados (ACNUR)", [32.524438, -117.014938]),
        // OIM
        UNICEF: new Location ("Fondo de las Naciones Unidas para la Infancia Tijuana (UNICEF)", [32.524438, -117.012563]),

        INEA: new Location ("Instituto Nacional para la Educación de Adultos (INEA) Coordinación de Zona V", [32.518438, -117.009563]),
        CECATI1: new Location ("Centro de Capacitación para el Trabajo Industrial 6 (CECATI)", [32.501562, -117.032687]),
        CECATI2: new Location ("Centro de Capacitación para el Trabajo Industrial 144 (CECATI)", [32.514562, -116.944312]),
        PROBEM: new Location ("Programa Binacional de Educación Migrante (PROBEM) en la SEP del Estado", [32.531937, -117.017687]),
        CESFOM: new Location ("Centro Scalabrini de Formación para Migrantes (CESFOM)", [32.527187, -117.005188]),

        AtencionMigrante: new Location ("Dirección Municipal de Atención al Migrante del H. Ayuntamiento de Tijuana", [32.532562, -117.018937]),
        
        CentralAutobuses: new Location ("Central de Autobuses de Tijuana", [32.517938, -116.960437])
    };

    export const services = {
        housing: ["CasaMigrante", "MadreAsunta", "PuertaEsperanza", "AlbergueEmigrantes", "YMCAMenores", "EspacioMigrante", "JardinMariposas"],
        feeding: ["PadreChava"],
        consulate: ["ConsuladoElSalvador", "ConsuladoHonduras", "ConsuladoGuatemala", "ConsuladoEstadosUnidos"],
        humanRights: ["CEDH", "CNDH"],
        public: ["INM", "COMAR", "DIF1", "Coexistencia", "EstacionMigratoria", "SRE", "SNE", "STPS"],
        justice: ["FGEBC", "CEEAV", "CEAV", "IFDP", "CentroRecursos", "HIAS", "AlOtroLado", /*"BBP",*/ "AsylumAccess", /*"USCRI",*/ "PGJE", "Infractores", "Defensoria", "CEJA"],
        lgbti: ["COCUT"],
        women: ["IMMUJER", "CEJUM"],
        children: ["WorldVision"],
        health: ["HospitalGeneral", "CruzRoja", "IPEBC", "CAPASITS", "Prevencasa", "RHA", "Centro32", "DIF2"],
        international: ["ACNUR", /*"OIM",*/ "UNICEF"],
        education: ["INEA", "CECATI1", "CECATI2", "PROBEM", "CESFOM"],
        orientation: ["AtencionMigrante"],
        transport: ["CentralAutobuses"]
    };
</script>