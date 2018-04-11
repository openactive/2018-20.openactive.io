---
title: Style
date: 2017-12-14 13:54:00 Z
position: 35
thumbnail_image: "/uploads/dancin.png"
strapline: 'Adipisci incidunt qui voluptas sint expedita distinctio laudantium. Aut
  et sed voluptatum ullam autem quo laboriosam repellendus. Quis voluptas et eos possimus. '
layout: colours
---

{::options parse_block_html="true" /}



<article>
<div class="two tworight"></div>
<div class="two tworight">

# This is the highest heading
New section intro text. Is ma ped qui ut occa erofficid quiatquis qui icia sumquam il issedi re odisnt faccaborum quat incturi reri

Body copy. Is ma ped qui ut occaeruptat alit andipsa ndella sed que volor aut officid quiatquis qui a parum aut late exces et moluptatent quos dolecea quodit, qas dolecea quodit, quasimi nciendi nemporem reicia sumquam il issedi re odissunt faccaborum quat incturi reri

## Subsection
Sub intro text. Is ma ped qui ut occaeruptat alit andipsa ndella sed que volor aut officid quiatquis qui a parum aate exces et mporem

### Subsection
Sub intro text. Is ma ped qui ut occaeruptat alit andipsa ndella sed que volor aut officid quiatquis qui a parum aate exces et mporem

##### Subheader
Body copy. Is ma ped qui ut occaeruptat alit andipsa ndella sed que volor aut officid quiatquis qui a parum aut late exces et moluptatent quos dolecea quodit, quasised que volor aut officid quiatquis qui a parum aut late eoluptuos dolecea quodit, quasimi nciendi nemporem reicia sumquam il issedi re odissunt faccaborum quat incturi reri

> Quote copy quodit, quasised que volor aut officid quiatquis qui a parum aut late eoluptuos dolecea quodit, quasimi nciendi nemporem reicia sumquam il issedi re odissunt faccaborum quat incturi reri
###### Caption text

</div>
</article>


<!--  ---------------->
<!-- CALL TO ACTION FULL WIDTH BLOCK -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Full Width Call to Action</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'Accelerator' %}
{% for item in subpage %}
### {{ item.title}}
{{ item.strapline | markdownify }}

[Find out more]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask"></div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}
</article>



<!--  ---------------->
<!-- CALL TO ACTION WIDE BLOCK -->
<!--  ---------------->
<article class="call_to_action--wide title-row">
<h2 class="sub-heading-two">Wide Call to Action</h2>
<div class="one">

### Open data essentials
The Open Data Institute's e-Learning programme developed for the European Commission. This programme has been designed to enable you to discover what open data is and how it is changing the lives of everyone on our planet.
There are 13 lessons for you to explore covering the essentials of open data, how to plan and measure success, and how to implement an open data programme technically. This programme is free and should take a maximum of 2-3 hours to complete.

[Learn About Open Data](http://accelerate.theodi.org/#/){:.button-primary target="_blank" rel="noopener"}


<div class="line-graphic"></div>
</div>
</article>

<!--  ---------------->
<!-- CALL TO ACTION WIDE GRAPHIC BLOCK -->
<!--  ---------------->
<article class="call_to_action">
<div class="one stripe">

{% assign subpage = site.pages | where: 'title', 'Accelerator' %}
{% for item in subpage %}
### {{ item.title}}
{{ item.strapline | markdownify }}

[Find out more]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask"></div>
<div style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}
<div class="line-graphic"></div>
</article>




<!--  ---------------->
<!-- CALL TO ACTION TWO BLOCK -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Two Column Call to Action</h2>
<div class="subgrid">
<div class="two">
<div class="line-graphic"></div>
### Publish data
Take the first step towards enabling open data publishing in your system

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
<div class="two">
<div class="line-graphic"></div>

### Use data
Take the first step towards enabling open data publishing in your system.

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
</div>
</article>


<!--  ---------------->
<!-- CALL TO ACTION THREE BLOCK -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Three Column Call to Action</h2>
<div class="subgrid">
<div class="three">

#### Getting started
Take the first step towards enabling open data in your system.

[Getting Started]({{ site.baseurl }}{% link getting-started.md %}){:.button-primary}

</div>
<div class="three">

#### Developer
Get stuck into the docs and start using or publishing data today!

[Developer]({{ site.baseurl }}{% link developer.md %}){:.button-primary}

</div>
<div class="three">

#### Community
What's happening in the community, and how you can get involved!

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
</div>
</article>


<!--  ---------------->
<!-- CALL TO ACTION FOUR BLOCK -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Four Column Call to Action</h2>

<div class="subgrid">
<div class="four">

### How to
Aspernatur exercitationem commodi nobis laborum incidunt sunt qui delectus.

[How to's]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### Discussions
Sapiente voluptatem quia fuga optio. Dignissimos et occaecati consequatur accusamus in.

[Discussions]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### References
Facilis assumenda officiis dicta. Rerum dolor ullam reprehenderit molestiae.

[References]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### Tutorials
Natus sit architecto rerum fugit alias aut magnam. Impedit est ea eaque voluptas aliquid magnam alias.

[Tutorials]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
</div>
</article>

<!--  ---------------->
<!-- FEATURED QUOTE BLOCK -->
<!--  ---------------->
<article class="title-row featured">
<div class="quote"></div>
<blockquote>

Dolore nulla voluptas natus et sapiente. Deserunt sequi eius culpa labore. Totam quam nihil alias delectus natus voluptas. Qui omnis vitae atque sequi.
###### Bob Smith
Health Center


</blockquote>
<div class="border"></div>
</article>
