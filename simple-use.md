---
title: Simple Use
permalink: "/simple-use/"
position: 21
is_main_navigation: false
layout: page-hero
thumbnail_image: "/uploads/sideplank.jpg"
strapline: Explanation of how to begin using data.
---
{::options parse_block_html="true" /}


<article>
<div class="two twoleft">

#### Use Real-time Opportunity Data To Build Engaging Experiences
The data sources listed below are examples of open data from the OpenActive community, which are available to freely access, use and share.

Please click on each to find out more details. The specification used to publish this data is under development and may evolve, so make sure that you join the relevant mailing list of each source that you use. To join the discussion in how these standards develop please get in touch.
When data is made open using the instructions in Open your data, it will automatically appear here.

</div>
<div class="two twoleft">

#### Data Users and Developers

* Harness open and accessible data from across the sport and physical sector.
* Use data to help develop new products and enhance existing services to get people more active.
* Be at the cutting edge of shaping consistent data standards and growing engagement with data publishers.

</div>
</article>

<article class="title-row">
<h2 class="sub-heading-two">Data Providers</h2>
<div class="one subgrid">
{% assign sortedPosts = site.dataproviders | sort: 'title' %}
{% for post in sortedPosts %}
{% assign theImage = post.thumbnail_image %}

<div class="four">
<figure>
<img role="logo" src="{{ theImage  | relative_url}}" alt="{{ post.title | escape }} Icon"/>
</figure>
</div>

{% endfor %}
</div>
</article>

<!--  ---------------->
<!-- DEVELOPER CALL TO ACTION -->
<!--  ---------------->
<article markdown="0" class="call_to_action--full-width">
<h2 class="sub-heading-two">Show me the code</h2>
<i class="line-graphic">{% include slim-line-graphic.svg %}</i>

<div markdown="1" class="one">

###  Developers
Join the open data revolution with OpenActive and help the nation get active.

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .primary_cta}

</div>
<figure>
<div class="triangle"></div>
<div class="stripe thick"></div>
<div style="background: url({{ site.baseurl }}/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>
</article>