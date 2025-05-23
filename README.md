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

Part of the pages' and the site's content can be found in the Front-matter area. This is easily distinguished, as it is between three dashes (`---`). The fron-matter area includes fields and their corresponding values. You can even have arrays, objects (or group fields), or arrays of objects. It uses the yaml syntax.

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

## Markdown

## Meta data (global and per page)

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