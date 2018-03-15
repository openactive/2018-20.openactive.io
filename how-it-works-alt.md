---
title: How It Works Alt
permalink: "/how-it-works-alt/"
position: 2
is_main_navigation: false
is_secondary_navigation: false
layout: page-headless
thumbnail_image: "/uploads/iStock-803099000optimised.png"
strapline: Discover how we can achieve our vision in practice and the progress we’ve
  made so far.
---

{::options parse_block_html="true" /}

<!--  ---------------->
<!-- HERO BLOCK -->
<!--  ---------------->
<article class="hero--simple">
<div class="two">

<h1>{{ page.title | escape }}</h1>

Open data is a tool that can help activity providers increase the reach and visibility of the opportunities they run.

It can also help data users create new apps and services that can help people get active.

</div>
<div class="two">


![Hero]({{ site.baseurl }}/assets/images/placeholder.png)

</div>
</article>



<article>
<div class="three">
![Hero]({{ site.baseurl }}/assets/images/placeholder.png)

##### Activity providers make the data about their opportunities open.

This is covers timetables, locations and descriptions. This is often already accessible on the web. Making it open means that people can use it in interesting ways.

See below to find out how to make this data open.

</div>
<div class="three">
![Hero]({{ site.baseurl }}/assets/images/placeholder.png)

##### Third parties can list these opportunities in their apps or services.

Because it is openly licensed, anyone has permission ot access, use or share this opportunity data.

These services include straightforward activity finders for a wide audience or tailored tools aimed at specific types of user.

</div>
<div class="three">
![Hero]({{ site.baseurl }}/assets/images/placeholder.png)

##### The data can also be bookable.

This means that a customer can make a booking on a third party's site, and the payment is sent securely to the activity provider.

</div>
</article>


<!--  ---------------->
<!-- TABS -->
<!--  ---------------->
{% include tabs.html %}


<!--  ---------------->
<!-- WHAT IS OPPORTUNITY DATA -->
<!--  ---------------->
<article  class="opportunity-data title-row">
<h2 class="sub-heading-two">Opportunity Data Explained</h2>
<div class="one freegrid-five">

<div>

![time]({{ site.baseurl }}/assets/images/time.png)
##### Time

</div>
<div>

![cost]({{ site.baseurl }}/assets/images/cost.png)
##### Price

</div>
<div>

![description]({{ site.baseurl }}/assets/images/description.png)
##### Description

</div>
<div>

![location]({{ site.baseurl }}/assets/images/location.png)
##### Location

</div>
<div>


![details]({{ site.baseurl }}/assets/images/details.png)
##### Details

</div>
</div>
</article>

<article>
<div class="one">

#### Opportunity data helps people decide whether to take part in an activity or not.
It includes things like **date & time**, **location** and **description.** It describes **events**, **sessions** or **facilities** that are available in the future.

In most cases this information can already be found on the activity provider's own website. Making it open means that it can be listed in lots of different places. Data is made available via an openly licensed feed - or API - that anyone can access, use or share. There won't be anything sensitive in this feed.

###### Opportunity data **does not** include things like personal data about customers or a record of who has done what.

</div>
</article>


<!--  ---------------->
<!-- GETTING STARTED CALL TO ACTION -->
<!--  ---------------->
<article markdown="0" class="call_to_action--full-width">
<h2 class="sub-heading-two">Where now?</h2>
<i class="line-graphic">{% include slim-line-graphic.svg %}</i>

<div markdown="1" class="one">


{% assign subpage = site.pages | where: 'title', 'Getting Started' %}
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
<!-- LEARN/DEVELOP CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action title-row ">
<h2 class="sub-heading-two">Jump In</h2>
<div class="subgrid">
<div class="three">

### E-Learning
Join the open data revolution with OpenActive and help the nation get active.

[Learn the Basics]( {{ site.baseurl }}{% link e-learning.md %}){:class="button-primary" }

</div>
<div class="three">

### Developer
Sapiente voluptatem quia fuga optio. Dignissimos et occaecati consequatur accusamus in.

[Dive Deep]( {{ site.baseurl }}{% link developer.md %}){:class="button-primary" }

</div>
<div class="three">

### Community
This is an open-invitation community of pioneering organisations.

[Get Involved]( {{ site.baseurl }}{% link community.md %}){: .button-primary}

</div>
</div>
</article>

