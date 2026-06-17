/* ============================================================
   GALLERY DATA — edit this file to add, remove, or change pieces
   ============================================================

   To add a new piece:
   1. Put the photo file in the /images/gallery/ folder
   2. Copy one of the blocks below, paste it in the list
   3. Change the details to match your piece
   4. Save the file — that's it, no other steps

   Fields:
   - image      : filename of the photo, must be inside images/gallery/
   - title      : { pt: "...", en: "...", es: "..." } — name shown under the photo
   - category   : one of "gates", "railings", "lighting", "signage", "restoration", "other"
                  (this controls which filter button shows it)
   - material   : { pt: "...", en: "...", es: "..." } — e.g. "Forged steel"
   - year       : e.g. "2026" (same in all languages, just a number)
   - note       : { pt: "...", en: "...", es: "..." } — one short line, optional
                  (leave any language as "" if you don't have a translation —
                  it'll just show blank for that language)
   ============================================================ */

const galleryPieces = [
  {
    image: "placeholder-1.jpg",
    title: { pt: "Portão de Jardim, Ródão", en: "Garden Gate, Ródão", es: "Verja de Jardín, Ródão" },
    category: "gates",
    material: { pt: "Ferro forjado", en: "Forged wrought iron", es: "Hierro forjado" },
    year: "2026",
    note: {
      pt: "Detalhe em voluta forjada à mão, com colares ajustados, sem soldaduras visíveis.",
      en: "Hand-scrolled detail, fitted collars, no welds visible.",
      es: "Detalle de voluta forjada a mano, con collares ajustados, sin soldaduras visibles."
    }
  },
  {
    image: "placeholder-2.jpg",
    title: { pt: "Candeeiro de Entrada de Quinta", en: "Quinta Entrance Lamp", es: "Farola de Entrada de Quinta" },
    category: "lighting",
    material: { pt: "Aço forjado", en: "Forged steel", es: "Acero forjado" },
    year: "2026",
    note: {
      pt: "Restauro de um modelo de candeeiro de rua dos anos 1940.",
      en: "Restoration of a 1940s street lamp pattern.",
      es: "Restauración de un modelo de farola de calle de los años 1940."
    }
  },
  {
    image: "placeholder-3.jpg",
    title: { pt: "Letreiro de Café, Castelo Branco", en: "Café Sign, Castelo Branco", es: "Letrero de Café, Castelo Branco" },
    category: "signage",
    material: { pt: "Aço, corte a plasma", en: "Steel, plasma cut", es: "Acero, corte por plasma" },
    year: "2026",
    note: { pt: "", en: "", es: "" }
  },
  {
    image: "placeholder-4.jpg",
    title: { pt: "Conjunto de Gradeamento de Varanda", en: "Balcony Railing Set", es: "Conjunto de Barandilla de Balcón" },
    category: "railings",
    material: { pt: "Ferro forjado e rebitado", en: "Forged and riveted iron", es: "Hierro forjado y remachado" },
    year: "2026",
    note: {
      pt: "Seis painéis iguais, padrão tradicional de balaústres.",
      en: "Six matching panels, traditional baluster pattern.",
      es: "Seis paneles iguales, patrón tradicional de balaustres."
    }
  }
];
