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


[How it Works]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary}

</div>
<figure role="group" aria-labelledby="open-active-video">

<iframe width="560" height="315"  src="https://www.youtube.com/embed/kfVCRaMJarE" allowfullscreen></iframe>

<figcaption id="open-active-video" class="hidden" >{{ post.title | escape }}</figcaption>
</figure>
</article>


<!--  ---------------->
<!-- CASE STUDIES -->
<!--  ---------------->
{% include case-study.html %}

<!--  ---------------->
<!-- TABS -->
<!--  ---------------->
<article markdown="0" class="tabs invert">
<h2 class="sub-heading-two">Where to start?</h2>
<div  id="tabs">
<div  class="tabsList " role="tablist">
<h3 class="tablink" role="tab presentation" aria-selected="true">
<a href="#how-it-works">How it Works</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h3>

<div markdown="1" role="tabpanel" id="how-it-works" class="tabPanel" aria-hidden="false" aria-labelledby="how-it-works">

#### How it Works
OpenActive makes discovering and taking part in  sport and fitness activities easier than ever before. With open data, your activities can be available to people across the country,  on websites and apps that attract millions of users, to communities and services that engage local people.

[Discover More]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary}

</div>

<h3 class="tablink" role="tab presentation" aria-selected="false">
<a href="#booking-systems">Booking Systems</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h3>

<div markdown="1" role="tabpanel" id="booking-systems" class="tabPanel" aria-hidden="true"
aria-labelledby="booking-systems">

#### Booking Systems

1. To get started, add an open data tick-box to your system so your customers can begin publishing open data.
2. Build in simple data tools to allow your customers to publish activity listings, and use OpenActive data standards to improve existing datasets.
3. Datasets will be listed in our directory for anyone to access, use, and share.
4. Now, your customers’ activities will be available everywhere, from high-traffic online platforms,, to local community services.


Publish your activity listing and join the open data revolution.

[Get Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}

</div>

<h3 class="tablink" role="tab presentation" aria-selected="false">
<a href="#activity-provider">Activity Providers</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h3>

<div markdown="1" role="tabpanel" id="activity-provider" class="tabPanel" aria-hidden="true"
aria-labelledby="activity-provider">

#### Activity Providers

1. List your activity details on your existing website or booking system.
2. Publish your activity information using our OpenActive data standards.
3. Your dataset will be listed in our directory for anyone to access, use, and share.
4. Now, your activities will be available everywhere, from high-traffic online platforms, to local community services.

Publish your activity listing and join the open data revolution

[Get Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}

</div>

<h3 class="tablink" role="tab presentation" aria-selected="false">
<a href="#use-data">Use Data</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h3>

<div markdown="1" role="tabpanel" id="use-data" class="tabPanel" aria-hidden="true" aria-labelledby="use-data">

#### Use Data

1. Pick a data source from the list available on OpenActive.
2. Join their mailing list and review the documentation.
3. Pull in the data to your website or app. If you need help reach out to the OpenActive Community.

[Get Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}

</div>
</div>
</div>
<i class="line-graphic">{% include line-graphic-side.svg %}</i>
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