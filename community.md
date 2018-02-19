---
title: Community
permalink: "/community/"
position: 25
is_main_navigation: true
layout: page-hero
thumbnail_image: "/uploads/iStock-501777666_optimised.png"
strapline: Innovation through Collaboration
---

{::options parse_block_html="true" /}




<!-- <article markdown="0" class="hero--sub"> -->

<!-- <i class="line-graphic">{% include slim-line-graphic.svg %}</i> -->

<!-- <div> -->

<!-- <h1>Community</h1> -->
<!-- <p>Innovation through Collaboration</p> -->


<!-- </div> -->
<!-- <figure> -->
<!-- <div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div> -->
<!-- </figure> -->

<!-- </article> -->

<article>
<div class="one">

### Who’s involved?

OpenActive’s collaborative community includes ambitious start-ups supported through our Accelerator programme, members of the OpenActive Champions programme of masterclasses, who are using peer-to-peer networking to transform the sector using open data, and the skilled technical community of developers working to improve data knowledge and engagement.

Explore the dashboard to learn more about our community and the datasets already published.

[Status Dashboard](http://status.openactive.io/){:target="_blank"}{: .primary_cta}


+ Graphics and icons to represent the number of
    + Community Members
    + Accelerator Start ups
    + Data-sets Published
    + OpenActive Champions

</div>
</article>



<article>
<div class="one">

### The Community
Our community is dynamic and self-supporting, allowing us to tap into an ever growing base of engaged individuals and organisations across the sector to support activities nationwide. Building the data revolution in the sport and physical sector is a collaborative effort between consumers, organisations, and innovative start-ups, designed to support and benefit the industry at all levels.

</div>
</article>

<article class="post-list title-row">
<h2 class="sub-heading-two"> Community News</h2>
{% for post in site.posts limit:2 %}
{% if post.categories contains "Community" %}
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
{{post.date}}
{{post.author}}
</div>
</div>
</div>
{% endif %}
{% endfor %}
</article>


<article>
<div class="one">

### Resources
+ Links to resources on the developer page
    + [Developer]( {{ site.baseurl }}{% link developer.md %})  

### Meet the Community

OpenActive’s open-invitation community is continuing to grow. Discover who has joined us so far.

</div>
</article>

<article >
{% assign posts = site.members | sample:18 %}
{% for post in posts %}
{% assign theImage = post.thumbnail_image %}

<div class="six" data-tab="{{ forloop.index }}" markdown="0" >
<a  href="{{ post.url | relative_url }}"><img src="{{ theImage  | relative_url}}"/></a>
</div>


{% endfor %}

</article>

<article>
<div class="one">
<p><a class="button-primary" href="{{ site.baseurl }}{% link members-page.md %}">View all the members</a></p>
    

### OpenActive standards group

Our goal is to develop technical specifications and best practices that support the use of open and shared data about sports and physical activities.

While our work is technical, you don’t have to be a developer to contribute. Our primary focus is standardising how to publish data about physical activity opportunities, defining best practices and APIs to enable booking events and facilities, and improving interoperability of data across the sector.


<p><a class="button-primary" href="https://www.w3.org/community/openactive/">Join the standards group</a></p>

</div>
</article>

<article>
<div class="one">

### OpenActive Champions

The OpenActive Champions are ten advocates embracing and influencing local transformation with open opportunity data. As a peer-network, they’re committed to develop local knowledge, share good practice and drive innovation to get people active.

<p><a class="button-primary" href="https://blog.openactive.io/openactive-champions-assemble-10-advocates-embrace-local-transformation-with-open-data-to-get-fe71c953fd31">Read More</a></p>


</div>
</article>

<article>
<div class="one">
### FAQ's 
+ Showcasing of common FAQ's (10)
+ Links to full FAQ's [FAQ's]( {{ site.baseurl }}{% link faqs.md %})  

</div>
</article>