const artworkFiles = [
  "0cc47e08-29d0-4780-b944-710f8eff0ce2-Tiny ship of hope..jpg",
  "0d29fe3d-4d94-4ba4-8639-16e478a01d6f-Deaf-mute sages.jpg",
  "2d2b1d10-0049-4071-baa5-0d43dda2f403-Rabat.jpg",
  "2ebc4444-1430-4fcd-8e86-cfce9f084f61-General rehearsal.jpg",
  "5f850e66-82cc-4d6a-ab33-aa2cd24dae82-Concurrence.jpg",
  "6baef322-1930-4098-8d4b-e7db9bd9d72c-Don't ask the mirror - what you are like.jpg",
  "7a95e8f3-77a6-4a67-89c7-55662cc745c4-Marshmallow horses.jpg",
  "7a621fe6-9d24-4eb6-8ad2-20479b75b3fd-Fes. Morning.jpg",
  "7e3f8187-4a9d-4431-8949-318ee9921660-A bold solution.jpg",
  "8d762afd-885b-4f62-a9f4-0ee355fcb05a-Gravity core.jpg",
  "08dc7b18-810e-4ea7-b9bd-d81459c863bd-Authentic value..jpg",
  "9f057d8d-d66b-48da-a042-6f151ffb931a-Les labyrinthes de Casablanca.jpg",
  "9fd40861-a545-4817-9ca2-dc2056a75bb5-Out of social media.To be honest. To be loved. For sake of Allah.jpg",
  "38a5c854-ae43-40b5-98ac-7fb463ceafb5-Two archetypes.jpg",
  "74e338e9-be05-4621-9299-d8dd6743bc35-Pastoral.jpg",
  "75c4eee2-e0bd-4418-b3f1-76e6bd2ddecd-The climb.jpg",
  "84c9ccf9-7c3b-40aa-b436-b3c0b53ee5f5-Idol.jpg",
  "096d15a4-f6b8-4293-ae13-1b8c7a21a930-Binary elegy.jpg",
  "183f1bc0-f91a-42f2-9b3f-ef6d5ecc3dd8-Best remedy.jpg",
  "340acc9d-43d0-4d2a-9c0b-b15ec128c297-Convergence.jpg",
  "454c1af5-9db3-4bee-aa93-998a279abab7-Reflection.jpg",
  "614d7ba5-16a9-48d7-8026-8028b094d41d-Nuit olivâtre.jpg",
  "732ed213-a6f8-45d8-a20e-e5c87a3f3016-Slaves of Chronos..jpg",
  "02947c61-d838-4bcb-99d8-c09f4214c5dd-You know the truth!.jpg",
  "8018c174-2b9e-47ff-baac-72c74087094b-Alter ego.jpg",
  "03194350-7be2-4593-9895-40a34a973d45-Five to midnight.jpg",
  "5156756a-b068-47e7-b359-a7248956fd7f-Féconde.jpg",
  "ab9c1599-e730-408e-9d9a-000b80100159-Your family is those who are guided by the same categories of good and evil as you..jpg",
  "ba2a8e58-ecb3-45d7-8124-4a3769852d55-Victory Song..jpg",
  "ba55fd95-2d95-4ad1-9e1c-7f4ca0b357f2-Spring..jpg",
  "ba8161d8-0ad7-4051-92c8-9db94d423c95-catch the mammoth or die out.jpg",
  "c9f8b5e3-b785-4ee3-a244-cd28ea8dc49f-Charisma..jpg",
  "c38ada7b-bc68-4490-bcbe-774160700d68-Rabat Stories. The medina in pink..jpg",
  "c48f2364-b9ae-4ac6-895a-371a5de69862-Decorative composition based on deconstruction and reverse synthesis of the generalised form of a Moroccan teapot..jpg",
  "d26cc06e-943b-4f1b-b354-72924e2d283c-I testify.jpg",
  "e1823a92-9c4a-4ab3-b27e-e7390962baad-We wish you nothing but the best.jpg",
  "e8651a5f-6720-49e0-8085-887a0647b3d9-You are an ant.jpg",
  "e53888a9-a7da-4758-903c-a852afa12b05-Construction stable.jpg",
  "ee6ab8c5-70ad-46eb-babf-21439641f6f7-Coquelicots.jpg",
  "fdfe9ce6-2248-466e-86ee-8273101d1dad-Aporia.jpg",
  "ff355eb7-509f-4996-9f7e-c8f735cff552-Instinct..jpg"
];

const titleFromFilename = (filename) => filename.replace(/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-/i, "").replace(/\.[^.]+$/, "").replace(/\.+$/, "");
const artworkUrl = (filename) => `public/artworks/${encodeURIComponent(filename).replace(/[!'()*]/g, (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`)}`;
const gallery = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxFallback = document.querySelector("#lightbox-fallback");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxNumber = document.querySelector("#lightbox-number");
let activeIndex = 0;
let lastFocusedElement;

artworkFiles.forEach((filename, index) => {
  const title = titleFromFilename(filename);
  const card = document.createElement("article");
  card.className = "art-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View ${title}`);
  card.innerHTML = `<div class="art-image-wrap"><img class="art-image" loading="lazy" src="${artworkUrl(filename)}" alt="${title} by Igor Loguinov"><span class="image-fallback" aria-hidden="true">Image unavailable</span></div><div class="art-info"><h3 class="art-title">${title}</h3><span class="art-number">${String(index + 1).padStart(2, "0")}</span></div>`;
  const image = card.querySelector(".art-image");
  image.addEventListener("error", () => {
    image.hidden = true;
    card.querySelector(".image-fallback").hidden = false;
  }, { once: true });
  card.addEventListener("click", () => openLightbox(index));
  card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLightbox(index); } });
  gallery.appendChild(card);
});

function openLightbox(index) {
  activeIndex = (index + artworkFiles.length) % artworkFiles.length;
  const filename = artworkFiles[activeIndex];
  lightboxImage.src = artworkUrl(filename);
  lightboxImage.alt = `${titleFromFilename(filename)} by Igor Loguinov`;
  lightboxImage.hidden = false;
  lightboxFallback.hidden = true;
  lightboxTitle.textContent = titleFromFilename(filename);
  lightboxNumber.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(artworkFiles.length).padStart(2, "0")}`;
  lastFocusedElement = document.activeElement;
  lightbox.hidden = false;
  document.body.classList.add("is-locked");
  lightbox.querySelector(".lightbox-close").focus();
}
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("is-locked");
  if (lastFocusedElement) lastFocusedElement.focus();
}
function moveLightbox(direction) { openLightbox(activeIndex + direction); }
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightboxImage.addEventListener("error", () => {
  lightboxImage.hidden = true;
  lightboxFallback.hidden = false;
});
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#work-count").textContent = artworkFiles.length;
document.querySelector("#year").textContent = new Date().getFullYear();
