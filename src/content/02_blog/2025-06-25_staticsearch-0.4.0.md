---
title: StaticSearch v0.4.0 update
menu: false
description: StaticSearch v0.4.0 improves content indexing.
author: Craig Buckler
tags: update
priority: 1.0
hero: images/binoculars.avif
heroWidth: 1200
heroHeight: 600
heroAlt: search
heroCaption: Image courtesy of <a href="https://unsplash.com/@elijahjmears">Elijah Mears</a>
---

The following features have been added or improved:

1. [Document indexing](__/tools/staticsearch/search-indexer/#document-indexing-options) has been improved so content can be identified even when a page does not have a `<main>` element.

1. You can set a [log verbosity level](--ROOT--tools/staticsearch/search-indexer/#logging-options).

1. When no search directory is set (`--searchdir`), it defaults to a `search` sub-directory in the build directory (`--builddir`).

1. An issue was fixed where pages were not indexed because a `noindex` reference was found inside minified HTML even though it was outside a `<meta name="robots">` tag.

1. The README now points to the comprehensive [Publican.dev StaticSearch documentation](__/tools/staticsearch/).
