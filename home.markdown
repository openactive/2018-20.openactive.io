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

<!-- <nav class="hero_tab_nav"> -->
<!-- <div class="hero-tab" data-tab="h1"></div> -->
<!-- <div class="hero-tab" data-tab="h2"></div> -->
<!-- <div class="hero-tab" data-tab="h3"></div> -->
<!-- </nav> -->

<div class="content">

# Helping physical activity reach everyone

 - Improve our nation’s physical health
 - Attract people to join activities
 - Innovate to help people get active

[Our Vision]( {{ site.baseurl }}{% link our-vision.md %}){: .button-primary--alt}

</div>
<figure id="introduction-vid"  role="group" aria-labelledby="open-active-video">
<div class="mask"></div>
<iframe id="video" title="OpenActive intro video" width="560" height="315"  src="https://www.youtube.com/embed/kfVCRaMJarE?&modestbranding=1&showinfo=0&rel=0&enablejsapi=1" allowfullscreen></iframe>

<figcaption id="open-active-video" class="hidden" >{{ post.title | escape }}</figcaption>
</figure>

</article>



<!--  ---------------->
<!-- CASE STUDIES -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two margin-top">Success Stories</h2>
{% include case-study.html %}
</article>






<!--  ---------------->
<!-- WHAT WE DO -->
<!--  ---------------->
<article class="invert title-row what-we-do">
<h2 class="sub-heading-two">What we do</h2>
<div class="two twoleft">

#### Our goal is to make data on what, where and when physical activity sessions happen, openly available.

We are bringing together sports and physical activity organisations from across the sector to open up their opportunity data.

From leisure operators to National Governing Bodies, local sports clubs to event providers, walking groups to fitness instructors. We are also helping other organisations to use this opportunity data to build interesting tools and experiences for consumers.

[FIND OUT MORE]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary} [Get Involved]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary--ghost}

</div>
<div class="two twoleft">

##### Opportunity data
**Includes details such as:**
* How much will it cost?
* When is a court available?
* Where is the class?

**But not personal data like:**
* Name / Address
* Age / Sex
* Weight / Height

</div>
</article>


<!--  ---------------->
<!-- OPEN DATA ILLUSTRATION -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">What is the definition?</h2>
<div class="one">

<h3>What is Open Data?</h3>
<p class="reset-style">
Open data is data that anyone can access, use or share. Simple as that. When big companies or governments release non-personal data, it enables small businesses, citizens and medical researchers to develop resources which make crucial improvements to their communities.</p>
</div>
<div class="one">

![what_open_data.png]({{ site.baseurl }}/uploads/what_open_data.png)

</div>
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
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Start Ups</h2>
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
<!-- NEWS BLOCK -->
<!--  ---------------->
<article class="post-list title-row">
<h2 class="sub-heading-two"> Latest News</h2>
{% assign thePosts = site.posts | where: "is_featured", "true" %}
{% for post in thePosts limit:2 %}
<div class="two" id="post-{{ forloop.index }}">
<figure role="group">
<a href="{{ post.url | relative_url }}">
<img src="{{post.thumbnail_image | relative_url}}" alt="{{ post.title | escape }}-post-thumbnail">
</a>
</figure>
<h3>{{ post.title | escape }}</h3>
<div class="subgrid brand-one-b">
<div class="two twoleft">
{{ post.excerpt }}
<a class="button-primary" href="{{ post.url | relative_url }}">Read Post</a>
</div>
<div class="two twoleft">
<div markdown="0" class="share-page">
<a role="button" href="https://plus.google.com/share?url={{ site.url }}{{ post.url }}" role="button" standalone="true" rel="nofollow" target="_blank" title="Share on Google+"><span class="hidden" aria-hidden="true">Share to  Google</span>{% include googleplus.svg %}</a>
<a role="button" href="https://twitter.com/intent/tweet?text={{ post.title }}&url={{ site.url }}{{ post.url }}&via={{ site.twitter_username }}&related={{ site.twitter_username }}" role="button" standalone="true" rel="nofollow" target="_blank" title="Share on Twitter"><span class="hidden" aria-hidden="true">Share to Twitter</span>{% include twitter.svg %}</a>
<a role="button" href="https://facebook.com/sharer.php?u={{ site.url }}{{ post.url }}" role="button" standalone="true" rel="nofollow" target="_blank" title="Share on Facebook"><span class="hidden" aria-hidden="true">Share to  Facebook</span>{% include facebook.svg %}</a>

</div>
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
{{post.date | date: date_format}}
{{post.author}}
</div>
</div>
</div>
{% endfor %}
</article>