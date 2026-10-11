# The Hayes House — static rental website (draft)

Plain HTML/CSS/JS. No framework, no build step. Every page opens straight from disk.

## Files

```
index.html      Home (hero, highlights, "Check availability / Inquire")
house.html      The House (rooms and amenities, all placeholders)
gallery.html    Photos (placeholder tiles)
rates.html      Rates & Availability (rate table, family-blocked dates, calendar placeholder)
location.html   Location & Area (Schroon Lake, nearby activities)
rules.html      House Rules & Policies (placeholders)
faq.html        FAQ
inquire.html    Inquire / Contact (form NOT connected to anything)
css/style.css   All styling. Colors and fonts are at the top in :root
js/main.js      Site name, optional Airbnb/VRBO links, mobile menu, form notice
images/         SVG placeholder images and favicon
```

## Preview locally

- **Easiest:** double-click `index.html`. All links are relative, so it works from disk.
- **Local web server (optional):** in this folder, run `python3 -m http.server 8000` and open http://localhost:8000.

## Editing placeholders

- Anything shown in a red dashed box is a placeholder. In the HTML, search for
  `class="ph"` (PLACEHOLDER) and `class="ph confirm"` (WORDING TO CONFIRM).
  Replace the whole `<span class="ph">…</span>` with the real text.
- **Site name:** change `name` at the top of `js/main.js`. That updates every element
  with `data-site="name"`. Also update the same text in the HTML so it shows without JS
  and in search results, and update the `<title>` tags.
- **Airbnb / VRBO links (optional):** set `airbnbUrl` / `vrboUrl` in `js/main.js`.
  Leave them as `""` to keep those links hidden.
- **Colors and fonts:** edit the variables in `:root` at the top of `css/style.css`
  (`--navy`, `--steel`, `--sky`, `--mist`, `--brass`, `--serif`, `--sans`).
- **Photos:** put real photos (JPG or WebP, about 1600px wide) in `images/`. Update each
  `src` and write a real `alt` description. The home-page hero image is set in `css/style.css`
  (`.hero` → `images/hero-placeholder.svg`).
- **Inquiry form:** it currently sends nothing. To make it work, connect a form
  service such as Formspree, Basin, or Netlify Forms (set the `<form action>`), or replace
  it with a booking-tool widget. Then delete the submit handler in `js/main.js`.
- **Calendar:** replace the `.embed-ph` box on `rates.html` with a Google Calendar
  embed or a booking-tool widget.
- **Before launch:** delete the `<meta name="robots" content="noindex">` line in each
  page and the "Draft site" banner.

## Hosting note

Google Sites is a drag-and-drop builder. It can't host uploaded custom HTML/CSS/JS
(only small embed snippets), so it can't run this code as-is. To use these files as-is, put
them on a free static host such as **GitHub Pages** (Netlify and Cloudflare Pages are
alternatives). Upload the contents of this folder so that `index.html` sits at the root.

## Domain

**Is a custom domain worth it?** Yes, for a direct-booking rental. It builds trust
(guests are wary of rental scams), it's easy to remember and type, and repeat renters can
find you again every year. A `.com` costs roughly **$10–20/yr** (Squarespace charges
about $10 for the first year, then about $20/yr to renew).

**Options**
1. **Subdomain of mjnrealty.com** (already owned, managed at Squarespace), e.g.
   `hayeshouse.mjnrealty.com` or `stay.mjnrealty.com`. Costs nothing extra and leaves the
   existing mjnrealty.com site untouched.
2. **Subpath** (e.g. `mjnrealty.com/hayes-house`). This only works if the page is built
   *inside* the Squarespace site that already serves mjnrealty.com. GitHub Pages can't
   serve one folder of a domain that Squarespace hosts, so this code can't be used as-is.
3. **New dedicated domain** (name TBD). This is the most memorable option for guests,
   at about $10–20/yr.

**Pointing a Squarespace-managed domain at GitHub Pages** (per GitHub's docs,
docs.github.com → Pages → "Managing a custom domain for your GitHub Pages site")

1. On GitHub, open the repo → **Settings → Pages → Custom domain**, enter the domain, and
   click **Save**. Do this *before* changing DNS, to avoid domain takeover. When
   publishing from a branch, this adds a `CNAME` file to the repo root containing the
   domain (you can also commit that file yourself). Optionally, verify the domain in
   your GitHub account settings for extra protection.
2. In Squarespace, go to **Domains → (domain) → DNS / DNS settings → Custom records**:
   - **Subdomain** (e.g. `hayeshouse.mjnrealty.com`): add one `CNAME` record with host
     `hayeshouse`, pointing to `<github-username>.github.io` (leave out the repo name).
   - **Apex/new domain** (e.g. `example.com`): add four `A` records for host `@`:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
     For IPv6 you can also add `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`.
     Then add a `CNAME` record for `www` → `<github-username>.github.io`.
     Remove any default Squarespace records for `@`/`www` first. **Don't do this on
     mjnrealty.com's apex**, because it would take the existing Squarespace site offline.
   - Don't use wildcard (`*`) records.
3. Wait for DNS to update (it can take up to 24 hours). Check with
   `dig yourdomain +noall +answer`.
4. Back in **Settings → Pages**, tick **Enforce HTTPS**. It can take up to 24 hours to
   become available.

## Design changes

The site was restyled from the earlier rustic Adirondack look to a modern coastal/nautical theme.
Page content, placeholders, the draft banner/noindex and the unwired form are unchanged.

- **Palette:** deep navy `#0b2545`, steel/ocean blue `#3e6d9c`, sky `#8fb3d9`, pale blue
  tint `#eef4fa`, white, and a restrained brass/sand accent `#c9a96e`. There's no green or wood anymore.
- **Typography:** an elegant serif for headings (Cormorant Garamond) and a clean sans for body
  text (Inter), loaded from Google Fonts. Offline, it falls back to system fonts (Palatino/Georgia,
  and Segoe UI/Roboto/Helvetica/Arial), so the files still work from disk without internet.
- **Motifs:** a simple sailboat SVG in the logo mark, the favicon and the hero image. Page
  heroes have a wave divider, and a thin mountain-ridge line in the footer is the one nod
  to the Adirondacks.
- **Layout:** more whitespace, a white sticky header, minimal rounded corners, subtle shadows,
  and small brass rules under headings.
- **Placeholders:** shown as sand-colored callouts with a brass left bar labeled
  "PLACEHOLDER ·". "Wording to confirm" items use a pale-blue callout. Both are still clearly visible.
- **Images:** the placeholder images are now navy/blue gradient SVGs.
