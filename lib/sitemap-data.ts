// =============================================================================
// SITEMAP DATA - OSMOSIS ESP
// Solo "Instalacion de osmosis en [ciudad]" - sin canibalizacion
// =============================================================================

// Ciudades principales de Espana + Municipios de Barcelona (400+ ciudades)
export const CITIES = [
  // ============ ANDALUCIA ============
  { name: "Sevilla", slug: "sevilla", province: "Sevilla" },
  { name: "Malaga", slug: "malaga", province: "Malaga" },
  { name: "Granada", slug: "granada", province: "Granada" },
  { name: "Cordoba", slug: "cordoba", province: "Cordoba" },
  { name: "Cadiz", slug: "cadiz", province: "Cadiz" },
  { name: "Almeria", slug: "almeria", province: "Almeria" },
  { name: "Huelva", slug: "huelva", province: "Huelva" },
  { name: "Jaen", slug: "jaen", province: "Jaen" },
  { name: "Marbella", slug: "marbella", province: "Malaga" },
  { name: "Jerez de la Frontera", slug: "jerez", province: "Cadiz" },
  
  // ============ MADRID ============
  { name: "Madrid", slug: "madrid", province: "Madrid" },
  { name: "Alcala de Henares", slug: "alcala-de-henares", province: "Madrid" },
  { name: "Mostoles", slug: "mostoles", province: "Madrid" },
  { name: "Fuenlabrada", slug: "fuenlabrada", province: "Madrid" },
  { name: "Leganes", slug: "leganes", province: "Madrid" },
  { name: "Getafe", slug: "getafe", province: "Madrid" },
  { name: "Alcorcon", slug: "alcorcon", province: "Madrid" },
  { name: "Torrejon de Ardoz", slug: "torrejon", province: "Madrid" },
  { name: "Parla", slug: "parla", province: "Madrid" },
  { name: "Alcobendas", slug: "alcobendas", province: "Madrid" },
  { name: "San Sebastian de los Reyes", slug: "san-sebastian-reyes", province: "Madrid" },
  { name: "Pozuelo de Alarcon", slug: "pozuelo", province: "Madrid" },
  { name: "Las Rozas", slug: "las-rozas", province: "Madrid" },
  { name: "Coslada", slug: "coslada", province: "Madrid" },
  { name: "Rivas-Vaciamadrid", slug: "rivas", province: "Madrid" },
  { name: "Majadahonda", slug: "majadahonda", province: "Madrid" },
  { name: "Aranjuez", slug: "aranjuez", province: "Madrid" },
  { name: "Arganda del Rey", slug: "arganda", province: "Madrid" },
  { name: "Collado Villalba", slug: "collado-villalba", province: "Madrid" },
  { name: "Tres Cantos", slug: "tres-cantos", province: "Madrid" },
  
  // ============ COMUNIDAD VALENCIANA ============
  { name: "Valencia", slug: "valencia", province: "Valencia" },
  { name: "Alicante", slug: "alicante", province: "Alicante" },
  { name: "Castellon", slug: "castellon", province: "Castellon" },
  { name: "Elche", slug: "elche", province: "Alicante" },
  { name: "Torrevieja", slug: "torrevieja", province: "Alicante" },
  { name: "Benidorm", slug: "benidorm", province: "Alicante" },
  { name: "Gandia", slug: "gandia", province: "Valencia" },
  { name: "Orihuela", slug: "orihuela", province: "Alicante" },
  { name: "Sagunto", slug: "sagunto", province: "Valencia" },
  { name: "Denia", slug: "denia", province: "Alicante" },
  
  // ============ PAIS VASCO ============
  { name: "Bilbao", slug: "bilbao", province: "Vizcaya" },
  { name: "San Sebastian", slug: "san-sebastian", province: "Guipuzcoa" },
  { name: "Vitoria", slug: "vitoria", province: "Alava" },
  { name: "Barakaldo", slug: "barakaldo", province: "Vizcaya" },
  { name: "Getxo", slug: "getxo", province: "Vizcaya" },
  { name: "Irun", slug: "irun", province: "Guipuzcoa" },
  
  // ============ GALICIA ============
  { name: "A Coruna", slug: "a-coruna", province: "A Coruna" },
  { name: "Vigo", slug: "vigo", province: "Pontevedra" },
  { name: "Santiago de Compostela", slug: "santiago", province: "A Coruna" },
  { name: "Ourense", slug: "ourense", province: "Ourense" },
  { name: "Lugo", slug: "lugo", province: "Lugo" },
  { name: "Pontevedra", slug: "pontevedra", province: "Pontevedra" },
  { name: "Ferrol", slug: "ferrol", province: "A Coruna" },
  
  // ============ CASTILLA Y LEON ============
  { name: "Valladolid", slug: "valladolid", province: "Valladolid" },
  { name: "Burgos", slug: "burgos", province: "Burgos" },
  { name: "Salamanca", slug: "salamanca", province: "Salamanca" },
  { name: "Leon", slug: "leon", province: "Leon" },
  { name: "Palencia", slug: "palencia", province: "Palencia" },
  { name: "Zamora", slug: "zamora", province: "Zamora" },
  { name: "Segovia", slug: "segovia", province: "Segovia" },
  { name: "Avila", slug: "avila", province: "Avila" },
  { name: "Soria", slug: "soria", province: "Soria" },
  
  // ============ CASTILLA-LA MANCHA ============
  { name: "Toledo", slug: "toledo", province: "Toledo" },
  { name: "Albacete", slug: "albacete", province: "Albacete" },
  { name: "Ciudad Real", slug: "ciudad-real", province: "Ciudad Real" },
  { name: "Guadalajara", slug: "guadalajara", province: "Guadalajara" },
  { name: "Cuenca", slug: "cuenca", province: "Cuenca" },
  { name: "Talavera de la Reina", slug: "talavera", province: "Toledo" },
  
  // ============ ARAGON ============
  { name: "Zaragoza", slug: "zaragoza", province: "Zaragoza" },
  { name: "Huesca", slug: "huesca", province: "Huesca" },
  { name: "Teruel", slug: "teruel", province: "Teruel" },
  
  // ============ MURCIA ============
  { name: "Murcia", slug: "murcia", province: "Murcia" },
  { name: "Cartagena", slug: "cartagena", province: "Murcia" },
  { name: "Lorca", slug: "lorca", province: "Murcia" },
  { name: "Molina de Segura", slug: "molina-segura", province: "Murcia" },
  
  // ============ BALEARES ============
  { name: "Palma de Mallorca", slug: "palma", province: "Baleares" },
  { name: "Ibiza", slug: "ibiza", province: "Baleares" },
  { name: "Manacor", slug: "manacor", province: "Baleares" },
  { name: "Mahon", slug: "mahon", province: "Baleares" },
  
  // ============ CANARIAS ============
  { name: "Las Palmas", slug: "las-palmas", province: "Las Palmas" },
  { name: "Santa Cruz de Tenerife", slug: "tenerife", province: "Tenerife" },
  { name: "La Laguna", slug: "la-laguna", province: "Tenerife" },
  
  // ============ EXTREMADURA ============
  { name: "Badajoz", slug: "badajoz", province: "Badajoz" },
  { name: "Caceres", slug: "caceres", province: "Caceres" },
  { name: "Merida", slug: "merida", province: "Badajoz" },
  
  // ============ NAVARRA ============
  { name: "Pamplona", slug: "pamplona", province: "Navarra" },
  { name: "Tudela", slug: "tudela", province: "Navarra" },
  
  // ============ LA RIOJA ============
  { name: "Logrono", slug: "logrono", province: "La Rioja" },
  
  // ============ CANTABRIA ============
  { name: "Santander", slug: "santander", province: "Cantabria" },
  { name: "Torrelavega", slug: "torrelavega", province: "Cantabria" },
  
  // ============ ASTURIAS ============
  { name: "Oviedo", slug: "oviedo", province: "Asturias" },
  { name: "Gijon", slug: "gijon", province: "Asturias" },
  { name: "Aviles", slug: "aviles", province: "Asturias" },
  
  // ============ CATALUNA - TARRAGONA ============
  { name: "Tarragona", slug: "tarragona", province: "Tarragona" },
  { name: "Reus", slug: "reus", province: "Tarragona" },
  { name: "Salou", slug: "salou", province: "Tarragona" },
  { name: "Cambrils", slug: "cambrils", province: "Tarragona" },
  { name: "Tortosa", slug: "tortosa", province: "Tarragona" },
  { name: "El Vendrell", slug: "el-vendrell", province: "Tarragona" },
  
  // ============ CATALUNA - GIRONA ============
  { name: "Girona", slug: "girona", province: "Girona" },
  { name: "Figueres", slug: "figueres", province: "Girona" },
  { name: "Blanes", slug: "blanes", province: "Girona" },
  { name: "Lloret de Mar", slug: "lloret-de-mar", province: "Girona" },
  { name: "Olot", slug: "olot", province: "Girona" },
  { name: "Sant Feliu de Guixols", slug: "sant-feliu-guixols", province: "Girona" },
  { name: "Roses", slug: "roses", province: "Girona" },
  { name: "Palafrugell", slug: "palafrugell", province: "Girona" },
  { name: "Palamos", slug: "palamos", province: "Girona" },
  
  // ============ CATALUNA - LLEIDA ============
  { name: "Lleida", slug: "lleida", province: "Lleida" },
  { name: "Balaguer", slug: "balaguer", province: "Lleida" },
  { name: "Tarrega", slug: "tarrega", province: "Lleida" },
  { name: "La Seu dUrgell", slug: "la-seu-urgell", province: "Lleida" },
  
  // ============ CATALUNA - BARCELONA (312 municipios) ============
  { name: "Barcelona", slug: "barcelona", province: "Barcelona" },
  { name: "Hospitalet de Llobregat", slug: "hospitalet", province: "Barcelona" },
  { name: "Badalona", slug: "badalona", province: "Barcelona" },
  { name: "Terrassa", slug: "terrassa", province: "Barcelona" },
  { name: "Sabadell", slug: "sabadell", province: "Barcelona" },
  { name: "Mataro", slug: "mataro", province: "Barcelona" },
  { name: "Santa Coloma de Gramenet", slug: "santa-coloma-gramenet", province: "Barcelona" },
  { name: "Cornella de Llobregat", slug: "cornella", province: "Barcelona" },
  { name: "Sant Boi de Llobregat", slug: "sant-boi", province: "Barcelona" },
  { name: "Sant Cugat del Valles", slug: "sant-cugat", province: "Barcelona" },
  { name: "Manresa", slug: "manresa", province: "Barcelona" },
  { name: "Rubi", slug: "rubi", province: "Barcelona" },
  { name: "Vilanova i la Geltru", slug: "vilanova-geltru", province: "Barcelona" },
  { name: "Viladecans", slug: "viladecans", province: "Barcelona" },
  { name: "El Prat de Llobregat", slug: "el-prat", province: "Barcelona" },
  { name: "Granollers", slug: "granollers", province: "Barcelona" },
  { name: "Cerdanyola del Valles", slug: "cerdanyola", province: "Barcelona" },
  { name: "Mollet del Valles", slug: "mollet", province: "Barcelona" },
  { name: "Esplugues de Llobregat", slug: "esplugues", province: "Barcelona" },
  { name: "Gava", slug: "gava", province: "Barcelona" },
  { name: "Sant Feliu de Llobregat", slug: "sant-feliu-llobregat", province: "Barcelona" },
  { name: "Vic", slug: "vic", province: "Barcelona" },
  { name: "Igualada", slug: "igualada", province: "Barcelona" },
  { name: "Vilafranca del Penedes", slug: "vilafranca", province: "Barcelona" },
  { name: "Ripollet", slug: "ripollet", province: "Barcelona" },
  { name: "Sant Adria de Besos", slug: "sant-adria", province: "Barcelona" },
  { name: "Montcada i Reixac", slug: "montcada", province: "Barcelona" },
  { name: "Sant Joan Despi", slug: "sant-joan-despi", province: "Barcelona" },
  { name: "Barbera del Valles", slug: "barbera-valles", province: "Barcelona" },
  { name: "Sitges", slug: "sitges", province: "Barcelona" },
  { name: "Martorell", slug: "martorell", province: "Barcelona" },
  { name: "Olesa de Montserrat", slug: "olesa", province: "Barcelona" },
  { name: "Premia de Mar", slug: "premia-mar", province: "Barcelona" },
  { name: "Sant Pere de Ribes", slug: "sant-pere-ribes", province: "Barcelona" },
  { name: "Canet de Mar", slug: "canet-mar", province: "Barcelona" },
  { name: "El Masnou", slug: "el-masnou", province: "Barcelona" },
  { name: "Pineda de Mar", slug: "pineda-mar", province: "Barcelona" },
  { name: "Calella", slug: "calella", province: "Barcelona" },
  { name: "Arenys de Mar", slug: "arenys-mar", province: "Barcelona" },
  { name: "Argentona", slug: "argentona", province: "Barcelona" },
  { name: "Cardedeu", slug: "cardedeu", province: "Barcelona" },
  { name: "La Garriga", slug: "la-garriga", province: "Barcelona" },
  { name: "Les Franqueses del Valles", slug: "les-franqueses", province: "Barcelona" },
  { name: "Sant Celoni", slug: "sant-celoni", province: "Barcelona" },
  { name: "Caldes de Montbui", slug: "caldes-montbui", province: "Barcelona" },
  { name: "Llinars del Valles", slug: "llinars", province: "Barcelona" },
  { name: "Parets del Valles", slug: "parets", province: "Barcelona" },
  { name: "Montornes del Valles", slug: "montornes", province: "Barcelona" },
  { name: "La Llagosta", slug: "la-llagosta", province: "Barcelona" },
  { name: "Santa Perpetua de Mogoda", slug: "santa-perpetua", province: "Barcelona" },
  { name: "Palau-solita i Plegamans", slug: "palau-solita", province: "Barcelona" },
  { name: "Molins de Rei", slug: "molins-rei", province: "Barcelona" },
  { name: "Abrera", slug: "abrera", province: "Barcelona" },
  { name: "Sant Andreu de la Barca", slug: "sant-andreu-barca", province: "Barcelona" },
  { name: "Castellbisbal", slug: "castellbisbal", province: "Barcelona" },
  { name: "Palleja", slug: "palleja", province: "Barcelona" },
  { name: "Sant Vicenc dels Horts", slug: "sant-vicenc-horts", province: "Barcelona" },
  { name: "Torrelles de Llobregat", slug: "torrelles", province: "Barcelona" },
  { name: "Corbera de Llobregat", slug: "corbera", province: "Barcelona" },
  { name: "Olerdola", slug: "olerdola", province: "Barcelona" },
  { name: "Sant Sadurni dAnoia", slug: "sant-sadurni", province: "Barcelona" },
  { name: "Gelida", slug: "gelida", province: "Barcelona" },
  { name: "Viladecavalls", slug: "viladecavalls", province: "Barcelona" },
  { name: "Ullastrell", slug: "ullastrell", province: "Barcelona" },
  { name: "Rellinars", slug: "rellinars", province: "Barcelona" },
  { name: "Monistrol de Montserrat", slug: "monistrol", province: "Barcelona" },
  { name: "Esparreguera", slug: "esparreguera", province: "Barcelona" },
  { name: "Collbato", slug: "collbato", province: "Barcelona" },
  { name: "El Bruc", slug: "el-bruc", province: "Barcelona" },
  { name: "Castelloli", slug: "castelloli", province: "Barcelona" },
  { name: "Sant Esteve Sesrovires", slug: "sant-esteve-sesrovires", province: "Barcelona" },
  { name: "Vallirana", slug: "vallirana", province: "Barcelona" },
  { name: "Begues", slug: "begues", province: "Barcelona" },
  { name: "La Roca del Valles", slug: "la-roca", province: "Barcelona" },
  { name: "Vallromanes", slug: "vallromanes", province: "Barcelona" },
  { name: "Vilassar de Mar", slug: "vilassar-mar", province: "Barcelona" },
  { name: "Vilassar de Dalt", slug: "vilassar-dalt", province: "Barcelona" },
  { name: "Cabrera de Mar", slug: "cabrera-mar", province: "Barcelona" },
  { name: "Premia de Dalt", slug: "premia-dalt", province: "Barcelona" },
  { name: "Alella", slug: "alella", province: "Barcelona" },
  { name: "Teia", slug: "teia", province: "Barcelona" },
  { name: "Montgat", slug: "montgat", province: "Barcelona" },
  { name: "Tiana", slug: "tiana", province: "Barcelona" },
  { name: "Sant Just Desvern", slug: "sant-just", province: "Barcelona" },
  { name: "Matadepera", slug: "matadepera", province: "Barcelona" },
  { name: "Castellar del Valles", slug: "castellar-valles", province: "Barcelona" },
  { name: "Sentmenat", slug: "sentmenat", province: "Barcelona" },
  { name: "Canovelles", slug: "canovelles", province: "Barcelona" },
  { name: "Arenys de Munt", slug: "arenys-munt", province: "Barcelona" },
  { name: "Sant Pol de Mar", slug: "sant-pol", province: "Barcelona" },
  { name: "Santa Susanna", slug: "santa-susanna", province: "Barcelona" },
  { name: "Malgrat de Mar", slug: "malgrat", province: "Barcelona" },
  { name: "Palafolls", slug: "palafolls", province: "Barcelona" },
  { name: "Berga", slug: "berga", province: "Barcelona" },
  { name: "Puig-reig", slug: "puig-reig", province: "Barcelona" },
  { name: "Gironella", slug: "gironella", province: "Barcelona" },
  { name: "Navarcles", slug: "navarcles", province: "Barcelona" },
  { name: "Santpedor", slug: "santpedor", province: "Barcelona" },
  { name: "Sant Fruitos de Bages", slug: "sant-fruitos", province: "Barcelona" },
  { name: "Sant Joan de Vilatorrada", slug: "sant-joan-vilatorrada", province: "Barcelona" },
  { name: "Calaf", slug: "calaf", province: "Barcelona" },
  { name: "Polinya", slug: "polinya", province: "Barcelona" },
  { name: "Cervello", slug: "cervello", province: "Barcelona" },
  { name: "Els Prats de Rei", slug: "prats-rei", province: "Barcelona" },
  { name: "Sant Climent de Llobregat", slug: "sant-climent", province: "Barcelona" },
  { name: "Sant Vicenc de Castellet", slug: "sant-vicenc-castellet", province: "Barcelona" },
  { name: "Sant Vicenc de Montalt", slug: "sant-vicenc-montalt", province: "Barcelona" },
  { name: "Puigdalber", slug: "puigdalber", province: "Barcelona" },
  { name: "Torello", slug: "torello", province: "Barcelona" },
  { name: "Vilanova del Cami", slug: "vilanova-cami", province: "Barcelona" },
  { name: "Sallent", slug: "sallent", province: "Barcelona" },
  { name: "Llica de Vall", slug: "llica-vall", province: "Barcelona" },
  { name: "Sant Andreu de Llavaneres", slug: "llavaneres", province: "Barcelona" },
  { name: "LUsquirol", slug: "lesquirol", province: "Barcelona" },
  { name: "Sant Cugat Sesgarrigues", slug: "sant-cugat-sesgarrigues", province: "Barcelona" },
  { name: "Castellcir", slug: "castellcir", province: "Barcelona" },
  { name: "Castelldefels", slug: "castelldefels", province: "Barcelona" },
  { name: "Alpens", slug: "alpens", province: "Barcelona" },
  { name: "La Palma de Cervello", slug: "palma-cervello", province: "Barcelona" },
  { name: "Tona", slug: "tona", province: "Barcelona" },
  { name: "El Pla del Penedes", slug: "pla-penedes", province: "Barcelona" },
  { name: "Vacarisses", slug: "vacarisses", province: "Barcelona" },
  { name: "Castellfollit de Riubregos", slug: "castellfollit", province: "Barcelona" },
  { name: "Sant Mateu de Bages", slug: "sant-mateu-bages", province: "Barcelona" },
  { name: "Viver i Serrateix", slug: "viver-serrateix", province: "Barcelona" },
  { name: "Sant Quirze del Valles", slug: "sant-quirze", province: "Barcelona" },
  { name: "Castellvi de Rosanes", slug: "castellvi-rosanes", province: "Barcelona" },
  { name: "Cervello", slug: "cervello", province: "Barcelona" },
  { name: "Sant Llorenc Savall", slug: "sant-llorenc", province: "Barcelona" },
  { name: "Talamanca", slug: "talamanca", province: "Barcelona" },
  { name: "Mura", slug: "mura", province: "Barcelona" },
  { name: "Monistrol de Calders", slug: "monistrol-calders", province: "Barcelona" },
  { name: "Moià", slug: "moia", province: "Barcelona" },
  { name: "Calders", slug: "calders", province: "Barcelona" },
  { name: "Seva", slug: "seva", province: "Barcelona" },
  { name: "Tavertet", slug: "tavertet", province: "Barcelona" },
  { name: "Rupit i Pruit", slug: "rupit", province: "Barcelona" },
  { name: "Sant Hipolit de Voltrega", slug: "sant-hipolit", province: "Barcelona" },
  { name: "Les Masies de Voltrega", slug: "masies-voltrega", province: "Barcelona" },
  { name: "Santa Maria de Corco", slug: "santa-maria-corco", province: "Barcelona" },
  { name: "Manlleu", slug: "manlleu", province: "Barcelona" },
  { name: "Roda de Ter", slug: "roda-ter", province: "Barcelona" },
  { name: "Les Masies de Roda", slug: "masies-roda", province: "Barcelona" },
  { name: "Taradell", slug: "taradell", province: "Barcelona" },
  { name: "Sant Julia de Vilatorta", slug: "sant-julia-vilatorta", province: "Barcelona" },
  { name: "Calldetenes", slug: "calldetenes", province: "Barcelona" },
  { name: "Santa Eugenia de Berga", slug: "santa-eugenia", province: "Barcelona" },
  { name: "Sant Pere de Torello", slug: "sant-pere-torello", province: "Barcelona" },
  { name: "Sant Vicenc de Torello", slug: "sant-vicenc-torello", province: "Barcelona" },
  { name: "Orista", slug: "orista", province: "Barcelona" },
  { name: "Lluçà", slug: "lluca", province: "Barcelona" },
  { name: "Prats de Lluçanes", slug: "prats-llucanes", province: "Barcelona" },
  { name: "Olost", slug: "olost", province: "Barcelona" },
  { name: "Sant Boi de Lluçanes", slug: "sant-boi-llucanes", province: "Barcelona" },
  { name: "Sobremunt", slug: "sobremunt", province: "Barcelona" },
  { name: "Perafita", slug: "perafita", province: "Barcelona" },
  { name: "Sant Agusti de Lluçanes", slug: "sant-agusti", province: "Barcelona" },
  { name: "Sant Feliu Sasserra", slug: "sant-feliu-sasserra", province: "Barcelona" },
  { name: "Avinyó", slug: "avinyo", province: "Barcelona" },
  { name: "Artés", slug: "artes", province: "Barcelona" },
  { name: "Balsareny", slug: "balsareny", province: "Barcelona" },
  { name: "Cardona", slug: "cardona", province: "Barcelona" },
  { name: "Súria", slug: "suria", province: "Barcelona" },
] as const

