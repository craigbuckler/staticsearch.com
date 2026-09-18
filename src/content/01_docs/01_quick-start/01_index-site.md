---
title: Index your website
menu: Site indexing
description: Basic StaticSearch indexer command-line options to help improve search indexes.
date: 2026-09-11
priority: 0.8
tags: quick start, indexer
---

The StaticSearch indexer analyses your built web pages to create word indexes. You can use command-line switches to configure indexing -- the sections below describe the most useful options.


## Indexer help

Enter the following command to view StaticSearch CLI options:

{{ terminal }}
```bash
npx staticsearch --help
```


## Set your site's build directory

The StaticSearch indexer looks for static sites built in the sub-directories `./build/`, `./dist/`, `./dest/`, `./out/`, `./target/`, or the current working directory. If your site's in a different directory, such as `./mysite/`, use:

{{ terminal }}
```bash
npx staticsearch --builddir ./mysite/
```


## Set the StaticSearch directory

The StaticSearch indexer creates a `search` sub-directory for code and indexes. If this is not suitable (perhaps you have a directory with that name), you can set another name:

{{ terminal }}
```bash
npx staticsearch --searchdir wordindex
```

Remember to update the search widget path accordingly, e.g.

{{ HTML }}
```html
<script type="module" src="/wordindex/staticsearch-here.js"></script>
```


## Set your site's domain

If your pages use links with fully qualified URLs such as `https://mysite.com/path/`, pass the domain to StaticSearch so it can identify internal links:

{{ terminal }}
```bash
npx staticsearch --domain https://mysite.com
```


## Set your site's root path

StaticSearch presumes the `index.html` file in the root of your build directory is your domain's home page accessed at the path `/`.

You can set a different path such as `/blog/`. This presumes `index.html` resolves to the path `/blog/index.html` and ensures links work as expected.

{{ terminal }}
```bash
npx staticsearch --root /blog/
```


## Omit HTML pages

You may want to omit pages from the StaticSearch index when they:

* contain classified content, or
* are an index page listing other pages and have little content.


### `robots.txt`

StaticSearch parses your `robots.txt` file and looks for `User-agent: staticsearch` or `User-agent: *` when that does not exist.

{{ `robots.txt` example 1 }}
```ini
# StaticSearch does not index any page
User-agent: *
Disallow: /
```

{{ `robots.txt` example 2 }}
```ini
# StaticSearch indexes all pages
User-agent: *
Disallow: /

User-agent: staticsearch
```

{{ `robots.txt` example 3 }}
```ini
# StaticSearch indexes all pages unless the path starts /secret/
User-agent: *
Disallow: /private/

User-agent: staticsearch
Disallow: /secret/
```


### `<meta>` tags

StaticSearch removes a page from the index when the `staticsearch` meta tag contains `noindex`:

{{ HTML `<head>` }}
```html
<!-- do not index page -->
<meta name="staticsearch" content="noindex">
```

Setting `noindex` in the `robots` meta tag also omits a page:

{{ HTML `<head>` }}
```html
<!-- do not index page -->
<meta name="robots" content="noindex">
```

&hellip;unless it's overridden by an `index` value in the `staticsearch` meta tag:

{{ HTML `<head>` }}
```html
<!-- index page -->
<meta name="robots" content="noindex">
<meta name="staticsearch" content="index">
```


## Identify page content

StaticSearch attempts to locate your page's primary content in an HTML `<main>` element but reverts to the `<body>` when necessary. It skips content inside blocks such as `<header>`, `<footer>`, and `<nav>`.

If this is not suitable, you can set alternative elements using CSS selectors. For example, index content in `#content`{language=css} but exclude any `<nav>` and `<div class="related">` elements inside it:

{{ terminal }}
```bash
npx staticsearch --dom '#content' --domx 'nav,div.related'
```


## Remove stop words

"Stop words" are insignificant to the meaning of text -- such as "and", "the", and "but" in English. You can set another language such as French to remove appropriate stop words:

{{ terminal }}
```bash
npx staticsearch --language fr
```

You can omit further words in a comma-delimited list:

{{ terminal }}
```bash
npx staticsearch --language en --stopwords 'omit,static,search'
```
