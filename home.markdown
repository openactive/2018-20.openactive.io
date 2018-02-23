---
title: Home
permalink: "/"
position: 0
is_main_navigation: false
layout: home
---

{::options parse_block_html="true" /}


<!--  ---------------->
<!-- HERO BLOCK -->
<!--  ---------------->
<article class="hero--home">
<nav class="hero_tab_nav">
<div class="hero-tab" data-tab="h1"></div>
<div class="hero-tab" data-tab="h2"></div>
<div class="hero-tab" data-tab="h3"></div>
</nav>
<div class="content">

# Helping physical activity reach everyone

 - Improve our nation’s physical health
 - Attract people to join activities
 - Innovate to help people get active

[Our Mission]( {{ site.baseurl }}{% link our-mission.md %}){: .button-primary}

</div>
<figure role="group" aria-labelledby="open-active-video">

<iframe width="560" height="315"  src="https://www.youtube.com/embed/kfVCRaMJarE" allowfullscreen></iframe>

<figcaption id="open-active-video" class="hidden" >{{ post.title | escape }}</figcaption>
</figure>

</article>


<!--  ---------------->
<!-- HOW IT WORKS -->
<!--  ---------------->
<article class="invert title-row">
<h2 class="sub-heading-two">What we do</h2>
<div class="one">

#### Our goal is to make data on what, where and when physical activity sessions happen, openly available.
This “opportunity data” includes details of a yoga class (“how much will it cost?”) through to badminton court availability (“where and when is a court available?”).

We are bringing together sports and physical activity organisations from across the sector to open up their opportunity data, from leisure operators to National Governing Bodies, local sports clubs to event providers, walking groups to fitness instructors. We are also helping other organisations to use this opportunity data to build interesting tools and experiences for consumers.

[FIND OUT MORE]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary} [Get Involved]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary--ghost}

</div>
</article>


<!--  ---------------->
<!-- OPEN DATA ILLUSTRATION -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two"> What is <br>Open Data?</h2>
<div class="one">

<h3>What is the definition?</h3>
<p class="reset-style">
Open data is data that anyone can access, use or share. Simple as that. When big companies or governments release non-personal data, it enables small businesses, citizens and medical researchers to develop resources which make crucial improvements to their communities.</p>
</div>
<div class="one">

![what_open_data.png]({{ site.baseurl }}/uploads/what_open_data.png)

</div>
</article>





<!--  ---------------->
<!-- CASE STUDIES -->
<!--  ---------------->
<article class="invert title-row">
<h2 class="sub-heading-two">Case<br> Studies</h2>

<div class="one">

#### Success Stories
Read about some of the many organisations starting to embrace open data.

</div>


{% include case-study.html %}
</article>





<!--  ---------------->
<!-- CALL TO ACTION BLOCKS -->
<!--  ---------------->
<article class="call_to_action">
<div class="subgrid">
<div class="three">

#### Getting Started

Take the first step enabling open data in your system.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}

</div>
<div class="three">

#### Developer

Get stuck into the docs and start using or publishing data today!

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .button-primary}

</div>
<div class="three">

#### Community

What's happening in the community, and how you can get involved!

[Community]( {{ site.baseurl }}{% link community.md %}){: .button-primary}

</div>
</div>
</article>

<!--  ---------------->
<!-- ACCELERATOR BLOCKS -->
<!--  ---------------->
<article class="call_to_action--full-width global">
<h2 class="sub-heading-two">Start Ups</h2>
<div class="one">

### The Accelerator Programme

Millions find it hard to stay active. OpenActive Accelerator calls for startups to make it easier with digital innovation using open data.

[Find out more]( {{ site.baseurl }}{% link accelerator.md %}){: .button-primary}

</div>
<figure>
<div class="triangle"></div>
<div class="stripe"></div>
<div style="background: url({{ site.baseurl }}/uploads/accel_cta.png)center center / cover no-repeat;"></div>
</figure>
</article>






<!--  ---------------->
<!-- NEWS BLOCK -->
<!--  ---------------->
<article class="post-list title-row">
<h2 class="sub-heading-two"> Latest News</h2>
{% assign thePosts = site.posts | where: "is_featured", "true" %}
{% for post in thePosts limit:2 %}
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
</article>