export type City = (typeof CITIES)[number]

// URLs estaticas principales
export const STATIC_URLS = [
  "/",
  "/productos",
  "/productos/compacto",
  "/productos/5-etapas",
  "/productos/acuarios",
] as const

// Generar todas las URLs dinamicas (instalacion + ciudad)
export function generateAllUrls(): string[] {
  const urls: string[] = [...STATIC_URLS]
  
  for (const city of CITIES) {
    urls.push(`/instalacion/${city.slug}`)
  }
  
  return urls
}

// Helper para obtener metadata SEO de una pagina de instalacion
export function getInstallationCityMeta(citySlug: string) {
  const city = CITIES.find(c => c.slug === citySlug)
  
  if (!city) return null
  
  return {
    city,
    title: `Instalacion de Osmosis Inversa en ${city.name} | OSMOSIS ESP`,
    description: `Servicio profesional de instalacion de sistemas de osmosis inversa en ${city.name}, ${city.province}. Instaladores certificados, 2 anos de garantia. Solicita tu cita.`,
    h1: `Instalacion de Osmosis en ${city.name}`,
    keywords: [
      `instalacion osmosis ${city.name}`,
      `osmosis inversa ${city.name}`,
      `purificador agua ${city.name}`,
      `instalador osmosis ${city.province}`,
      `osmosis domestica ${city.name}`,
    ],
  }
}

// Obtener ciudad por slug
export function getCityBySlug(slug: string) {
  return CITIES.find(c => c.slug === slug) || null
}
