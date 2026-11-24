/* ============================================================
   EDIT HERE. Everything on the site comes from this block.
   - "release" is the front page: the newest thing.
     When a new release comes out, move the old one into
     Other work > Music as an item, and fill "release" with the new one.
   - "Other work" items: "url" links straight out, "page" gives the item
     its own page at mythomaniacollection.com/<address>/ (text, credits, links, physical).
     The address is the title in small letters with dashes, unless "slug" says otherwise.
     NEW WORK WITH A PAGE: also make its folder on GitHub. Add file > Create new file,
     name it <address>/index.html and paste the contents of territorie/index.html.
   - Leave a url as "" to show the line in grey until it exists.
   - info: links shown as the last lines of the label (e.g. IMDb).
   - Films: put the most relevant page (IMDb, festival, Vimeo) in "links".
     linksTitle: "" shows the links without a heading.
   ============================================================ */
const SITE = {
  name: "Julius Ernst",
  label: "Mythomania Collection",

  /* FRONT PAGE, top to bottom:
     1. "release": the newest music release
     2. "otherReleases": earlier music under Julius Ernst (exact titles from Other work)
     3. "films": an optional Film section, each film shown in full (empty = no section) */
  otherReleases: [],
  films: [],

  release: {
    title: "[Single title]",
    date: "30.11.26",
    tracks: [
      { title: "[Single title]", length: "00:00" }
    ],
    credits: [
      "Recorded at [place], [year]",
      "Engineered by [name]",
      "Mixed by [name]",
      "Mastered by [name]",
      "Cover photograph by [name]"
    ],
    links: [
      { label: "YouTube", url: "" },
      { label: "Spotify", url: "" },
      { label: "Apple Music", url: "" },
      { label: "Bandcamp", url: "" }
    ],
    physical: []
  },

  bio: "Musician, director and cinematographer Julius Ernst has been active within the world of music since the early 2010s, moving through a string of bands and aliases. At 19, he toured the United States, and has since played across Europe, including a run opening for fellow Copenhageners Iceage. Alongside the music, he works as a cinematographer and director. Julius graduated from the National Film School of Denmark, where he made fragmented, associative films built as much from sound and music as from image. He now releases music under his given name.",

  archive: [
    {
      title: "Film",
      items: [
        { title: "All Things Pass and Will Pass Again / Aiuto", year: "2025", slug: "all-things-pass-and-will-pass-again",
          page: { text: ["DCP, 30 min\nDenmark / Italy / Iceland\nItalian / Kurdish / Danish\nDirected by Julius Ernst\nOriginal music by Hari Shankar Kishore", "A sensory, fragmented film about what remains after loss."],
                  info: [{ label: "IMDb", url: "https://www.imdb.com/title/tt37495596/" }],
                  links: [
                    { label: "Ekko", url: "https://www.ekkofilm.dk/awards/2026/bedste-dokumentar/all-things-pass-and-will-pass-again/" }
                  ] } },
        { title: "Territorie", year: "2024",
          page: { text: ["DCP, 32 min\nDenmark\nDanish\nDirected by Julius Ernst", "A father and son, and the unspoken things passed down in an upper-class milieu."] } },
        { title: "Untitled", year: "2023",
          page: { text: ["DCP, 15 min\nDenmark\nFarsi / Danish\nDirected by Julius Ernst", "A daughter from the Iranian diaspora visits her parents one evening in the suburbs of Copenhagen, in the early days of the Mahsa Amini uprising."],
                  linksTitle: "",
                  links: [{ label: "FAMUFEST", url: "https://famufest.cz/films/film/untitled" }] } },
        { title: "Gregoris Mountain", year: "2021",
          page: { text: ["40 min\nGreece\nEnglish / Arabic\nDirected by Julius Ernst", "A portrait of Greg, a young man with roots in Syria, who returns to Greece and finds refuge in his relationship with a mountain."] } }
      ]
    },
    {
      title: "Music",
      items: [
        { title: "Josiah Konder, demos & voice memos", year: "2022",
          page: {
            credits: [
              "Recorded in Athens & Copenhagen",
              "Produced by Julius Ernst",
              "Mastered by Albert A. Hertz"
            ],
            links: [
              { label: "Spotify", url: "https://open.spotify.com/album/28r3EesxIz8rpT2TBJYzqh" },
              { label: "Apple Music", url: "https://music.apple.com/dk/album/demos-ep/1660221459" },
              { label: "Bandcamp", url: "https://josiahkonder.bandcamp.com/album/demos-voice-memos" }
            ],
            physical: [{ label: "Cassette", url: "https://josiahkonder.bandcamp.com/album/demos-voice-memos" }]
          } },
        { title: "Josiah Konder, Through the Stutter", year: "2019",
          page: {
            credits: [
              "Recorded at Rhythmic Music Conservatory, Studio B",
              "Engineered by Tanja Vesterbye Jessen",
              "Mixed by Jens \"Benz\" Søndergaard at Jens Benz Studio",
              "Mastered by Joel Krozer at Six Bit Deep",
              "Cover photograph by Ed Gumuchian",
              "\u00a0",
              "Third Coming Records"
            ],
            links: [
              { label: "Spotify", url: "https://open.spotify.com/album/6KHThGw0UB8KLXFbtOFRxn" },
              { label: "Apple Music", url: "https://music.apple.com/dk/album/through-the-stutter/1476398102" },
              { label: "Bandcamp", url: "https://josiahkonder.bandcamp.com/album/through-the-stutter-lp" }
            ],
            physical: [{ label: "Vinyl", url: "" }]
          } },
        { title: "Josiah Konder, Songs for the Stunned", year: "2018",
          page: {
            credits: [
              "Recorded at The Royal Danish Academy of Music",
              "Engineered by Sam Bower",
              "Mixed & mastered by Boris Wilsdorf at andereBaustelle Ton Studio",
              "Cover photograph by Christopher Anderson",
              "\u00a0",
              "Third Coming Records"
            ],
            links: [
              { label: "Spotify", url: "https://open.spotify.com/album/7BvYgsM62VbmafwZKd2M9a" },
              { label: "Apple Music", url: "https://music.apple.com/dk/album/songs-for-the-stunned/1389108948" },
              { label: "Bandcamp", url: "https://josiahkonder.bandcamp.com/album/songs-for-the-stunned-lp" }
            ],
            physical: [{ label: "Vinyl", url: "" }]
          } },
        { title: "J.E. Useless, Three Stages of Creative Death", year: "2014",
          page: {
            credits: [
              "Recorded on a TASCAM 488",
              "Engineered & mixed by Julius Ernst & Anton Funck",
              "Mastered by Peter Peter",
              "\u00a0",
              "Mythomania Col."
            ],
            links: [{ label: "Bandcamp", url: "https://jemusic.bandcamp.com/album/three-stages-of-creative-death" }],
            physical: [{ label: "Vinyl (Discogs)", url: "https://www.discogs.com/release/7019306-JE-Useless-Three-Stages-of-Creative-Death" }]
          } },
        { title: "Ocean View, Ocean.Puke.Future.", year: "2013" },
        { title: "Ocean View, No End", year: "2012" }
      ]
    }
  ]
};
/* ===================== end of edit area ===================== */

