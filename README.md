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

The pages can be found in the `pages` folder, as markdown (`.md`) files. You can edit their data from there.

There some special fields:

`layout`: This calls the layout of the page. It should not be edited.

`permalink`: This defines the page's URL.

`redirect_from`: This creates a redirect from an another URL. In our case, it used for redirections from the previous URLs which ended in .html

## Writing articles

The articles (automations, guides, tutorials, trends) can be found in the folders with the collection's name. The folder name, along with the file's name, defines the article's URL. For instance, the `automations/ai-sales-automation.md` file will have `/automations/ai-sales-automation/` as its page's URL.

The `.yaml` files inside these folders are used to set default values for the respective collection. Generally, it should not be edited.

The front-matter area contains structured content, as well as the content for the FAQ section. There is also the author, which will explained further below.

The `summary` field contains the text for articles teasers.

The teasers list sorts the articles accordng to their `date` field. Newer first.

The articles' main content is in makrdown.

## Navigation

The navigation is controlled with data files.

### Main navigation

The main nav controlled with `_data/nav.yaml`

### Footer navigation

The footer content controlled with `_data/footer.yaml`

## Custom CSS

Custom CSS that cannot be generated with Tailwind, is in `css/tailwind.css`.

## Authors

The data for authors is in `_data/authors.yaml`. Each author has an `id` field which is used in the articles' `author` field.

Just by using in the articles, say:

```yaml
author: alex-thompson
```

The author info will be auto-generated, provided there is an entry in `_data/authors.yaml` with:

```yaml
id: alex-thompson
```

## Reading time

Reading time for the articles is auto-generated.

## Big text ( `|-` )

If you want to use big texts in fields, you can use the `|-` and have the text better placed.

Please check the content for the answer fields in the FAQ sections.

## Quotes (single and double) in Front-matter fields

If you have a front-matter field which contains quotes, this may result in a build error.

If the content contains single quotes, wrap it in double quotes. For example:

```yaml
text: "Let's meet"
```

If the content contains double quotes, wrap it in single quotes. For example:

```yaml
text: 'Please hit the "Submit" button'
```

If the content contains both single and double quotes, wrap it in single quotes ans escape the single quotes with `\` (or the other way around). For example:

```yaml
text: 'Let\'s hit the "Submit" button'
```

OR

```yaml
text: "Let's hit the \"Submit\" button"
```

## Featured articles

The featured articles have `featured: true` in their Front-matter area

## Popular articles

The popular articles have `popular: true` in their Front-matter area

### Types of popular articles

## Content coming soon

## Drafts

## ids on headings from markdown

## Redirects