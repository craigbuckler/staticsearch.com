---
title: Add search to your website
menu: Add site search
description: Further ways to use and configure StaticSearch when adding search functionality to your website
date: 2026-09-14
priority: 0.8
tags: quick start, script tag, web component, CSP
---

You can add a search widget to your site using a single `<script>` tag where you want the icon to appear:

{{ template excerpt }}
```html
<script type="module" src="/search/staticsearch-here.js"></script>
```

:::aside

All code on this page presumes the indexer created a directory named `/search/`. Change the path if you [generated it elsewhere](__/docs/quick-start/index-site/#set-the-staticsearch-directory).

:::/aside


## StaticSearch web component

The code above places a `<static-search>` web component in the `<script>` location. Adding this web component yourself provides further search functionality. The following code adds a clickable **SEARCH** link:

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

Put the `<static-search>`{language=html} tag where you want a **SEARCH** link to appear -- perhaps in the page `<header>`{language=html}. It requires a single inner element the user can click to activate search.


## Style the activation element

You can style the activation element using the following CSS selector, e.g.

{{ CSS }}
```css
static-search::part(activate) {
  display: inline-block;
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


## Change the proportion of words to find

The `minfound` attribute is a value between `0` and `1` indicating the proportion of search words that must be on a page before it appears in results.

* `minfound="0"` (the default) is a **logical OR**: a page appears in results when it contains ANY of the search words. A search for "Star Wars movie" returns pages with one or more of those words.

* `minfound="1"` is a **logical AND**: a page appears in results when it contains ALL the search words. A search for "Star Wars movie" returns pages with all three words.

* `minfound="0.5"` means a page appears in results when it contains at least half the search words. A search for "Star Wars movie" returns pages with at least two of those words.

{{ HTML excerpt }}
```html
<!-- page must have at least half the search terms -->
<static-search minfound="0.5">
  <p>SEARCH</p>
</static-search>
```

Pages featuring more search words have a higher relevancy and appear higher in the results.


## Change search fuzziness

The `fuzzy` attribute sets the number of words used for partial string matches.

* The default value is `6`: searching for a string such as "exp" finds the first six words in the index that start with those characters.

* Setting `fuzzy="1"` or lower means the user must type most of a word before results appear.

{{ HTML excerpt }}
```html
<!-- search for the first three matching words -->
<static-search fuzzy="3">
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