/* ---------- the site itself: no need to edit below ---------- */
const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const slug = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const items = SITE.archive.flatMap(s => s.items);
const pathOf = it => it.slug || slug(it.title);
const findWork = k => items.find(x => x.page && (pathOf(x) === k || slug(x.title) === k));

const link = l => l.url
  ? `<li><a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a></li>`
  : `<li class="muted">${esc(l.label)}</li>`;

function titleCell(it) {
  if (it.page) return `<a href="/${pathOf(it)}/">${esc(it.title)}</a>`;
  if (it.url) return `<a href="${esc(it.url)}" rel="noopener">${esc(it.title)}</a>`;
  return `<span>${esc(it.title)}</span>`;
}

function blocks(p) {
  let out = "";
  if (p.text && p.text.length) out += `<section class="text">${p.text.map(t => `<p>${esc(t)}</p>`).join("")}</section>`;
  if (p.credits && p.credits.length) out += `<section class="lines">${p.credits.map(c => `<div>${esc(c)}</div>`).join("")}</section>`;
  if (p.links && p.links.length) {
    const t = p.linksTitle === undefined ? "Digital" : p.linksTitle;
    out += `<section>${t ? `<h2>${esc(t)}</h2>` : ""}<ul>${p.links.map(link).join("")}</ul></section>`;
  }
  if (p.physical && p.physical.length) out += `<section><h2>Physical</h2><ul>${p.physical.map(link).join("")}</ul></section>`;
  return out;
}

