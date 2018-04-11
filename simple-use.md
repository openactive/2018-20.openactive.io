---
title: Simple Use
permalink: "/simple-use/"
position: 21
is_main_navigation: false
thumbnail_image: "/uploads/sideplank.jpg"
strapline: Explanation of how to begin using data.
layout: page-hero
---

{::options parse_block_html="true" /}


<article>
<div class="two twoleft">

#### Use real-time opportunity data to build engaging experiences
The data sources listed below are examples of open data from the OpenActive community, which are available to freely access, use, and share.

Please click on each to find out more details. The specification used to publish this data is under development and may evolve, so make sure that you join the relevant mailing list of each source you use. To join the discussion on how these standards develop please get in touch.
When data is made open using the instructions in Open your data, it will automatically appear here.

</div>
<div class="two twoleft">

#### Benefits

* Harness open and accessible data from across the sport and physical sector.
* Use data to help develop new products and enhance existing services to get people active.
* Be at the cutting edge of shaping consistent data standards and growing engagement with data publishers.

</div>
</article>

<article class="title-row invert">
<h2 class="sub-heading-two">Data dashboard</h2>
<div class="one subgrid">
<div class="two">


#### Data providers
Review our list of data providers below to see who's already sharing their data. Then check out the status dashboard for further information.

[Status dashboard](http://status.openactive.io/){:target="_blank"}{: .button-primary}

</div>
<div class="two">
<a href="http://status.openactive.io/" target="_blank"><img src="{{site.baseurl }}/assets/images/dash.png"></a>
</div>
</div>

</article>


<article class="title-row">
<h2 class="sub-heading-two">Data providers</h2>
<div class="one freegrid-four">
{% assign sortedPosts = site.dataproviders | sort: 'title' %}
{% for post in sortedPosts %}
{% assign theImage = post.thumbnail_image %}

<div>
<figure>
<a class="post-title post-link" href="{{ post.url | relative_url }}">
<img role="logo" src="{{ theImage  | relative_url}}" alt="{{ post.title | escape }} Icon"/>
</a>
</figure>
</div>

{% endfor %}
</div>
</article>

