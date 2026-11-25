/* ============================================================
   The content no longer lives here. It is in two files:
     content/site.json   front page (release), name, label, bio
     content/works.json  every film and record, in the order shown
   Edit them through Pages CMS (app.pagescms.org), see README.md.
   ============================================================ */
let SITE = null, WORKS = [];

/* ---------- the site itself: no need to edit below ---------- */
const app = document.getElementById("app");
/* words that keep their capitals even though the site is lowercase */
const caps = s => esc(s).replace(/\bDCP\b/g, '<span class="caps">DCP</span>');
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const slug = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pathOf = it => (it.slug && it.slug.trim()) || slug(it.title);
const findWork = k => WORKS.find(x => x.page && (pathOf(x) === k || slug(x.title) === k));
const has = a => Array.isArray(a) && a.length > 0;

const link = l => l.url
  ? `<li><a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a></li>`
  : `<li class="muted">${esc(l.label)}</li>`;

function titleCell(it) {
  if (it.page) return `<a href="/${pathOf(it)}/">${esc(it.title)}</a>`;
  if (it.url) return `<a href="${esc(it.url)}" rel="noopener">${esc(it.title)}</a>`;
  return `<span>${esc(it.title)}</span>`;
}

/* pictures: like the shop page we copied, every picture sits in a tall 1:2 frame,
   140% of the screen high; "big" fills 88% of the frame width, "small" 52%.
   films are always shown in a 3:2 frame; "focus" picks which part to keep (e.g. "50% 20%") */
const pics = (p, film) => has(p.images) ?
  `<section class="imgs${film ? " film" : ""}">${p.images.filter(im => im && (im.image || typeof im === "string")).map(im => {
    const src = typeof im === "string" ? im : im.image, size = (im.size === "small") ? "small" : "big";
    const focus = (im.focus || "").trim();
    return `<figure class="frame ${size}"><img src="${esc(src)}" alt="" loading="lazy"${focus ? ` style="object-position:${esc(focus)}"` : ""}></figure>`;
  }).join("")}</section>` : "";

function blocks(p) {
  let out = "";
  if (has(p.credits)) out += `<section class="lines">${p.credits.map(c => `<div>${c.trim() ? esc(c) : "&nbsp;"}</div>`).join("")}</section>`;
  if (has(p.links)) {
    const t = (p.linksTitle === undefined || p.linksTitle === null) ? "Digital" : p.linksTitle;
    out += `<section>${t ? `<h2>${esc(t)}</h2>` : ""}<ul>${p.links.map(link).join("")}</ul></section>`;
  }
  if (has(p.physical)) out += `<section><h2>Physical</h2><ul>${p.physical.map(link).join("")}</ul></section>`;
  return out;
}

const rows = list => `<ol class="rows">${list.map((it, i) =>
  `<li><span>${i + 1}. ${titleCell(it)}</span><span class="y">${esc(it.year || "")}</span></li>`).join("")}</ol>`;

function others() {
  const list = (SITE.otherReleases || []).map(t => WORKS.find(x => x.title === t)).filter(Boolean);
  return list.length ? `<section><h2>Releases</h2>${rows(list)}</section>` : "";
}

function filmsSection() {
  const list = (SITE.films || []).map(t => WORKS.find(x => x.title === t && x.page)).filter(Boolean);
  return list.length ? `<section class="part"><h2>Film</h2></section>` + list.map(work).join("") : "";
}

function home() {
  const r = SITE.release;
  const tracks = `<ol class="tracks">${(r.tracks || []).map((t, i) =>
    `<li><span>${i + 1}. ${esc(t.title)}</span><span class="y">${esc(t.length)}</span></li>`).join("")}</ol>`;
  return pics(r) + `<section class="label"><h1>${esc(SITE.name)} – ${esc(r.title)}</h1><div>${esc(r.date)}</div></section>` +
    `<section>${tracks}</section>` + blocks(r) + others() + filmsSection() +
    `<nav class="nav"><a href="/other-work/">Other work</a></nav>`;
}

function archive() {
  const sections = [...new Set(WORKS.map(w => w.section || "Other"))];
  return sections.map(s => `<section><h2>${esc(s)}</h2>${rows(WORKS.filter(w => (w.section || "Other") === s))}</section>`).join("") +
    `<section class="text bio"><p>${esc(SITE.bio)}</p></section>` +
    `<nav class="nav"><a href="/" class="back" aria-label="Back"><span class="back-mark" aria-hidden="true"></span></a></nav>`;
}

