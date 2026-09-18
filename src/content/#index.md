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

* **zero backend and serverless:** no database, no maintenance, no security problems, no headaches.

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

**Add search to your site in five minutes.**

Add this tag where you want a search icon to appear (typically, in your HTML `<header>`):

{{ HTML }}
```html
<script type="module" src="/search/staticsearch-here.js"></script>
```

Build your site using your [Static Site Generator](https://publican.dev/). The `<script>` won't do anything until you index your site's content&hellip;

From the command-line, `cd` to your built website's root and run:

{{ terminal }}
```bash
npx staticsearch ./
```

StaticSearch creates a `search` directory with code and word index data. Test or deploy your site to try the search.

Run the indexer again whenever your content changes.

[Refer to the documentation for more information&hellip;](__/docs/)

::: /article

::: article class="questions"

## FAQs

<details>
<summary>Why does StaticSearch exist?</summary>

<p>The <a href="https://publican.dev/">Publican Static Site Generator documentation</a> had many pages and required a search facility. There are several client-side search engines, but:</p>

<ul>
<li>most require you to manually add content to an index. StaticSearch automatically creates word indexes from your built site.</li>

<li>some require markers to identify searchable content. StaticSearch locates content without you having to change the HTML.</li>

<li>most have large payloads with multi-megabyte indexes loaded even when you don't use search. StaticSearch uses minimal JavaScript and incrementally downloads word index data on demand.</li>

<li>some have an ongoing cost. StaticSearch does not incur charges for indexing or queries.</li>
</ul>

</details>

<details>
<summary>Will StaticSearch work on my site?</summary>

<p>It works on any site that consists of HTML pages, typically built by a <a href="https://publican.dev/">Static Site Generator such as Publican</a>. It may work on sites with small amounts of server-side functionality. <a href="#quick-start">Setting up StaticSearch takes five minutes</a> so give it a try!</p>
</details>

<details>
<summary>Do I require server or database technologies?</summary>

<p>No. The StaticSearch indexer runs before your site's deployed and creates client-side JavaScript, CSS, and JSON data files. The indexer requires <a href="https://nodejs.org/">Node.js</a> 22+, but you can run it on your local machine or during your build and deployment process.</p>
</details>

<details>
<summary>Do I need to manually add content to a search index?</summary>

<p>No. StaticSearch parses your site's HTML pages to automatically create word indexes.</p>
</details>

<details>
<summary>Do I need to change my HTML or mark content?</summary>

<p>No. StaticSearch understands HTML. It locates your primary content but omits words in menus, headers, and footers. You can configure indexing options if necessary.</p>
</details>

<details>
<summary>Does it matter if my site has minified HTML?</summary>

<p>No. StaticSearch works if it can identify words in your HTML content.</p>
</details>

<details>
<summary>Can I configure the indexing?</summary>

<p>Yes. You can override the indexing defaults for files, HTML parsing, the language, stop words, word lengths, word weights, and more. You can configure it using command-line switches, environment variables, or a Node.js API.</p>
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

```html
<!-- omit page from StaticSearch index -->
<meta name="staticsearch" content="noindex">
```

</details>

<details>
<summary>Does StaticSearch support other languages?</summary>

<p>Yes. StaticSearch defaults to English, but it supports any language and has extra features for Afrikaans, Croatian, Czech, Danish, Dutch, Estonian, Finnish, French, German, Hungarian, Irish, Italian, Latvian, Lithuanian, Malay, Norwegian, Polish, Portuguese, Romanian, Slovak, Somali, Spanish, Swahili, Swedish, Turkish, and Zulu.</p>
</details>

<details>
<summary>Does client-side search affect page performance?</summary>

<p>No. Unlike other search tools, StaticSearch does not download the site's full index on a user's first visit to your site. Someone who never searches downloads no more than 12Kb of JavaScript and CSS code. Index data is incrementally downloaded as they search for different words, but it's cached so this becomes faster over time.</p>
</details>

<details>
<summary>Can I change the search design?</summary>

<p>Yes. You can use your own search icons, HTML templates, and CSS styling.</p>
</details>

<details>
<summary>Can I change the search functionality?</summary>

<p>Yes. It's easy to tweak search criteria such as fuzziness and the number of results shown. The StaticSearch JavaScript API allows you to create custom search functionality.</p>
</details>

<details>
<summary>Are there any Content Security Policy implications?</summary>

<p>No. Your CSP settings need only permit <code>'self'</code> (same domain) for <code>style-src</code> (CSS), <code>script-src</code> (JavaScript), and <code>connect-src</code> (data fetch). StaticSearch does not make third-party server requests.</p>
</details>

<details>
<summary>Are there any security or privacy implications?</summary>

<p>No. You're hosting client-side search data on your own server and directing users to pages within your site. There's nothing to hack, users are not tracked, and data is not transmitted elsewhere. You don't require GDPR or cookie notices!</p>
</details>

<details>
<summary>How much does StaticSearch cost?</summary>

<p>There is no charge for using the open-source release of StaticSearch. <a href="__/donations/">Project sponsorship donations</a> are welcome, thank you.</p>
</details>

::: /article
