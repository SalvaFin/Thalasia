export type HistoryEra = {
  era: string;
  period: string;
  summary: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export const historyEras: HistoryEra[] = [
  {
    era: "Era de la Formacion",
    period: "El origen del mundo",
    summary:
      "El caos primordial se ordeno tras el choque entre Luz, Oscuridad y Materia. De ese cataclismo nacieron el mundo, las leyes naturales y los dioses.",
    sections: [
      {
        title: "El Cataclismo Primordial",
        body: [
          "Antes de que existieran mares, montanas o nombres, solo habitaban el vacio tres principios: Aetherion, la Luz; Nocturne, la Oscuridad; y Etheras, la Materia. Ninguno de ellos era un dios en el sentido mortal de la palabra. Eran fuerzas absolutas, anteriores al tiempo, incapaces de comprenderse sin transformarse mutuamente.",
          "Cuando la luz de Aetherion atraveso el abismo de Nocturne y encontro forma en Etheras, el vacio se fracturo. Aquella ruptura no fue una creacion serena, sino una colision inmensa que libero fuego, gravedad, sueno, muerte, deseo y destino. De los restos de esa explosion nacio Thalasia.",
        ],
      },
      {
        title: "Nacimiento de los Dioses",
        body: [
          "De la energia liberada surgieron ocho dioses mayores, cada uno portador de una chispa de los tres principios originales. Aelum miro hacia el cielo y dio nombre al orden; Thalira lleno las honduras del mar; Verdanth desperto la savia; Sylune escondio secretos en la magia; Kragor marco la fuerza; Eliara dio forma al deseo; Mordak abrio la primera puerta final; y Baelor encendio la primera forja.",
          "Los dioses no construyeron el mundo desde fuera. Lo moldearon desde dentro, como artesanos atrapados en la materia que trabajaban. Por eso la magia, la muerte, el amor, el fuego, la ley y la naturaleza no son fuerzas externas a Thalasia, sino parte de su respiracion.",
        ],
      },
    ],
  },
  {
    era: "Era del Alba",
    period: "Primeras civilizaciones",
    summary:
      "Las razas mortales aprendieron a nombrar el mundo, levantar ciudades, pactar con dioses y convertir la supervivencia en cultura.",
    sections: [
      {
        title: "Los Primeros Pueblos",
        body: [
          "Cuando la tierra se estabilizo, los pueblos mortales aparecieron en valles, costas, bosques y montanas. Sus primeras comunidades no entendian el mundo como un lugar conquistable, sino como una presencia viva a la que habia que escuchar. Cada rio tenia un presagio; cada eclipse era una advertencia; cada cosecha, un pacto.",
          "En esta epoca nacieron los primeros calendarios, los juramentos de clan, las rutas maritimas primitivas y los altares dedicados a los ocho dioses. Todavia no existian Jadeon, la Confederacion ni las fronteras modernas. Thalasia era un mosaico de pueblos pequenos, orgullosos y vulnerables.",
        ],
      },
      {
        title: "Magia, Oficio y Ley",
        body: [
          "La magia se descubrio antes de ser comprendida. Algunas casas aprendieron a leerla en estrellas y mareas; otras la trataron como una herramienta peligrosa; otras la confundieron con voluntad divina. De esos primeros ensayos nacieron escuelas arcanas, linajes de sabios y ordenes religiosas que aun reclaman autoridad sobre el pasado.",
          "Tambien surgieron los primeros oficios especializados: herreros sagrados de Baelor, navegantes de Thalira, jueces de Aelum, guardianes de Verdanth y custodios funerarios de Mordak. La civilizacion empezo cuando los mortales dejaron de limitarse a sobrevivir y comenzaron a heredar responsabilidades.",
        ],
      },
    ],
  },
  {
    era: "Era de las Sombras",
    period: "La gran ruptura",
    summary:
      "Las Tierras de Nadie se convirtieron en una herida del continente. Monstruos, aberraciones y oscuridad obligaron a los pueblos a unirse o desaparecer.",
    sections: [
      {
        title: "La Herida del Centro",
        body: [
          "Nadie conserva una unica explicacion sobre como nacieron las Tierras de Nadie. Para algunos fue un castigo de Nocturne; para otros, una fractura en Etheras; para los estudiosos mas pragmaticos, una region donde la magia, la muerte y la materia quedaron contaminadas por una guerra olvidada. Lo cierto es que el centro del continente cambio para siempre.",
          "Los campos se volvieron infertiles, los caminos se torcieron, las ruinas comenzaron a murmurar y criaturas que no pertenecian del todo al mundo empezaron a cruzar hacia las tierras habitadas. Durante generaciones, la supervivencia fue una negociacion diaria con el miedo.",
        ],
      },
      {
        title: "Jadeon y Aldren Veyr",
        body: [
          "En el este, Jadeon emergio como heroe unificador, defensor contra las fuerzas oscuras y simbolo de reconstruccion espiritual. Su legado no fue solo militar: enseno a los pueblos orientales a verse como herederos de una misma promesa.",
          "En el oeste, Aldren Veyr unio a clanes mineros, casas de forja y asentamientos fortificados bajo una doctrina distinta: ningun asentamiento volveria a caer solo. De su pacto naceria la Confederacion del Hierro, una maquinaria politica y militar construida para resistir.",
        ],
      },
    ],
  },
  {
    era: "Era de la Reconstruccion",
    period: "Reinos, pactos y fronteras",
    summary:
      "Tras sobrevivir a la oscuridad, las grandes potencias dieron forma a sus identidades: Jadeon como legado magico y la Confederacion como bastion industrial.",
    sections: [
      {
        title: "Los Reinos de Jadeon",
        body: [
          "La memoria de Jadeon permitio que los pueblos del este se reorganizaran en cuatro reinos vinculados por historia, nobleza y magia: Thorian, Valeria, Eldoria y Crestfall. Cada uno desarrollo tradiciones propias, pero todos conservaron la idea de que su existencia dependia de una unidad superior.",
          "Los consejos magicos ganaron peso politico, las familias reales consolidaron sus linajes y los festivales de victoria contra la oscuridad se convirtieron en rituales de identidad. En Jadeon, recordar no es un acto pasivo: es una forma de gobierno.",
        ],
      },
      {
        title: "El Hierro se Organiza",
        body: [
          "Mientras tanto, la Confederacion del Hierro transformo los viejos pactos defensivos en instituciones permanentes. Surgieron academias militares, gremios de ingenieria, leyes de produccion, fortalezas escalonadas y una red de rutas metalicas que unia minas, puertos y ciudades-fabrica.",
          "La magia no desaparecio del oeste, pero fue obligada a entrar en talleres, lentes, baterias de eter y motores de vapor. Donde Jadeon veia misterio, la Confederacion buscaba procedimiento. Donde Jadeon levantaba torres arcanas, el Hierro levantaba calderas, murallas y arsenales.",
        ],
      },
    ],
  },
  {
    era: "Era del Conflicto Eterno",
    period: "El presente",
    summary:
      "La Guerra sin Fin domina la politica actual, aunque las amenazas de las Tierras de Nadie obligan a enemigos declarados a cooperar cuando el centro despierta.",
    sections: [
      {
        title: "La Guerra sin Fin",
        body: [
          "El conflicto entre los Reinos de Jadeon y la Confederacion del Hierro no nacio de una sola batalla, sino de una acumulacion de heridas: fronteras disputadas, rutas comerciales, recursos, doctrinas magicas incompatibles y visiones opuestas sobre el futuro de Thalasia.",
          "Para Jadeon, la Confederacion amenaza con reducir el mundo a engranajes y estrategia. Para el Hierro, Jadeon representa una aristocracia arcana incapaz de aceptar que la supervivencia exige disciplina, industria y control. Ambos bandos se consideran necesarios. Ambos creen que el otro podria condenar el continente.",
        ],
      },
      {
        title: "El Enemigo Comun",
        body: [
          "Las Tierras de Nadie siguen alterando cualquier calculo politico. Cuando sus criaturas avanzan, cuando una ruina despierta o cuando una niebla antinatural cruza las fronteras, la guerra cambia de forma. A veces se firman treguas de dias. A veces patrullas enemigas combaten espalda contra espalda y luego vuelven a apuntarse con las mismas armas.",
          "Esta es la tension central del presente: Thalasia esta dividida por una guerra que parece no terminar, pero amenazada por fuerzas que podrian hacer que esa guerra pareciera pequena.",
        ],
      },
    ],
  },
];
