---
title: Our vision
permalink: "/our-vision/"
position: 1
is_main_navigation: true
layout: page-headless
---

{::options parse_block_html="true" /}

<!--  ---------------->
<!-- HERO BLOCK -->
<!--  ---------------->
<article class="hero--video">
<div class="two">

# We want to make it as easy to find and book a badminton court as it is to book a hotel room.

We're building a future where the opportunities sport and physical activity providers offer are no longer stuck in a single website, and can be listed in a wide range of apps and services.

[Find out how]({{ site.baseurl }}{% link how-it-works.md %}){:.button-primary}

</div>
<div class="two">
<figure role="group" aria-labelledby="open-active-video">
<div class="mask"></div>
<iframe id="video" title="OpenActive intro video" width="560" height="315"  src="https://www.youtube.com/embed/OJqCAn0sv44?showinfo=0&rel=0&enablejsapi=1" allowfullscreen></iframe>
<figcaption id="open-active-video" class="hidden" >{{ post.title | escape }}</figcaption>
</figure>

</div>
</article>

<!--  ---------------->
<!-- QUOTE BLOCK -->
<!--  ---------------->
<article class="invert">
<div class="two">

## Why are we doing this?

Helping people get active and increase participation is an important part of Sport England's [Towards an Active Nation](https://www.sportengland.org/news-and-features/news/2016/november/1/open-data-to-boost-activity/) strategy.

We think [working openly ]({{ site.baseurl }}{% link about-openactive.md %}) with the sector is the best way towards an active nation.

</div>
<div class="two">
<blockquote class="featured">
<div class="quote">
{% include quote.svg %}
</div>

Almost 18 million (39.4%) of adults in England don’t exercise enough to improve their health and wellbeing.\* Increasing the visibility of physical activity makes it easier for someone to choose to take part.

###### SPORT ENGLAND

[Active Lives Survey - 16/17](https://www.sportengland.org/media/12458/active-lives-adult-may-16-17-report.pdf){:target="_blank"}

</blockquote>
</div>
</article>

<!--  ---------------->
<!-- BENEFITS FOR ACTIVITY PROVIDERS TEXT BLOCK -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Activity providers</h2>

<div class="one">

### How will this benefit activity providers?

OpenActive can help you increase your visibility and allow you to reach new customers.

</div>
</article>

<article class="benefits">
<div class="one subgrid">
<div class="three">

![People]({{ site.baseurl }}/resources/images/vision/people.svg)
Get your opportunities in front of more people.

</div>
<div class="three">

![fully-booked]({{ site.baseurl }}/resources/images/vision/fully-booked.svg)
Find new ways to promote quiet sessions or fill spare capacity.

</div>
<div class="three" id="examples-scroll">

![Tennis]({{ site.baseurl }}/resources/images/vision/tennis.svg)
Describe your opportunities in a way that helps new customers decide to take part.

</div>
</div>

</article>

<!--  ---------------->
<!-- BENEFITS FOR DATA USES TEXT BLOCK -->
<!--  ---------------->
<article class="title-row benefits">
<h2 class="sub-heading-two">Using Data</h2>
<div class="one">

### What kind of services can use open opportunity data?

OpenActive has the potential to offer a near-limitless range of services. The data can be used to create generic activity finders for wide audiences, to very tailored services aimed at getting specific kinds of people active.

</div>

</article>
<article class="title-row benefits">

<div class="one subgrid">
<div class="three">

![Magnifying Glass]({{ site.baseurl }}/resources/images/vision/magnifying-glass.svg)
Enriching services that people already use to find activities and opportunities. For example, services like [Change4Life](https://www.nhs.uk/change4life){:target="_blank"}.

</div>
<div class="three">

![Family]({{ site.baseurl }}/resources/images/vision/family.svg)
Family-focused activity finders where parents can choose physical activities based on age range or skill level. For example, services like [Hoop](https://www.hoop.co.uk){:target="_blank"} or [SeeSaw](https://www.seesawapp.com){:target="_blank"}.

</div>
<div class="three">

![Stethoscope]({{ site.baseurl }}/resources/images/vision/stethoscope.svg)
Helping youth workers, social care professionals, or GPs encourage their clients or patients to get active. For example, services like [Healum](https://www.healum.com/){:target="_blank"} or [Wellaware](https://www.wellaware.org.uk){:target="_blank"}.

</div>
<div class="three">

![Upward-graph]({{ site.baseurl }}/resources/images/vision/upward-graph.svg)
Tools that are specifically designed to help people form active habits. For example, campaigns like [This Girl Can](http://www.thisgirlcan.co.uk/){:target="_blank"}.

</div>
<div class="three">

![People]({{ site.baseurl }}/resources/images/vision/shaking-hands.svg)
Apps that emphasise the social rewards of physical activity or help someone find an option 'for people like me'. For example, [Find a Player](https://findaplayer.com/){:target="_blank"}.

</div>
</div>

</article>

<!--  ---------------->
<!-- HOW IT WORKS CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Where now?</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'How it works' %}
{% for item in subpage %}

### {{ item.title}}

{{ item.strapline | markdownify }}

[Find out how]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask"></div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}

</article>