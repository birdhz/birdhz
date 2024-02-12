---
layout: page
tags: nav
title: todo
---

## structure

- is having the `title` (which `nav` uses) redudant as a page heading?

## navigation

- ~~why does omitting the `title` key in a nav page (i.e. a template that uses the `nav` tag) frontmatter mean it won't be part of the nav anymore?~~

  - **done**: `nav.njk` layout was using `<collectionItem>.data.title` when creating the (non-home) nav links

    - front matter is attached to a collection item via its `data` property; if we don't define a `title` in the frontmatter, `<collectionItem>.data` won't have a `title`

  - ~~i.e. should we be using `page.data.title` instead or as a fallback `title` in case it's undefined~~

    - **done**: see above for solution for `nav.njk`; for rendering the `page.njk` layout, we can use `{{ '{{ title or page.fileSlug }}' }}`; `page.data.title` only makes sense within a collection via its `<collectionItem>.data` api;

  - ~~e.g. remove `title: todo` from `todo.md` -> it won't be a part of the nav anymore~~

- ~~rename `page` tag to `nav` or `navItem`~~

  - **done**: renamed to `nav`

- how do we handle navigation for the blog and posts?

### plugins

- (eleventy-navigation)[https://www.11ty.dev/docs/plugins/navigation/#adding-templates-to-the-navigation]
