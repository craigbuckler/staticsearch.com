---
title: StaticSearch quick start
menu: Quick start
description: How to add a search engine to your static website using StaticSearch.
date: 2026-09-11
priority: 0.8
tags: quick start
---

Unlike other search systems, StaticSearch analyses the content of your generated site's HTML pages -- there's no need to manually index your content.


## 1. Add a StaticSearch widget

For this quick start, we'll add a search widget first so you don't need to generate your site twice. Add the following tag to your pages or templates where you want a search icon to appear (typically, in your HTML `<header>`):

{{ HTML }}
```html
<script type="module" src="/search/staticsearch-here.js"></script>
```

Build your site using your [Static Site Generator](https://publican.dev/) -- the `<script>` tag won't do anything yet.


## 2. Index your pages

To index your page content, install [Node.js](https://nodejs.org/) version 22 or above. In your terminal, `cd` to your built website's root, e.g.

{{ terminal }}
```bash
cd build
```

and run the StaticSearch indexer:

{{ terminal }}
```bash
npx staticsearch ./
```

This creates a `search` sub-directory with the client-side code and word index data.


## 3. Test your search

Test your site by running a development web server, e.g.

{{ terminal }}
```bash
npx livelocalhost
```

Open the displayed `localhost` address, click the search icon (or press <kbd>Ctrl</kbd> + <kbd>K</kbd>), and enter some queries.

If necessary, you can style the search icon using the following CSS selector:

{{ CSS }}
```css
static-search::part(activate) {
  inline-size: 2em;
  block-size: auto;
}
```

Remember to [re-run the indexer](#a-2-index-your-html-pages) whenever you re-generate your site's HTML pages.


## Next steps

You can improve StaticSearch results:

1. [Set indexer configuration options](__/docs/quick-start/index-site/) such file locations, page structure, and language.

1. [Use alternative search options](__/docs/quick-start/add-search/) to change the user interface or search functionality.
