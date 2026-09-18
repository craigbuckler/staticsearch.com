### Omit with `robots.txt`

StaticSearch removes pages from the search index when they're disallowed by the `robots.txt` file in your site's root directory. [`robots.txt` is a standard file](https://developer.mozilla.org/docs/Glossary/Robots.txt) containing `Allow` and `Disallow` directives for specific `User-agent` types (typically Google, Bing, Yahoo, etc). StaticSearch looks for `User-agent: staticsearch`, but falls back to `User-agent: *` when that does not exist.

{{ `robots.txt` example 1 }}
```ini
# StaticSearch can not index any page
# neither can other search engines
User-agent: *
Disallow: /
```

{{ `robots.txt` example 2 }}
```ini
# StaticSearch can index all pages
# other search engines cannot index any page
User-agent: *
Disallow: /

User-agent: staticsearch
```

{{ `robots.txt` example 3 }}
```ini
# StaticSearch can NOT index pages with a path starting /secret/
# other search engines can NOT index pages with a path starting
#   /private/ or /secret/
User-agent: *
Disallow: /private/
Disallow: /secret/

User-agent: staticsearch
Disallow: /secret/
```

TODO: link to more


### Omit with `<meta>` tags

StaticSearch removes a page from the index when it contains a `noindex` value in the `staticsearch` meta tag:

{{ HTML `<head>` }}
```html
<!-- do not index page -->
<meta name="staticsearch" content="noindex">
```

A `noindex` value in the `robots` meta tag also omits a page:

{{ HTML `<head>` }}
```html
<!-- do not index page -->
<meta name="robots" content="noindex">
```

unless it's overridden by an `index` value in the `staticsearch` meta tag:

{{ HTML `<head>` }}
```html
<!-- index page -->
<meta name="robots" content="noindex">
<meta name="staticsearch" content="index">
```

TODO: link to more
