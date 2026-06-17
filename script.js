// ============================================================
// FERRARIA DO GATO BRANCO — site behaviour
// ============================================================

const categoryLabels = {
  gates: "Portão",
  railings: "Gradeamento",
  lighting: "Iluminação",
  signage: "Sinalética",
  restoration: "Restauro",
  other: "Outro"
};

const grid = document.getElementById("gallery-grid");

function renderGallery(filter) {
  grid.innerHTML = "";
  const pieces = filter === "all"
    ? galleryPieces
    : galleryPieces.filter(p => p.category === filter);

  pieces.forEach((piece, i) => {
    const el = document.createElement("div");
    el.className = "piece";
    el.innerHTML = `
      <div class="piece-photo">
        <span class="piece-num">N.&deg; ${String(i + 1).padStart(2, "0")}</span>
        <img src="images/gallery/${piece.image}" alt="${piece.title}" loading="lazy">
      </div>
      <div class="piece-info">
        <p class="piece-title">${piece.title}</p>
        <div class="piece-meta">
          <span>${piece.material}</span>
          <span>${piece.year}</span>
        </div>
      </div>
    `;
    el.addEventListener("click", () => openLightbox(piece, i));
    grid.appendChild(el);
  });
}

renderGallery("all");

// ---- filters ----
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// ---- lightbox ----
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbMeta = document.getElementById("lightbox-meta");
const lbNote = document.getElementById("lightbox-note");
const lbNum = document.getElementById("lightbox-num");

function openLightbox(piece, i) {
  lbImg.src = `images/gallery/${piece.image}`;
  lbImg.alt = piece.title;
  lbTitle.textContent = piece.title;
  lbMeta.textContent = `${piece.material} — ${piece.year}`;
  lbNote.textContent = piece.note || "";
  lbNum.textContent = `N.\u00b0 ${String(i + 1).padStart(2, "0")} \u2014 ${categoryLabels[piece.category] || ""}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---- mobile nav ----
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---- request form ----
const form = document.getElementById("request-form");
const formSuccess = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // If Formspree hasn't been configured yet, fall back to opening a mailto.
  if (form.action.includes("YOUR_FORM_ID")) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent(`Pedido de encomenda — ${type}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nTipo: ${type}\n\n${message}`
    );
    window.location.href = `mailto:gatobrancoferraria@gmail.com?subject=${subject}&body=${body}`;
    return;
  }

  try {
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      form.hidden = true;
      formSuccess.hidden = false;
    } else {
      alert("Algo correu mal. Tente novamente ou envie um email diretamente.");
    }
  } catch (err) {
    alert("Algo correu mal. Tente novamente ou envie um email diretamente.");
  }
});
