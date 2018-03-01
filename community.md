---
title: Community
permalink: "/community/"
position: 5
is_main_navigation: true
layout: page-hero
thumbnail_image: "/uploads/iStock-501777666_optimised.png"
strapline: Innovation through Collaboration
---

{::options parse_block_html="true" /}

<!--  ---------------->
<!-- HERO -->
<!--  ---------------->
<article>
<div class="one">

### Who’s involved?

OpenActive’s collaborative community includes ambitious start-ups supported through our Accelerator programme, members of the OpenActive Champions programme of masterclasses, who are using peer-to-peer networking to transform the sector using open data, and the skilled technical community of developers working to improve data knowledge and engagement.

Explore the dashboard to learn more about our community and the datasets already published.

[Status Dashboard](http://status.openactive.io/){:target="_blank"}{: .primary_cta}

</div>
</article>


<!--  ---------------->
<!-- STATS ROW -->
<!--  ---------------->
<article class="invert stats-row title-row" markdown="0">
<h2 class="sub-heading-two">The numbers</h2>

<div class="four">
<figure>
<div class="wrap">
<div class="odometer com-members">0</div>
</div>
<figcaption>Community Members </figcaption>
</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-startups">0</div>
</div>
<figcaption>Accelerator Start ups </figcaption>

</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-published">0</div>
</div>
<figcaption>Data-sets Published </figcaption>

</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-champions">0</div>
</div>
<figcaption>OpenActive Champions </figcaption>

</figure>
</div>

</article>




<!--  ---------------->
<!-- TEXT BLOCK -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Members</h2>
<div class="one">

### The Community
Our community is dynamic and self-supporting, allowing us to tap into an ever growing base of engaged individuals and organisations across the sector to support activities nationwide. Building the data revolution in the sport and physical sector is a collaborative effort between consumers, organisations, and innovative start-ups, designed to support and benefit the industry at all levels.

</div>
</article>

<!--  ---------------->
<!-- MEMBERS -->
<!--  ---------------->
<article>
<div class="one">

### Meet the Members

OpenActive’s open-invitation community is continuing to grow. Discover who has joined us so far.

</div>
</article>
<article>
{% assign posts = site.members | sample:18 %}
{% for post in posts %}
{% assign theImage = post.thumbnail_image %}
<div class="six" data-tab="{{ forloop.index }}" markdown="0" >
<a  href="{{ post.url | relative_url }}"><img role="logo" src="{{ theImage  | relative_url}}"/></a>
</div>
{% endfor %}
</article>



<!--  ---------------->
<!-- W3C COMMUNITY CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Standards group</h2>
<div class="one">

### W3C-Community

Our goal is to develop technical specifications and best practices that support the use of open and shared data about sports and physical activities.

While our work is technical, you don’t have to be a developer to contribute. Our primary focus is standardising how to publish data about physical activity opportunities, defining best practices and APIs to enable booking events and facilities, and improving interoperability of data across the sector.


[W3C Community]( {{ site.baseurl }}{% link w3c-community.md %}){:.button-primary}

</div>
<figure>
<div class="mask">{% include overlay.svg %}</div>
<div class="image" style="background: url({{ site.baseurl }}/uploads/dancin.png)center center / cover no-repeat;"></div>
</figure>
</article>


<!--  ---------------->
<!-- CHAMPIONS -->
<!--  ---------------->
<article>
<div class="one">

### OpenActive Champions

The OpenActive Champions are ten advocates embracing and influencing local transformation with open opportunity data. As a peer-network, they’re committed to develop local knowledge, share good practice and drive innovation to get people active.

</div>
</article>

<!--  ---------------->
<!-- CHAMPIONS -->
<!--  ---------------->

{% include champions.html %}



<!--  ---------------->
<!-- NEWS -->
<!--  ---------------->
<article class="post-list title-row">
<h2 class="sub-heading-two"> Community News</h2>



{% assign postList = site.posts | where: "categories", "Community" %}
{% for post in postList limit:1 %}

<div class="two" id="post-{{ forloop.index }}">
<figure role="group">
<img src="{{post.thumbnail_image | relative_url}}" alt="{{ post.title | escape }}-post-thumbnail">
</figure>
<h3>{{ post.title | escape }}</h3>
<div class="subgrid brand-one-b">
<div class="two twoleft">
{{ post.excerpt }}
<a class="button-primary" href="{{ post.url | relative_url }}">Read Post</a>
</div>
<div class="two twoleft">
{% include share-page.html %}
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
{{post.date | date: date_format}}
{{post.author}}
</div>
</div>
</div>
{% endfor %}
<div class="two">
</div>
</article>



<!--  ---------------->
<!-- FAQS -->
<!--  ---------------->
<article class="faq-snippet title-row invert-2">
<h2 class="sub-heading-two">FAQ's</h2>
<div class="one">
{% assign aboutAccelerator = site.faqs | where: "categories", "About OpenActive" %}
{% for post in aboutAccelerator limit:8 %}

<div class=" show_hide">
<h5>Q: {{ post.title | escape}}</h5>
<div class="slidingDiv">
{{post.content}}
</div>
</div>

{% endfor %}
</div>
<div class="one">
<p><a class="button-primary" href="{{ site.baseurl }}{% link faqs.md %}">Visit
our FAQs</a></p>
</div>
</article>