---
title: StaticSearch
menu: false
description: StaticSearch is a fast, modern, zero-infrastructure, client-side search engine you can add to any static site in minutes.
template: home.html
bodyClass: animback
priority: 1.0
index: weekly
---

::: article

<h1 class="logo"><svg><use xlink:href="#svg-logo"></use></svg><span>Static<strong>Search</strong></span></h1>

<p>superior search for static sites &ndash; <a href="#" data-static-search="search" class="button">try it here</a></p>

<p>DEMO HERE</p>

::: /article

::: article

## Benefits

* **zero backend and serverless:** no database, no maintenance, no security problems, no headaches

* **fast zero-configuration indexing:** StaticSearch understands your pages. It indexes sites in seconds without you having to mark or programmatically add content.

* **fast fuzzy search:** users get instant results even on sites with thousands of pages.

* **minimal payload:** requires no more than 12Kb of CSS/JavaScript, incrementally loads and caches index data on demand, and offers fast performance even on phones and slower devices.

* **multi-lingual:** handles stemming, stop-word filtering, and character normalization in 27 languages -- *or you can add your own*.

* **framework agnostic:** StaticSearch works with all HTML Static Site Generators and client-side JavaScript libraries.

* **minimal developer overhead:** StaticSearch indexing integrates into any build process with a single command.

* **custom search configuration:** optionally change search criteria, HTML templates, CSS styles, and JavaScript functionality.

* **standards compliant:** adheres with strict Content Security Policies, robots.txt, robots meta tags, JSON data, JavaScript modules, and Web Components. Progressive enhancement permits search functionality even when JavaScript fails.

* **open source** use, inspect, extend, alter, and [sponsor the project](__/donate/).

::: /article

::: article

## Quick start

You can add search to your site in five minutes. StaticSearch indexes your site **after** it's built. It's quickest to add the search widget first so there's no need to re-generate the site again. Add the following tag to your pages or templates where you want a search icon to appear (typically, in your page `<header>`):

{{ HTML }}
```html
<script type="module" src="/search/staticsearch-here.js"></script>
```

You can style the SVG icon with CSS, e.g.

{{ CSS }}
```css
static-search::part(activate) {
  inline-size: 2em;
  block-size: auto;
}
```

