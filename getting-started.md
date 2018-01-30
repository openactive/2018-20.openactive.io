---
title: Getting Started
permalink: "/getting-started/"
position: 3
is_main_navigation: true
layout: page
---

{::options parse_block_html="true" /}


<article class="note-wrap">
<div class="notes">

##### Page Notes ~ {{ page.title | escape }}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1LJxp7jbt6r5jTTZqoSJ5WK6yjZDpqhaXNVi-Rx_cSjA){:target="_blank"}

</div>
</article>
<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>


<article markdown="0" class="hero--sub">

<i class="line-graphic">{% include slim-line-graphic.svg %}</i>

<div>

<h1>Getting Started</h1>
<p>Discover how to build unlimited reach for your activities</p>


</div>
<figure>
<div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>

</article>




<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article>
<h2 class="sub-heading-two">Who Uses OpenActive?</h2>

<div class="one">

Search our list of OpenActive enabled system, to find the activity providers already benefiting from our initiative.

<nav class="subgrid">
{% for post in site.booking_engines %}
{% assign theImage = post.thumbnail_image %}

{% if post.member %}
{% assign theMember = site.members | where:"title", post.member  | first %}
{% assign theImage = theMember.thumbnail_image %}
{% endif %}

<div class="case-tab" data-tab="{{ forloop.index }}" markdown="0" >
<a  href="{{ post.url | relative_url }}"><img src="{{ theImage  | relative_url}}"/></a>
</div>



{% endfor %}
</nav>

[Booking Engines]( {{ site.baseurl }}{% link booking-engine.md %})  


</div>
</article>

<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**: A simple explanation of how to **publish / use** data Possibly a list of simple steps to reach the goal

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article class="call_to_action">
<div class="subgrid">
<div class="two brand-blue-bc list">

### Publish Your Data 

1. Open your organisation’s data to allow customers to easily access events and services
2. With open data, your activities can be discovered, shared, and engaged with by people nationwide
3. By publishing your data, your activities will be shared across websites and apps that attract millions of users, to communities and services that engage local people


[Publish Data]( {{ site.baseurl }}{% link simple-publish.md %}){: .primary_cta}

</div>
<div class="two brand-blue-bc list">

### Using Data

1. Developers and innovators can use data to create new products and services to benefit the sports and physical sector
2. By harnessing open data, we can build growth and reach across the sector
3. Easy access to opportunity data can help people to get active, and boost participation in activities nationwide
4. We encourage you to explore the data published so far, and discover what’s useful for you


[Use Data]( {{ site.baseurl }}{% link simple-use.md %}){: .primary_cta}

</div>
</div>
</article>


<article class="note-wrap">
<div class="notes">

##### Section Notes ~ CTA Block
**Purpose**: A section aimed at developers who want to engage with the documentation and specifications

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article class="call_to_action--full-width brand-ten-bc">
<h2 class="sub-heading-two">Show me the code</h2>
<div class="one">

### For Developers
Join the open data revolution with OpenActive and help the nation get active. 

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .primary_cta}

</div>
<figure class="brand-nine-bc">
<div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>
</article>

<article>
<div class="one">

### I’m interested, but how can I help?

If you think your organisation would benefit from open data sharing, but the decision isn’t in your hands, explore the links below for accessible documents to share with your team or employer. 
</div>
</article>

<article class="call_to_action">
<div class="subgrid">
<div class="three brand-blue-bc">

#### Convince Your Company
Discover downloadable documents to give to your company. 

[Convince Company]( {{ site.baseurl }}{% link convince-company.md %}){: .primary_cta}

</div>
<div class="three brand-blue-bc">

#### Tell Your Team
Find resources designed to explain open data to your colleagues.

[Tell Team]( {{ site.baseurl }}{% link tell-team.md %}){: .primary_cta}

</div>
<div class="three brand-blue-bc">

#### Contact us
Have a question? Get in touch.

[Contact]( {{ site.baseurl }}{% link contact.md %}){: .primary_cta}

</div>
</div>
</article>v