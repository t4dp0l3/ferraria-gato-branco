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
   - title      : name of the piece, shown under the photo
   - category   : one of "gates", "railings", "lighting", "signage", "restoration", "other"
                  (this controls which filter button shows it)
   - material   : e.g. "Forged steel", "Wrought iron", "Steel, plasma cut"
   - year       : e.g. "2026"
   - note       : one short line about the piece (optional — leave as "" if none)
   ============================================================ */

const galleryPieces = [
  {
    image: "placeholder-1.jpg",
    title: "Garden Gate, Ródão",
    category: "gates",
    material: "Forged wrought iron",
    year: "2026",
    note: "Hand-scrolled detail, fitted collars, no welds visible."
  },
  {
    image: "placeholder-2.jpg",
    title: "Quinta Entrance Lamp",
    category: "lighting",
    material: "Forged steel",
    year: "2026",
    note: "Restoration of a 1940s street lamp pattern."
  },
  {
    image: "placeholder-3.jpg",
    title: "Café Sign, Castelo Branco",
    category: "signage",
    material: "Steel, plasma cut",
    year: "2026",
    note: ""
  },
  {
    image: "placeholder-4.jpg",
    title: "Balcony Railing Set",
    category: "railings",
    material: "Forged and riveted iron",
    year: "2026",
    note: "Six matching panels, traditional baluster pattern."
  }
];
