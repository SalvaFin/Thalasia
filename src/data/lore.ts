export type LorePage = {
  title: string;
  kicker: string;
  summary: string;
  variant?: "journal";
  images?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  notes?: {
    title: string;
    body: string;
  }[];
  sections: {
    title: string;
    body: string[];
  }[];
};

export const lorePages: Record<string, LorePage> = {
  astralita: {
    title: "Astralita",
    kicker: "Material raro",
    variant: "journal",
    summary:
      "Mineral azul cielo, opaco y natural, codiciado por su capacidad para condensar urbidumbre y alimentar de mana el entorno cercano.",
    images: [
      {
        src: "/images/astralita-mena.png",
        alt: "Mena natural de Astralita entre roca de montana y vegetacion.",
        caption: "Mena expuesta en roca humeda. El brillo no parece venir de la superficie.",
      },
      {
        src: "/images/astralita-mesa.png",
        alt: "Fragmento pequeno de Astralita sobre una mesa de madera antigua.",
        caption: "Fragmento sin pulir. La opacidad se mantiene incluso bajo luz directa.",
      },
    ],
    notes: [
      {
        title: "Observacion",
        body:
          "Alrededor de una veta sana, los hechizos menores se sienten mas estables durante unos instantes.",
      },
      {
        title: "Aviso",
        body:
          "Los mineros viejos no la golpean con hierro desnudo. Prefieren cinceles envueltos en cuero y paciencia.",
      },
      {
        title: "Rumor",
        body:
          "Algunas casas nobles guardan fragmentos sellados en relicarios, pero nadie admite para que.",
      },
    ],
    sections: [
      {
        title: "Descripcion",
        body: [
          "La Astralita aparece como un cristal natural de color azul cielo, generalmente opaco, con vetas internas mas claras que recuerdan a nubes atrapadas dentro de piedra. No suele crecer en formas perfectas: sus caras son irregulares, frias al tacto y a menudo estan mezcladas con roca oscura, raices finas o polvo mineral.",
          "Los fragmentos pequenos no iluminan una habitacion, pero parecen devolver la luz con una calma extrana. Cuando hay magia cerca, algunos testigos describen una vibracion suave, casi como si la piedra respirase muy despacio.",
        ],
      },
      {
        title: "Urbidumbre y mana",
        body: [
          "Lo poco que se acepta como conocimiento comun es que la Astralita condensa urbidumbre en su interior. Esa concentracion no siempre es peligrosa, pero nunca es inocente: la piedra puede alimentar de mana su entorno y alterar la facilidad con la que se canalizan ciertos conjuros.",
          "Los estudiosos de Jadeon discuten si la Astralita produce mana, lo atrae o simplemente impide que se disperse. La hipotesis mas prudente dice que actua como un deposito natural: absorbe presion arcana durante anos y la libera cuando algo vivo o ritualizado la despierta.",
        ],
      },
      {
        title: "Yacimientos",
        body: [
          "Se ha encontrado Astralita en varios puntos de los Reinos de Jadeon, aunque nunca en abundancia suficiente para convertirla en un recurso cotidiano. Aparece sobre todo en montanas antiguas, cuevas humedas, fallas cubiertas de vegetacion y lugares donde las lineas de mana parecen torcerse bajo tierra.",
          "Los yacimientos rara vez se anuncian. Una veta pequena puede atraer a academias arcanas, contrabandistas, recaudadores reales, sacerdotes preocupados y patrullas militares en menos de una semana.",
        ],
      },
      {
        title: "Usos conocidos",
        body: [
          "En manos cuidadosas, un fragmento refinado puede estabilizar focos arcanos, alimentar lamparas de mana, reforzar sellos de contencion o mantener activos instrumentos magicos durante mas tiempo de lo normal. La Iglesia Central la trata con cautela, no como reliquia sagrada, sino como una herramienta que exige responsabilidad.",
          "La Confederacion del Hierro codicia la Astralita por motivos distintos. Sus ingenieros la emplean como nucleo para baterias etermecanicas, motores de vapor encantado y sistemas de medicion arcana. Esa dependencia convierte cualquier hallazgo en un asunto estrategico capaz de aumentar la tension politica.",
        ],
      },
      {
        title: "Riesgos",
        body: [
          "La Astralita sin trabajar puede saturar un espacio cerrado. Los sintomas mas repetidos son suenos intensos, chispazos de magia involuntaria, migrañas, voces confundidas con recuerdos y una sensacion de que el aire pesa demasiado.",
          "Los textos mas alarmistas afirman que una veta corrompida puede atraer criaturas sensibles a la urbidumbre. No hay consenso sobre si esto es verdad, supersticion minera o una forma elegante de ocultar accidentes.",
        ],
      },
    ],
  },
  "confederacion-del-hierro": {
    title: "Confederacion del Hierro",
    kicker: "Pais",
    summary:
      "Una potencia occidental de acero, vapor y voluntad militar, levantada como muralla viva frente a las amenazas de las Tierras de Nadie.",
    sections: [
      {
        title: "Un Bastion de Hierro y Vapor",
        body: [
          "La Confederacion del Hierro domina el occidente de Thalasia como una nacion de chimeneas, fortalezas, vias elevadas y ciudades-fabrica. Donde Jadeon confia en linajes arcanos y pactos nobles, la Confederacion responde con disciplina, ingenieria y una fe casi religiosa en la utilidad de toda cosa construida.",
          "Sus habitantes no se consideran enemigos de la magia, pero si desconfian de aquello que no puede medirse, contenerse o reproducirse. En sus talleres, la magia se destila en baterias de eter, sellos de presion, lentes rúnicas y motores de guerra alimentados por vapor encantado.",
        ],
      },
      {
        title: "Fundacion",
        body: [
          "Durante la Era de las Sombras, cuando criaturas y aberraciones comenzaron a extenderse desde las Tierras de Nadie, los clanes occidentales sobrevivian aislados entre minas, puestos fortificados y rutas rotas. Fue entonces cuando Aldren Veyr, un comandante nacido entre los viejos pueblos mineros, unifico a las casas de forja bajo una promesa sencilla: ningun asentamiento volveria a caer solo.",
          "Aldren no fundo la Confederacion como un reino, sino como una maquinaria de supervivencia. Cada clan conservo sus juramentos, sus talleres y sus simbolos, pero todos aceptaron un mando comun, un sistema de levas y una red de fortalezas conectadas por caminos de hierro. Con el tiempo, aquel pacto militar se convirtio en estado.",
        ],
      },
      {
        title: "Gobierno Actual",
        body: [
          "La Confederacion no se gobierna desde una corte ornamental, sino desde el Alto Mecanismo, un consejo imperial donde las casas industriales, el alto mando y los gremios de ingenieros negocian bajo la autoridad de la dinastia Veyr.",
          "Hoy el poder se reparte entre dos figuras: el Mariscal Regente Kael Veyr, responsable de las fronteras, las legiones y la doctrina militar; y la Canciller de Forja Seren Veyr, cabeza civil de los astilleros, academias tecnicas y laboratorios de etermecanica. Su gobierno dual mantiene el equilibrio entre espada y engranaje.",
        ],
      },
      {
        title: "Las Dos Mitades del Hierro",
        body: [
          "La Marca de las Fundiciones ocupa el corazon minero y militar de la Confederacion. Alli se extraen hierro, carbon negro y minerales arcanoconductores. Sus ciudades son densas, verticales y severas, coronadas por murallas, torres de vigilancia y campanas de alarma que nunca se desmontan.",
          "La Liga de los Talleres, mas cercana a los puertos y rutas de experimentacion, concentra ingenieros, artilleros, alquimistas practicos y academias de diseno mecanico. Alli nacen los dirigibles blindados, los automatas de carga, los mosquetes de chispa runica y las protesis de combate que han hecho famosa a la Confederacion.",
        ],
      },
      {
        title: "Cultura",
        body: [
          "En la Confederacion, el prestigio no procede solo de la sangre, sino de la competencia. Un buen soldado, una maestra remachadora o un inventor capaz de reducir el fallo de una caldera pueden ascender mas alto que muchos nobles menores. La obediencia importa, pero la eficacia importa aun mas.",
          "Su sociedad es dura, orgullosa y pragmaticamente comunitaria. Cada ciudadano aprende a leer sirenas, reconocer emblemas de fabrica y mantener una mascara de respiracion cerca en los barrios bajos. Para un extranjero, puede parecer una nacion gris y opresiva; para sus habitantes, es la razon por la que sus hijos siguen vivos.",
        ],
      },
      {
        title: "Relacion con Jadeon",
        body: [
          "La Guerra sin Fin contra los Reinos de Jadeon nace de fronteras, recursos e ideologia. Jadeon ve en la Confederacion una amenaza expansiva que convierte todo misterio en herramienta. La Confederacion ve en Jadeon una aristocracia peligrosa, dependiente de tradiciones magicas que no siempre entiende ni controla.",
          "Aun asi, cuando las Tierras de Nadie se agitan, ambos bandos saben que el enemigo del centro no distingue estandartes. En esas ocasiones, los tratados temporales se firman con tinta amarga y manos armadas.",
        ],
      },
    ],
  },
};