const rows = list => `<ol class="rows">${list.map((it, i) =>
  `<li><span>${i + 1}. ${titleCell(it)}</span><span class="y">${esc(it.year || "")}</span></li>`).join("")}</ol>`;

function others() {
  const list = (SITE.otherReleases || []).map(t => items.find(x => x.title === t)).filter(Boolean);
  return list.length ? `<section><h2>Releases</h2>${rows(list)}</section>` : "";
}

function filmsSection() {
  const list = (SITE.films || []).map(t => items.find(x => x.title === t && x.page)).filter(Boolean);
  return list.length ? `<section class="part"><h2>Film</h2></section>` + list.map(work).join("") : "";
}

function home() {
  const r = SITE.release;
  const tracks = `<ol class="tracks">${r.tracks.map((t, i) =>
    `<li><span>${i + 1}. ${esc(t.title)}</span><span class="y">${esc(t.length)}</span></li>`).join("")}</ol>`;
  return `<section class="label"><h1>${esc(SITE.name)} – ${esc(r.title)}</h1><div>${esc(r.date)}</div></section>` +
    `<section>${tracks}</section>` + blocks(r) + others() + filmsSection() +
    `<nav class="nav"><a href="/other-work/">Other work</a></nav>`;
}

function archive() {
  return SITE.archive.map(s => `<section><h2>${esc(s.title)}</h2>${rows(s.items)}</section>`).join("") +
    `<section class="text bio"><p>${esc(SITE.bio)}</p></section>` +
    `<nav class="nav"><a href="/" class="back">/</a></nav>`;
}

/* a work page opens like a label next to a piece of art:
   title, year and the facts (format, place, language or credits) as one tight block */
function work(it) {
  const p = Object.assign({}, it.page);
  let facts = [], about = [];
  if (p.credits && p.credits.length) { facts = p.credits; p.credits = []; }
  else if (p.text && p.text.length && p.text[0].includes("\n")) {
    /* films: description first, then the technical lines */
    facts = p.text[0].split("\n"); about = p.text.slice(1); p.text = [];
  }
  const label = `<section class="label"><h2>${esc(it.title)}</h2>` +
    (it.year ? `<div class="yr">${esc(it.year)}</div>` : "") +
    about.map(t => `<p class="about">${esc(t)}</p>`).join("") +
    facts.map(f => `<div>${esc(f)}</div>`).join("") +
    (p.info || []).map(l => `<div><a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a></div>`).join("") + `</section>`;
  return label + blocks(p);
}
const detail = it => work(it) + `<nav class="nav"><a href="/" class="back">/</a></nav>`;

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
    app.innerHTML = detail(it); document.title = `${it.title} – ${SITE.name}`; setCanonical("/" + pathOf(it) + "/");
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
render();
document.body.insertAdjacentHTML("afterbegin", `<div class="mark" aria-hidden="true"></div>`);
/* the tower: five more pieces of the corner picture stacked on top of it (top to bottom) */
(function () {
  const home = document.querySelector("a.home");
  if (!home) return;
  const tiles = ["tower-2", "tower-1"]
    .map(t => `<img src="/images/${t}.jpg?v=6" alt="">`).join("");
  home.insertAdjacentHTML("afterbegin", tiles);
})();
app.insertAdjacentHTML("beforebegin", `<header class="mm"><a href="/"><span class="mm-mark" aria-hidden="true"></span>${esc(SITE.label || "Mythomania Collection")}</a></header>`);
