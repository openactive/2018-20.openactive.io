---
title: Read Me
permalink: "/readme/"
position: 15
is_main_navigation: false
layout: page-headless
---

### Note on CNAME and _config.yml - we have set these as " git update-index --assume-unchanged " so that the beta and staging sites will keep their configurations whilst both using the staging master branch. To edit these you will need to change this to git update-index --no-assume-unchanged <file>

### The OpenActive staging website

This website is a Jekyll powered site running on Github pages. It also has a Siteleaf integration to allow edits to the codebase without a text editor or knowledge of git itself (however these just results in changes to the underlying files as it would if they were edited directly).

The staging website, which runs off the staging repo, lets the core OpenActive team run QA before anything goes live.

### Editing the site

The site has been designed to be edited two ways - through editing files directly and using the Github workflow, or there is a friendly user interface in the form of a Siteleaf admin panel which allows people to make changes without needing to understand Github or code.

For any community members who'd like to make changes directly, please create pull requests against the **staging** [repository](https://github.com/openactive/openactive-staging) (as opposed to the live one). Once approved, these will get pulled into the live site as part of the publish process after QA.

#### Collections

The site is divided up into a number of collections. These collections allow for an almost dynamic site experience despite it being a static site. The collections can easily be edited in Siteleaf, please contact OpenActive directly if you believe you need access to make changes to the site through this interface. 

### Altering the layout/design

As the site is compiled on Github Pages, there is no need to compile the Sass styles, you can just edit them directly. 

You can see an overview of the colour themes on the site at http://staging.openactive.io/colours There are tabs at the bottom of the page to switch between different pathways.

A list of the site call to actions is currently available http://staging.openactive.io/call-to-action/ Again, you can switch between the various site routes to see how the colourways are affected.

Typography and the cascade of styles can be seen in this markdown example http://staging.openactive.io/markdown

A full pattern library detailing the code required and suggested layout of modules on the site is to be implemented soon. 

### Publishing to live

The current workflow for publishing to the live version of the site is controlled through the publish button in Siteleaf, which pushes changes from the staging repo to the live one. At present this is managed by the core ODI OpenActive team.

