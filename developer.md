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

### The open data being gathered by OpenActive and associated partners will transform the sport and physical sector

We’ve made it easy for developers to understand and engage with our data standards and the Opportunity Data Dashboard, to ensure relevant organisations nationwide can join us in transforming the way people find, access, and take part in new activities.

Because no single platform or app holds all the data available under OpenActive, we’ve designed the first set of OpenActive standards to support developers in harvesting and collecting data from multiple sources.

</div>
</article>
<article>
<div class="two">
[How to publish OpenActive data]( https://github.com/openactive/realtime-paged-data-exchange/blob/master/README.md ){: .button-primary target="_blank"}
</div>
<div class="two">

[How to use OpenActive data]( {{ site.baseurl }}{% link use-data.md %}){:class="button-primary" }
</div>
</article>

<!--  ---------------->
<!-- CODE -->
<!--  ---------------->
<article class="title-row invert developer-data">
<h2 class="sub-heading-two">The Data</h2>
<div class="code left">

### Opportunity data
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
  "time": "2017-03-22T20:00:00 Z",
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
  "startDate": "2017-03-22T20:00:00 Z",
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

#### Publishing opportunities
The specification defines a data model to help different platforms and applications to publish data in a consistent way.

[Data Primer]( https://www.openactive.io/opportunity-data-primer/){: .button-primary target="_blank"}
[Describing Events](https://www.openactive.io/opportunity-data-primer/#describing-events){: .button-primary--ghost target="_blank"}


</div>
</article>


<!--  ---------------->
<!-- DASHBOARD -->
<!--  ---------------->
<article class="title-row dashboard">
<h2 class="sub-heading-two">Data Tools</h2>
<div class="two tworight">

![Hero]({{ site.baseurl }}/assets/images/icons/dash.svg)


</div>
<div class="two tworight">

### The opportunity data dashboard
The dashboard lists all opportunity data feeds currently available.

Explore the dashboard to find the data you need, identify which feeds conform to our standards, and provide feedback to publishers.


[Vist dashboard](http://status.openactive.io/){:target="_blank"}{:.button-primary}

</div>
</article>
<article class="dashboard">
<div class="two tworight">

![Hero]({{ site.baseurl }}/assets/images/icons/dash-map.svg)

</div>
<div class="two tworight">


### The open data map
The map displays all activity data available in England.

Explore the map to find the data you need, identify which areas are embracing open data, and which are yet to.


[View data map](https://philiphorgan.carto.com/builder/6ac0f185-8322-4b95-ae66-b55768390fa9/embed){:target="_blank"}{:.button-primary}

</div>
</article>


<!--  ---------------->
<!-- CASE STUDIES -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two margin-top">Success stories</h2>
{% include case-study.html %}
</article>



<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->

<article class=" title-row">
<h2 class="sub-heading-two">References</h2>
<div class="one">
<h3>Open Data Publishing</h3>
<p></p>
[ Paging specification](https://www.openactive.io/realtime-paged-data-exchange/){:target="_blank"}{: .link} - The specification for the OpenActive API transport

[ Modelling specification](https://www.openactive.io/modelling-opportunity-data/){:target="_blank"}{: .link} - The specification for the OpenActive API data fields

[ Beta Namespace](https://www.openactive.io/ns-beta/ /){:target="_blank"}{: .link} - Additional fields that are available for use but still under discussion

[ British Cycling Annotated Example](https://github.com/openactive/activation/issues/104){:target="_blank"}{: .link} - A "batteries included" example of a publishing endpoint

[ Opportunity data primer](https://www.openactive.io/opportunity-data-primer/){:target="_blank"}{: .link} - Examples of publishing

[ schema.org](http://schema.org/){:target="_blank"}{: .link} - Google's vocabulary on which the OpenActive specifications are based

<h3>Activities list</h3>
<p></p>
[ OpenActive activity list ](https://www.openactive.io/activity-list/){:target="_blank"}{: .link} - A canonical list of activities for reference in OpenActive data feeds

<h3>Open booking</h3>
<p></p>
[ Open Booking API 0.3 Draft ](https://docs.google.com/document/d/1QMj_w2tuOvxRfctu70JjSv1WgFKvNfU5URCmIB4sSu8/edit){:target="_blank"}{: .link} -  A draft version of the OpenActive booking specification
</div>
</article>


<!-- <article class="call_to_action title-row">
<h2 class="sub-heading-two">Resources</h2>

<div class="subgrid">
<div class="four">

### How-to guides

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

### eLearning
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
<div class="mask"></div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}

</article>
