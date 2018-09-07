---
title: Community
permalink: "/community/"
position: 5
is_main_navigation: true
thumbnail_image: "/uploads/iStock-501777666_optimised.png"
strapline: Innovation through Collaboration
layout: page-hero
---

{::options parse_block_html="true" /}

<!--  ---------------->
<!-- HERO -->
<!--  ---------------->
<article>
<div class="one">

## Who’s involved?

OpenActive’s collaborative community includes ambitious start-ups supported through our Accelerator programme, members of the OpenActive Champions programme of masterclasses, who are using peer-to-peer networking to transform the sector using open data, and the skilled technical community of developers working to improve data knowledge and engagement.

Explore the dashboard to learn more about our community and the datasets already published.

[Status Dashboard](http://status.openactive.io/){:target="_blank"}{: .primary_cta} 
&nbsp;
[Community toolkit](http://openactive.io/community/toolkit){: .primary_cta}

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
<figcaption>Community members </figcaption>
</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-startups">0</div>
</div>
<figcaption>Accelerator start ups </figcaption>

</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-published">0</div>
</div>
<figcaption>Data-sets published </figcaption>

</figure>
</div>

<div class="four">
<figure>
<div class="wrap">

<div class="odometer com-champions">0</div>
</div>
<figcaption>OpenActive champions </figcaption>

</figure>
</div>

</article>

<!--  ---------------->
<!-- TEXT BLOCK -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Members</h2>
<div class="one">

## The community

Our open-invitation community is dynamic and self-supporting, allowing us to tap into an ever growing base of engaged individuals and organisations across the sector to support activities nationwide.

Building the data revolution in the sport and physical sector is a collaborative effort between consumers, organisations, and innovative start-ups, designed to support and benefit the industry at all levels.

</div>
</article>

<!--  ---------------->
<!-- MEMBERS -->
<!--  ---------------->
<article>
<div class="one freegrid-six">
{% assign posts = site.members | sample:18 %}
{% for post in posts %}
{% assign theImage = post.thumbnail_image %}
<div class="mobile-hide-content" data-tab="{{ forloop.index }}" markdown="0" >
<a href="{{ post.url | relative_url }}"><img role="logo" src="{{ theImage  | relative_url}}" alt="{{ post.title }}"/></a>
</div>
{% endfor %}
</div>
<div class="one buttons">
<a class="button-primary" href="{% link members-page.md %}">View All</a>
<a class="button-primary--ghost mobile-show">View More</a>
</div>
</article>

<!--  ---------------->
<!-- W3C COMMUNITY CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Standards group</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'W3C Community' %}
{% for item in subpage %}

### {{ item.title}}

{{ item.strapline | markdownify }}

\[Find out more\]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask"></div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}
</article>

<!--  ---------------->
<!-- CHAMPIONS -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Champions</h2>

<div class="one">

## OpenActive champions

The OpenActive Champions are ten advocates embracing and influencing local transformation with open opportunity data. As a peer-network, they’re committed to developing local knowledge, sharing good practice, and driving innovation to get people active.

</div>
</article>

<!--  ---------------->
<!-- CHAMPIONS -->
<!--  ---------------->

{% include champions.html %}

<!--  ---------------->
<!-- START-UPS -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Start-Ups</h2>
<div class="one">

## OpenActive Startups

The OpenActive Accelerator is supporting 10 startups that use open opportunity data to develop digital products and services that help people get active.

</div>
</article>

<!--  ---------------->
<!-- START-UPS  -->
<!--  ---------------->

{% include startup.html %}

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