---
title: Developer
permalink: "/developer/"
position: 4
is_main_navigation: true
thumbnail_image: "/uploads/dancin.png"
strapline: Get into all the details surrounding the technical requirements of our
  data standards
layout: page-hero
---

{::options parse_block_html="true" /}

<!--  ---------------->
<!-- HERO TEXT -->
<!--  ---------------->
<article>
<div class="one">

#### The open data being gathered by OpenActive and associated partners will transform the sport and physical sector.

We’ve made it easy for developers to understand and engage with our data standards and the Opportunity Data Dashboard, to ensure relevant organisations nationwide can join us in revolutionising the way people find, access, and participate in new activities.

Because no single platform or app holds all the data available under OpenActive, we’ve designed the first set of OpenActive standards to support developers in harvesting and collecting data from multiple sources.

</div>
</article>


<!--  ---------------->
<!-- CODE -->
<!--  ---------------->
<article class="title-row invert developer-data">
<h2 class="sub-heading-two">The Data</h2>
<div class="code left">

#### Opportunity Data
This is data that describes a physical activity including **what** it is, **where** and **when** it's taking place.

Opportunity data includes enough information for a participant to decide whether an activity is right for them.

</div>
<div class="code right">
<div class="terminal">


```json
{
  "title": "Tai",
  "description": "Tai chi Class",
  "remainingSpaces": "12",
  "time": "2017-03-22T20:00:00",
}
```

</div>

<a class="data-show button-primary">Show me more</a>

</div>

<div class="further-code left">
<div class="terminal">

```json
{
  "@context": "https://www.openactive.io/ns/oa.jsonld",
  "type": "Event",
  "name": "Tai chi Class",
  "url": "http://www.example.org/events/1",
  "startDate": "2017-03-22T20:00:00",
  "activity": "Tai Chi",
  "location": {
    "type": "Place",
    "name": "ExampleCo Gym",
    "address": {
      "type": "PostalAddress",
      "streetAddress": "1 High Street",
      "addressLocality": "Bristol",
      "postalCode": "BS1 4SD"
    }
  }
}
```

</div>
</div>
<div class="further-code right">

#### Publishing Opportunities
The specification defines a data model to help different platforms and applications to publish data in a consistent way.

[Opportunity Data Primer]( https://www.openactive.io/opportunity-data-primer/){: .button-primary target="_blank"}
[Describing Events](https://www.openactive.io/opportunity-data-primer/#describing-events){: .button-primary--ghost target="_blank"}


</div>
</article>


<!--  ---------------->
<!-- DASHBOARD -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">Data Dashboard</h2>
<div class="two">

![Hero]({{ site.baseurl }}/assets/images/dash.png)

</div>
<div class="two">

##### The Opportunity Data Dashboard lists all of the opportunity data feeds we have currently available.
Explore the dashboard to find the data you need, identify which feeds conform to our standards, and provide feedback to publishers.


[Status Dashboard](http://status.openactive.io/){:target="_blank"}{: .button-primary}

</div>
</article>



<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Quick Start</h2>
<div class="subgrid">
<div class="two list">

### Publish Your Data

1. Open your organisation’s data to allow customers to easily access events and services
2. With open data, your activities can be discovered, shared, and engaged with by people nationwide
3. By publishing your data, your activities will be shared across websites and apps that attract millions of users, to communities and services that engage local people

[Publish Data]( {{ site.baseurl }}{% link simple-publish.md %}){: .button-primary}


</div>
<div class="two list">

### Using Data

1. Developers and innovators can use data to create new products and services to benefit the sports and physical sector
2. By harnessing open data, we can build growth and reach across the sector
3. Easy access to opportunity data can help people to get active, and boost participation in activities nationwide
4. We encourage you to explore the data published so far, and discover what’s useful for you

[Use Data]( {{ site.baseurl }}{% link simple-use.md %}){: .button-primary}

</div>
</div>
</article>

<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Resource</h2>

<div class="subgrid">
<div class="four">

### How-to Guides

Molestiae corporis rerum blanditiis voluptas vel. Vero dolorum commodi laboriosam quia. Qui hic optio doloremque.

[Discover More]( {{ site.baseurl }}{% link how-to.md %}){:.link}

</div>
<div class="four">

### Discussions
Learn more about how we’re making opportunity data easier to access, use, and share nationwide.

[Discover More]( {{ site.baseurl }}{% link discussions.md %}){:.link}

</div>
<div class="four">

### References
Dive into the detail by looking through our standards documentation and best practice guidance.

[Discover More]( {{ site.baseurl }}/slate/build){:.link target="_blank"}

</div>
<div class="four">

### E-Learning
Guidance for developers on getting started, to help you learn how to publish and use your data to benefit your organisation. 

[Discover More]( {{ site.baseurl }}{% link e-learning.md %}){: .link }

</div>
</div>
</article>


<!--  ---------------->
<!-- COMMUNITY CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Meet our community</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'Community' %}
{% for item in subpage %}
### {{ item.title}}
{{ item.strapline | markdownify }}

[Find out more]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask">{% include overlay.svg %}</div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}

</article>
