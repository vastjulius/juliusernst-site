# mythomaniacollection.com

## Editing (the easy way)
Go to https://app.pagescms.org, sign in with GitHub, open this repository.
- **Work (films and records)**: every film and record, in the order shown on Other work.
  Add, reorder, edit tracklists, credits, links, and upload pictures.
- **Front page and settings**: the newest release, the bio, the label name.
Press Save. The site updates by itself in about a minute.

### Pictures
Upload normal photos (jpg/png). For each picture choose **big** or **small**.
They scroll sideways in the order listed. Films are always cut to 3:2: use **Focus**
(e.g. `50% 20%`) to choose which part to keep.

### A new work
Add it in Work, switch on "Has its own page". Its address is made from the title
(mythomaniacollection.com/the-title/) unless you fill in "Web address". No folders to make.

## How it works (for later)
- content/site.json, content/works.json: all the content (what Pages CMS edits).
- site.js: the code that draws the pages. style.css: the look.
- tools/build.mjs + .github/workflows/pages.yml: on every save GitHub builds the site
  and makes a folder for every work page. GitHub Settings > Pages > Source must be "GitHub Actions".
- images/uploads: pictures uploaded from Pages CMS.
