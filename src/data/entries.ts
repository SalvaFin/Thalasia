import { generalInfo } from "./general";

export type LoreEntry = {
  title: string;
  href: string;
  summary: string;
  status?: "Completa" | "Pendiente";
};

export type LocationEntry = LoreEntry & {
  kind: "Region" | "Pais" | "Zona";
  children?: LocationEntry[];
};

export const locationTree: LocationEntry[] = [
  {
    title: "Confederacion del Hierro",
    href: "/lore/confederacion-del-hierro",
    kind: "Region",
    summary:
      "Potencia occidental de acero, vapor y voluntad militar, levantada como muralla viva frente a las Tierras de Nadie.",
    status: "Completa",
  },
  {
    title: "Reinos de Jadeon",
    href: "/lore/reinos-de-jadeon",
    kind: "Region",
    summary:
      "Alianza oriental de reinos marcada por la magia, las casas reales y el legado del heroe Jadeon.",
    status: "Pendiente",
    children: [
      {
        title: "Crestfall",
        href: "/lore/crestfall",
        kind: "Pais",
        summary: "Reino del suroeste jadeonita y nexo con rutas costeras e islas cercanas.",
        status: "Pendiente",
        children: [
          {
            title: "Trengar",
            href: "/lore/trengar",
            kind: "Zona",
            summary: "Isla vinculada a Crestfall y marcada como zona de interes.",
            status: "Pendiente",
          },
        ],
      },
      {
        title: "Thorian",
        href: "/lore/thorian",
        kind: "Pais",
        summary: "Reino septentrional de Jadeon, frontera clave frente al mar y los pasos del norte.",
        status: "Pendiente",
      },
      {
        title: "Valeria",
        href: "/lore/valeria",
        kind: "Pais",
        summary: "Reino oriental de Jadeon, expuesto a rutas maritimas y viejas tensiones fronterizas.",
        status: "Pendiente",
      },
      {
        title: "Eldoria",
        href: "/lore/eldoria",
        kind: "Pais",
        summary: "Reino meridional de Jadeon, asociado a cosechas, renovacion y tradicion magica.",
        status: "Pendiente",
      },
    ],
  },
  {
    title: "Tierras de Nadie",
    href: "/lore/tierras-de-nadie",
    kind: "Region",
    summary:
      "Region central inhospita que separa a las dos grandes potencias y expulsa amenazas antiguas.",
    status: "Pendiente",
  },
];

export const historyEntries: LoreEntry[] = [
  {
    title: "Las eras de Thalasia",
    href: "/historia",
    summary: "Historia general del continente desde la Formacion hasta el Conflicto Eterno.",
    status: "Completa",
  },
];

export const generalEntries: LoreEntry[] = generalInfo.map((entry) => ({
  title: entry.title,
  href: entry.href,
  summary: entry.body,
  status: entry.title === "Astralita" ? "Completa" : "Pendiente",
}));

function flattenLocations(entries: LocationEntry[]): LoreEntry[] {
  return entries.flatMap((entry) => [
    entry,
    ...(entry.children ? flattenLocations(entry.children) : []),
  ]);
}

export const loreEntries = [
  ...flattenLocations(locationTree),
  ...historyEntries,
  ...generalEntries,
];