Build your site using whatever process or [Static Site Generator](https://publican.dev/) you're using.

The StaticSearch indexer requires [Node.js 22](https://nodejs.org/) or above. From the command-line, `cd` to the root folder of your built website and run:

{{ terminal }}
```bash
npx staticsearch ./
```

This creates a new folder named `search` that contains the index data and StaticSearch code you included above.

Test your site's search functionality by deploying the site. You can also test locally by running a development web server:

{{ terminal }}
```bash
npx livelocalhost
```

Navigate to the `localhost` address, clicking the search icon, and enter some queries.

Run the indexer again whenever your content changes.

::: /article

::: article

## FAQs

<details>
<summary>Why does StaticSearch exist?</summary>

<p>I required a search facility for my static <a href="https://publican.dev/">Publican documentation</a>. There are several client-side only search engines, but:</p>

<ul>
<li>most require you to manually add content to an index. I wanted an easier option that automatically created an index from a built site.</li>

<li>some require markers to identify searchable content. I wanted an indexer to locate content without having to change the HTML.</li>

<li>most have large payloads with multi-megabyte indexes loaded whether you use search or not. I wanted an option with minimal JavaScript that incrementally downloaded word index data on demand.</li>

<li>some have an ongoing cost. I wanted an option that didn't charge for indexing or per user query.</li>
</ul>

</details>

<details>
<summary>Does StaticSearch work on any site?</summary>

<p>It works on any site that primarily consists of HTML pages, typically built by a <a href="https://publican.dev/">Static Site Generator such as Publican</a>. It may work on sites that have a small amount of server-side functionality, but extra configuration may be necessary.</p>
</details>

<details>
<summary>Do I require server or database technologies?</summary>

<p>No. The StaticSearch indexer runs before your site's deployed and creates client-side JavaScript, CSS, and JSON data files. The indexer requires Node.js, but it can run on your local machine or as part of any build and deployment process.</p>
</details>

<details>
<summary>Do I need to hand-build my site's search index?</summary>

<p>No. StaticSearch is simpler to use than other options because it parses the HTML of every page on your site to create a word index.</p>
</details>

<details>
<summary>Do I need to change my HTML or mark content?</summary>

<p>No. StaticSearch understands HTML so it'll locate your primary content but omit words in menus, headers, footers, etc. You can configure the indexing options if necessary.</p>
</details>

<details>
<summary>Does it matter if my site has minified HTML?</summary>

<p>No. StaticSearch doesn't care as long as it remains possible to identify words in your content.</p>
</details>

<details>
<summary>Can I configure the indexing?</summary>

<p>Yes. You can override the indexing defaults for pages, parsing criteria, HTML content, the language, stop words, maximum word lengths, and word weights. You can set options using command-line switches, environment variables, or the Node.js API.</p>
</details>

<details>
<summary>Is there a limit to the number of pages my site can have?</summary>

<p>No. StaticSearch has been used on sites with thousands of pages but you can evaluate it without commitment.</p>
</details>

<details>
<summary>How long does indexing take?</summary>

<p>It depends on your device, the size of your site, and the quantity of content, but the indexer typically takes less than a second for every 200 pages.</p>
</details>

<details>
<summary>Can I omit pages from indexing?</summary>

<p>Yes. Either <code>Disallow:</code> the URL in <code>robots.txt</code> or add a meta tag in the page's HTML <code>&lt;head&gt;</code>:</p>

{{ HTML `<head>` }}
```html
<!-- omit page from all search engines including StaticSearch -->
<meta name="robots" content="noindex">
<!-- OR omit page from StaticSearch only -->
<meta name="staticsearch" content="noindex">
```

</details>

<details>
<summary>Does StaticSearch support other languages?</summary>

<p>Yes. StaticSearch defaults to English, but it supports any language and has extra features for Afrikaans, Croatian, Czech, Danish, Dutch, Estonian, Finnish, French, German, Hungarian, Irish, Italian, Latvian, Lithuanian, Malay, Norwegian, Polish, Portuguese, Romanian, Slovak, Somali, Spanish, Swahili, Swedish, Turkish, and Zulu.</p>
</details>

<details>
<summary>Does client-side search affect page performance?</summary>

<p>It shouldn't be noticeable. Unlike other options, StaticSearch does not download the site's full index on the user's first visit to your site. Someone who never searches downloads no more than 12Kb of JavaScript and CSS code. Index data is incrementally downloaded as they search for different words, but it's cached so this becomes faster over time.</p>
</details>

<details>
<summary>Can I change the search design?</summary>

<p>Yes. You can define any search activation elements, and use custom HTML templates and CSS styling.</p>
</details>

<details>
<summary>Can I change the search functionality?</summary>

<p>Yes. It's easy to tweak search criteria such as fuzziness, the proportion of words to find, result score factors, and the number of results shown. For more advanced options, you can use the client-side JavaScript API to create custom search functionality.</p>
</details>

<details>
<summary>Are there any Content Security Policy implications?</summary>

<p>No. Your CSP settings need only permit <code>'self'</code> (same domain) for <code>style-src</code> (CSS), <code>script-src</code> (JavaScript), and <code>connect-src</code> (data fetch). StaticSearch does not make third-party server requests.</p>
</details>

<details>
<summary>Are there any security or privacy implications?</summary>

<p>No. You're hosting client-side search data on your server which directs users to pages within your site. There's nothing to hack and the user's search queries are not tracked. No cookie notices are necessary!</p>
</details>

<details>
<summary>How much does StaticSearch cost?</summary>

<p>There is no charge for using the open-source release of StaticSearch. <a href="__/donations/">Project sponsorship donations</a> are welcome, thank you.</p>
</details>

::: /article
