---
title: Getting Started
permalink: "/getting-started/"
position: 3
is_main_navigation: true
layout: page-hero
thumbnail_image: "/uploads/iStock-803099000optimised.png"
strapline: Discover how to build unlimited reach for your activities
---

{::options parse_block_html="true" /}


<article class="booking-engines-section title-row">
<h2 class="sub-heading-two">Who Uses OpenActive?</h2>

<div class="two">

#### Booking Systems
Search our list of OpenActive enabled system, to find the activity providers already benefiting from our initiative.

[Enabled Booking Systems]( {{ site.baseurl }}{% link booking-engines.md %}){:class="button-primary" }


</div>
<div class="two">
<nav class="subgrid">
{% for post in site.booking_engines %}
{% if post.is_enabled %}
{% assign theImage = post.thumbnail_image %}
{% if post.member %}
{% assign theMember = site.members | where:"title", post.member  | first %}
{% assign theImage = theMember.thumbnail_image %} 
{% endif %}
<div class="four case-tab" data-tab="{{ forloop.index }}" markdown="0" >
<a  href="{{ post.url | relative_url }}"><img role="logo" src="{{ theImage  | relative_url}}"/></a>
</div>

{% endif %}
{% endfor %}
</nav>


</div>
</article>

<article class="call_to_action ">
<div class="subgrid">
<div class="two use gradient list">

### Publish Your Data 

1. Open your organisation’s data to allow customers to easily access events and services
2. With open data, your activities can be discovered, shared, and engaged with by people nationwide
3. By publishing your data, your activities will be shared across websites and apps that attract millions of users, to communities and services that engage local people

</div>
<div class="two publish gradient list">

### Using Data

1. Developers and innovators can use data to create new products and services to benefit the sports and physical sector
2. By harnessing open data, we can build growth and reach across the sector
3. Easy access to opportunity data can help people to get active, and boost participation in activities nationwide
4. We encourage you to explore the data published so far, and discover what’s useful for you

</div>
</div>
</article>


<article class="call_to_action--full-width brand-ten-bc">
<h2 class="sub-heading-two">Show me the code</h2>
<div class="one">

### For Developers
Join the open data revolution with OpenActive and help the nation get active. 

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .button-primary}

</div>
<figure class="brand-nine-bc">
<div class="triangle"></div>
<div class="stripe"></div>
<div style="background: url({{ site.baseurl }}/uploads/dancin.png)center center / cover no-repeat;"></div>
</figure>
</article>

<!-- <article>
<div class="one">

### I’m interested, but how can I help?

If you think your organisation would benefit from open data, but the decision isn’t in your hands, explore the links below for accessible documents to share with your team or employer.
</div>
</article> -->

<!-- <article class="call_to_action">
<div class="subgrid">
<div class="three purple-gradient-bc"> 
#### Convince Your Company
Discover downloadable documents to give to your company. 

[Convince Company]( {{ site.baseurl }}{% link convince-company.md %}){: .button-primary}

</div>
<div class="three red-gradient-bc"> 

#### Tell Your Team
Find resources designed to explain open data to your colleagues.

[Tell Team]( {{ site.baseurl }}{% link tell-team.md %}){: .button-primary}

</div>
<div class="three blue-gradient-bc"> 

#### Contact us
Have a question? Get in touch.

[Contact]( {{ site.baseurl }}{% link contact.md %}){: .button-primary}

</div>
</div>
</article> -->