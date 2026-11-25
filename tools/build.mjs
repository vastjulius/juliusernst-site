// Builds the site into _site/ for GitHub Pages.
// Runs on GitHub by itself every time something is saved (see .github/workflows/pages.yml).
// It copies the site and makes a folder with an index.html for every work that has its own page,
// so new works get their own address (mythomaniacollection.com/<slug>/) automatically.
import fs from "node:fs";
import path from "node:path";

const OUT = "_site";
const SKIP = new Set([OUT, ".git", ".github", "tools", "node_modules", ".pages.yml", "README.md"]);

fs.rmSync(OUT, { recursive: true, force: true });
for (const f of fs.readdirSync(".")) if (!SKIP.has(f)) fs.cpSync(f, path.join(OUT, f), { recursive: true });

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const slug = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const site = JSON.parse(fs.readFileSync("content/site.json", "utf8"));
const works = JSON.parse(fs.readFileSync("content/works.json", "utf8"));
// work pages start from the front page's index.html, without its own description and profile data
const template = fs.readFileSync("index.html", "utf8")
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/, "")
  .replace(/<meta (name="description"|property="og:(title|description|url|type)")[^>]*>\n?/g, "");

const page = (title, desc, img, url) => {
  let h = template.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  const meta = `<meta property="og:title" content="${esc(title)}">\n<meta property="og:url" content="https://mythomaniacollection.com/${url}/">` +
    (desc ? `\n<meta name="description" content="${esc(desc)}">\n<meta property="og:description" content="${esc(desc)}">` : "");
  h = h.replace("</head>", meta + "\n</head>");
  if (img) h = h.replace(/(<meta property="og:image" content=")[^"]*/, `$1https://mythomaniacollection.com${img}`);
  return h;
};
const write = (dir, html) => { fs.mkdirSync(path.join(OUT, dir), { recursive: true }); fs.writeFileSync(path.join(OUT, dir, "index.html"), html); };

let n = 0;
for (const w of works) {
  if (!w.page || !w.title) continue;
  const s = (w.slug && w.slug.trim()) || slug(w.title);
  const first = (w.images || []).map(i => (typeof i === "string" ? i : i && i.image)).find(Boolean);
  write(s, page(`${w.title} – ${site.name}`, (w.about || "").trim(), first, s));
  n++;
}
write("other-work", page(`Other work – ${site.name}`, "", null, "other-work"));
write("previous-work", page(`Other work – ${site.name}`, "", null, "other-work"));
console.log(`built ${n} work pages`);
