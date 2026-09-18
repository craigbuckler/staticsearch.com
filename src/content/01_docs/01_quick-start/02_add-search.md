---
title: Add search to your website
menu: Add site search
description: Further ways to use and configure StaticSearch when adding search functionality to your website
date: 2026-09-14
priority: 0.8
tags: quick start, script tag, web component, CSP
---

After indexing your site, you can add a search facility to your site using a single `<script>` tag wherever you want an icon to appear:

{{ template excerpt }}
```html
<script type="module" src="/search/staticsearch-here.js"></script>
```

:::aside

All code on this page presumes the indexer created a directory named `/search/`. Change the path if you [generated it elsewhere](__/docs/quick-start/index-site/#set-the-staticsearch-directory).

:::/aside


## StaticSearch web component

The code above adds a `<static-search>` web component in the `<script>` location. Adding the web component yourself provides further search functionality. The following code adds a clickable **SEARCH** link:

{{ HTML excerpt }}
```html
<!-- include script once on your page -->
<script type="module" src="/search/staticsearch-component.js"></script>

<!-- define web component -->
<static-search title="press Ctrl+K to search">
  <p>SEARCH</p>
</static-search>
```

Put the `<script>`{language=html} tag anywhere in your page. It's non-blocking and runs when the DOM is ready -- near the top of the HTML `<head>` is best. It loads 11Kb of JavaScript, 4Kb of CSS, and associated index data when the user starts searching.

Put `<static-search>`{language=html} where you want a search icon or text -- perhaps in the page `<header>`{language=html}. It requires a single inner element the user can clicks to activate search.


## Style the activation element

You can style the activation element using the following CSS selector, e.g.

{{ CSS }}
```css
static-search::part(activate) {
  font-weight: bold;
  color: red;
}
```


## Style the StaticSearch dialog

You can style the StaticSearch pop-up dialog using CSS custom properties, e.g.

{{ CSS excerpt }}
```css
:root {
  /* light/dark theme */
  color-scheme: light dark;

  /* font size */
  --staticsearch-fontsize: 1em;

  /* modal dimensions */
  --staticsearch-maxwidth: 60ch;
  --staticsearch-margin: 3vmin;
  --staticsearch-padding: 2vmin;
  --staticsearch-fieldset-height: calc(3em + (2 * var(--staticsearch-padding)));

  /* colors */
  --staticsearch-color-back: Canvas;
  --staticsearch-color-border: ButtonFace;

  --staticsearch-color-fore0: CanvasText;
  --staticsearch-color-fore1: color-mix(in oklab, CanvasText 80%, Canvas);
  --staticsearch-color-fore2: color-mix(in oklab, CanvasText 60%, Canvas);

  --staticsearch-color-link: color-mix(in oklab, LinkText 70%, CanvasText);
  --staticsearch-color-visited: color-mix(in oklab, VisitedText 70%, CanvasText);

  --staticsearch-color-shadow: #000;
  --staticsearch-color-backdrop: color-mix(in srgb, var(--colshad0), transparent 30%);
  --staticsearch-backdrop-blur: 3px;
}
```


## Change the hover-over instructions

The `title` attribute changes the hover-over activation instructions:

{{ HTML excerpt }}
```html
<!-- hover-over instructions -->
<static-search title="search this site">
  <p>SEARCH</p>
</static-search>
```


## Change the search label

The `label` attribute changes the text above the search input box on the pop-up dialog:

{{ HTML excerpt }}
```html
<!-- input label -->
<static-search label="search for" title="search this site">
  <p>SEARCH</p>
</static-search>
```

## Limit the number of results

The `maxresults` attribute limits the number of results for any search query:

{{ HTML excerpt }}
```html
<!-- limit to a maximum of 10 results -->
<static-search maxresults="10">
  <p>SEARCH</p>
</static-search>
```


## Content Security Policy (CSP)

If you're using CSP to minimize security threats, ensure you set the following directives to permit same-domain **CSS**, **JavaScript**, and **data** requests for StaticSearch:

```txt
style-src 'self';
script-src 'self';
connect-src 'self';
```

StaticSearch does not send user or usage data to first or third-party servers; you do not require GDPR or cookie consent notices.
