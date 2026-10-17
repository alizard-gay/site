---
title: Making this site in 11ty
description: This site was been built piece by piece in 11ty. The site started as mostly just raw HTML pages with no style in a single folder, but in time expanded to have templates and NJK files and plenty of complexity.
date: 2026-10-17T21:48:43-07:00
tags:
    - meta
    - site
image: assets/images/blog/thumbnails/11ty_from_scratch.webp
imagetype: summary_large_image

---
This site was been built piece by piece in [11ty](https://www.11ty.dev/) (soon to be renamed [Build Awesome](https://build.awesome.me/)).
The site started as mostly just raw HTML pages with no style in a single folder, but in time expanded to have templates and [NJK files](https://mozilla.github.io/nunjucks/templating.html) and plenty of complexity. 11ty is my first time seriously getting into a [SSG](https://developer.mozilla.org/en-US/docs/Glossary/SSG) and it has been an incredibly good experience. 

For those interested my site's [source code](https://github.com/alizard-gay/site) is open to look at. I am using Github as my Git provider with [Cloudflare Pages](https://www.cloudflare.com/products/pages/) as my step that builds the source into static html files your client can load. In the future will likely make a blog post about different ways of hosting static sites.

## Why I use SSGs
While I really like basic HTML, I cannot live without templates and pagination. Everything is fine in basic HTML until you need to update your navbar that is on every single page.
Since I'm already using an SSG, I've heavily taken advantage of the ability to define JSON data that pages are built from. I'm also currently writing this post in Markdown and 11ty will convert it into an html page with all my base templates.

## Thoughts on 11ty
I've used 11ty in the past, but this is my first time making a ground up no templates blog site. While I can't reference from other SSGs as my only other experience is [Jekyll](https://jekyllrb.com/) templates, I can say it has been incredibly lightweight and easy to use allowing me to add complexity only as needed.

## Conclusion
I can't properly conclude this post as the site is still WIP, but sub to my RSS feed to keep up with my progress.