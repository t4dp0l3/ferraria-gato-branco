// ============================================================
// TRANSLATIONS — all site text in Portuguese, English, Spanish
// ============================================================
// To edit wording: find the key below and change the text for
// each language. Keys are reused throughout index.html via
// data-i18n="keyname" attributes — don't rename keys unless you
// also update index.html to match.

const translations = {
  pt: {
    "nav.gallery": "Galeria",
    "nav.about": "Sobre",
    "nav.request": "Encomendas",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Vila Velha de Ródão · Portugal",
    "hero.title": "Ferro, fogo,<br>e um nome antigo<br>aceso outra vez.",
    "hero.sub": "Forja tradicional de ferro forjado — portões, gradeamentos, candeeiros, restauro e sinalética por encomenda.",
    "hero.cta1": "Ver trabalhos",
    "hero.cta2": "Pedir um orçamento",

    "about.eyebrow": "A forja",
    "about.title": "Reaberta, não reinventada.",
    "about.p1": "A ferraria voltou a aquecer. O mesmo lugar, as mesmas bigornas, com o conhecimento de quem lá trabalhou antes a juntar-se a técnicas novas — corte a plasma incluído, para sinalética e peças que pedem outra precisão.",
    "about.p2": "Trabalho à mão, ao calor da forja: portões, gradeamentos, candeeiros de rua, restauro de ferro antigo, e peças por encomenda — desenhadas e feitas uma a uma.",
    "about.stat1num": "100% à mão",
    "about.stat1label": "Forjado, não fundido",
    "about.stat2num": "1 a 1",
    "about.stat2label": "Sem produção em série",
    "about.stat3num": "Local",
    "about.stat3label": "Vila Velha de Ródão",

    "gallery.eyebrow": "Catálogo",
    "gallery.title": "Peças feitas",
    "gallery.all": "Todas",
    "gallery.gates": "Portões",
    "gallery.railings": "Gradeamentos",
    "gallery.lighting": "Iluminação",
    "gallery.signage": "Sinalética",
    "gallery.restoration": "Restauro",

    "request.eyebrow": "Peças por encomenda",
    "request.title": "Tem uma ideia? Vamos forjá-la.",
    "request.sub": "Portões, gradeamentos, restauro, sinalética ou outra coisa qualquer em ferro. Descreva o que precisa — respondo por email.",
    "request.name": "Nome",
    "request.email": "Email",
    "request.type": "Tipo de peça",
    "request.type.gate": "Portão",
    "request.type.railing": "Gradeamento",
    "request.type.lighting": "Iluminação / candeeiro",
    "request.type.signage": "Sinalética",
    "request.type.restoration": "Restauro",
    "request.type.other": "Outro",
    "request.message": "Descreva o que tem em mente",
    "request.messagePlaceholder": "Dimensões aproximadas, local de instalação, estilo, prazo desejado...",
    "request.submit": "Enviar pedido",
    "request.fallback": "Prefere email direto? Escreva para",
    "request.success": "Pedido enviado. Resposta em breve.",

    "footer.address": "Vila Velha de Ródão, Portugal",
    "footer.rights": "&copy; 2026 Ferraria do Gato Branco",

    "lightbox.close": "Fechar"
  },

  en: {
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.request": "Commissions",
    "nav.contact": "Contact",

    "hero.eyebrow": "Vila Velha de Ródão · Portugal",
    "hero.title": "Iron, fire,<br>and an old name<br>lit again.",
    "hero.sub": "Traditional hand-forged ironwork — gates, railings, lighting, restoration and custom signage.",
    "hero.cta1": "See the work",
    "hero.cta2": "Request a quote",

    "about.eyebrow": "The forge",
    "about.title": "Reopened, not reinvented.",
    "about.p1": "The forge is lit again. Same place, same anvils — the knowledge of those who worked here before, now joined with newer techniques, plasma cutting included, for signage and pieces that call for a different kind of precision.",
    "about.p2": "Made by hand, at the heat of the fire: gates, railings, street lighting, restoration of old ironwork, and custom commissions — designed and made one at a time.",
    "about.stat1num": "100% handmade",
    "about.stat1label": "Forged, not cast",
    "about.stat2num": "One at a time",
    "about.stat2label": "No mass production",
    "about.stat3num": "Local",
    "about.stat3label": "Vila Velha de Ródão",

    "gallery.eyebrow": "Catalogue",
    "gallery.title": "Finished pieces",
    "gallery.all": "All",
    "gallery.gates": "Gates",
    "gallery.railings": "Railings",
    "gallery.lighting": "Lighting",
    "gallery.signage": "Signage",
    "gallery.restoration": "Restoration",

    "request.eyebrow": "Custom commissions",
    "request.title": "Got an idea? Let's forge it.",
    "request.sub": "Gates, railings, restoration, signage, or anything else in iron. Describe what you need — I'll reply by email.",
    "request.name": "Name",
    "request.email": "Email",
    "request.type": "Type of piece",
    "request.type.gate": "Gate",
    "request.type.railing": "Railing",
    "request.type.lighting": "Lighting fixture",
    "request.type.signage": "Signage",
    "request.type.restoration": "Restoration",
    "request.type.other": "Other",
    "request.message": "Describe what you have in mind",
    "request.messagePlaceholder": "Approximate dimensions, installation location, style, desired timeline...",
    "request.submit": "Send request",
    "request.fallback": "Prefer direct email? Write to",
    "request.success": "Request sent. I'll reply soon.",

    "footer.address": "Vila Velha de Ródão, Portugal",
    "footer.rights": "&copy; 2026 Ferraria do Gato Branco",

    "lightbox.close": "Close"
  },

  es: {
    "nav.gallery": "Galería",
    "nav.about": "Sobre",
    "nav.request": "Encargos",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Vila Velha de Ródão · Portugal",
    "hero.title": "Hierro, fuego,<br>y un nombre antiguo<br>encendido otra vez.",
    "hero.sub": "Forja tradicional de hierro forjado a mano — verjas, barandillas, farolas, restauración y letreros por encargo.",
    "hero.cta1": "Ver trabajos",
    "hero.cta2": "Pedir presupuesto",

    "about.eyebrow": "La forja",
    "about.title": "Reabierta, no reinventada.",
    "about.p1": "La forja volvió a encenderse. El mismo lugar, los mismos yunques, con el conocimiento de quienes trabajaron aquí antes, ahora junto a técnicas nuevas — corte por plasma incluido, para letreros y piezas que requieren otra precisión.",
    "about.p2": "Trabajo hecho a mano, al calor del fuego: verjas, barandillas, farolas de calle, restauración de hierro antiguo, y piezas por encargo — diseñadas y hechas una a una.",
    "about.stat1num": "100% a mano",
    "about.stat1label": "Forjado, no fundido",
    "about.stat2num": "Uno a uno",
    "about.stat2label": "Sin producción en serie",
    "about.stat3num": "Local",
    "about.stat3label": "Vila Velha de Ródão",

    "gallery.eyebrow": "Catálogo",
    "gallery.title": "Piezas hechas",
    "gallery.all": "Todas",
    "gallery.gates": "Verjas",
    "gallery.railings": "Barandillas",
    "gallery.lighting": "Iluminación",
    "gallery.signage": "Letreros",
    "gallery.restoration": "Restauración",

    "request.eyebrow": "Piezas por encargo",
    "request.title": "¿Tiene una idea? Vamos a forjarla.",
    "request.sub": "Verjas, barandillas, restauración, letreros o cualquier otra cosa en hierro. Describa lo que necesita — responderé por correo.",
    "request.name": "Nombre",
    "request.email": "Correo electrónico",
    "request.type": "Tipo de pieza",
    "request.type.gate": "Verja",
    "request.type.railing": "Barandilla",
    "request.type.lighting": "Farola / lámpara",
    "request.type.signage": "Letrero",
    "request.type.restoration": "Restauración",
    "request.type.other": "Otro",
    "request.message": "Describa lo que tiene en mente",
    "request.messagePlaceholder": "Dimensiones aproximadas, lugar de instalación, estilo, plazo deseado...",
    "request.submit": "Enviar solicitud",
    "request.fallback": "¿Prefiere correo directo? Escriba a",
    "request.success": "Solicitud enviada. Responderé pronto.",

    "footer.address": "Vila Velha de Ródão, Portugal",
    "footer.rights": "&copy; 2026 Ferraria do Gato Branco",

    "lightbox.close": "Cerrar"
  }
};
