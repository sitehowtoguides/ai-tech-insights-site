# aimasterguides.com

An eleveny site

## Install

In order to run this locally, you will need node.js installed on your system. Its version must be 20 or higher. The site has been tested with no problems on Node 22.

Once you ensure that you have the proper node version, just CD into the site's folder and run:

`npm install`

## Serve and build

In order to serve the site locally, just run:

`npm run serve`

And then you can visit it on `http://localhost:8080/`

## Front-matter

Part of the pages' content can be found in the Front-matter area.

This is easily distinguished, as in it is between three dashes (`---`).

The fron-matter area resides in files for pages and it includes fields and their corresponding values. You can have plain fields, arrays, objects (or group fields), even arrays of objects. It uses the yaml syntax.

A plain field looks like this:

```yaml
title: 'Master AI Technology with Beginner-Friendly Guides'
```

A group field looks like this:

```yaml
meta:
  title: I am the meta tittle
  description: And I am the description
  image: /images/image.png
```

An array looks like this:

```yaml
authors:
  - john-doe
  - jane-doe
  - alex-thompson
```

An array of objects looks like this:

```yaml
social:
  - icon: linkedin-in
    url: 'linkedin.com'
  - icon: twitter
    url: 'x.com'
  - icon: globe
    url: 'https://aimasterguides.com/'
```

Please keep in mind that identation is very important, so please be careful not to break it!

Normally, you should not have to add new front-matter fields; just edit the existing ones or add values to existing arrays.

## Global data

Aside from the Front-matter areas which hold content for their pages, we have data files which hold site-wide content.

These files are found in the `_data` folder and have the `.yaml` extension. They have the yaml syntax as well.

The `_data/global.yaml` file holds, well, global info. The `title` holds the site's name and the `meta` field holds content for the title and description tags. If a page has no `meta` field, these global values will be used.

If an article has no content, then the text from `no_content_text` will be used as a placeholder.

The use for the other data files is described further below.

## Markdown

The content for the articles (automations, guides, tutorials, trends) in [markdown](https://www.markdownguide.org/cheat-sheet/). HTML code can be used also, but with Markdown you get clean readable content.

The markdown area is below the Front-matter one, after the second `---`.

## Editing pages content

## Writing articles

## Navigation

## Custom CSS

`css/tailwind.css`

## Collections

## Titles, meta-titles, etc..

## Authors

## Reading time

## Big text ( `|-` )

## Quotes (single and double) in FM fields

## Featured articles

## Content coming soon

## Drafts

## ids on headingd from markdown

## Redirects