/* a work page opens like a label next to a piece of art:
   title, year and the facts (format, place, language or credits) as one tight block */
function work(it) {
  const isFilm = it.section === "Film";
  const head = `<section class="label head"><h2>${esc(it.title)}</h2>` +
    (it.year ? `<div class="yr">${esc(it.year)}</div>` : "") + `</section>`;
  const info = `<section class="label info">` +
    (it.about && it.about.trim() ? `<p class="about">${esc(it.about)}</p>` : "") +
    (it.details || []).map(f => `<div>${f.trim() ? caps(f) : "&nbsp;"}</div>`).join("") +
    (it.info || []).filter(l => l.url).map(l => `<div><a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a></div>`).join("") + `</section>`;
  const tracks = has(it.tracks) ? `<section class="tl"><ol class="tracks">${it.tracks.map((t, i) =>
    `<li><span>${i + 1}. ${esc(t.title)}</span><span class="y">${esc(t.length || "")}</span></li>`).join("")}</ol></section>` : "";
  /* four columns across the top: title, details, links, tracklist; then the pictures */
  return `<div class="top">${head}${info}<div class="side">${blocks(it)}</div>${tracks}</div>` + pics(it, isFilm);
}
const detail = it => work(it) + `<nav class="nav"><a href="/" class="back" aria-label="Back"><span class="back-mark" aria-hidden="true"></span></a></nav>`;

/* the picture strip on a work page scrolls sideways with the normal scroll wheel */
function strip() {
  const g = document.querySelector(".is-work .imgs");
  if (!g) return;
  g.addEventListener("wheel", e => {
    if (g.scrollWidth <= g.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const atStart = g.scrollLeft <= 0, atEnd = g.scrollLeft + g.clientWidth >= g.scrollWidth - 1;
    if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
    e.preventDefault(); g.scrollLeft += e.deltaY;
  }, { passive: false });
}

function setCanonical(path) {
  let l = document.querySelector('link[rel="canonical"]');
  if (!l) { l = document.createElement("link"); l.rel = "canonical"; document.head.appendChild(l); }
  l.href = "https://mythomaniacollection.com" + path;
}

function render() {
  /* old #links (mythomaniacollection.com/#territorie) move to the clean address */
  const h = location.hash.replace("#", "");
  if (h === "other-work" || h === "previous-work") { location.replace("/other-work/"); return; }
  if (h && findWork(h)) { location.replace("/" + pathOf(findWork(h)) + "/"); return; }

  const key = location.pathname.replace(/^\/|\/$/g, "").replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
  const it = key && findWork(key);
  if (key === "other-work" || key === "previous-work") {
    app.innerHTML = archive(); document.title = `Other work – ${SITE.name}`; setCanonical("/other-work/");
  } else if (it) {
    document.body.classList.add("is-work");
    app.innerHTML = detail(it); strip(); document.title = `${it.title} – ${SITE.name}`; setCanonical("/" + pathOf(it) + "/");
  } else {
    app.innerHTML = home(); document.title = SITE.name; setCanonical("/");
  }
}

/* "/" goes back to the page you came from on this site, otherwise to the front page */
document.addEventListener("click", e => {
  const a = e.target.closest("a.back");
  if (!a) return;
  if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) {
    e.preventDefault(); history.back();
  }
});
Promise.all(["/content/site.json", "/content/works.json"].map(u => fetch(u, { cache: "no-cache" }).then(r => r.json())))
  .then(([s, w]) => {
    SITE = s; WORKS = w;
    render();
    app.insertAdjacentHTML("beforebegin", `<header class="mm"><a href="/">${esc(SITE.label || "Mythomania Collection")}</a></header>`);
  });
document.body.insertAdjacentHTML("afterbegin", `<div class="mark" aria-hidden="true"></div><div class="crt" aria-hidden="true"></div>`);
/* the tower: five more pieces of the corner picture stacked on top of it (top to bottom) */
(function () {
  const home = document.querySelector("a.home");
  if (!home) return;
  const tiles = ["tower-2", "tower-1"]
    .map(t => `<img src="/images/${t}.jpg?v=6" alt="">`).join("");
  home.insertAdjacentHTML("afterbegin", tiles);
})();
