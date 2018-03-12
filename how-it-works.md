---
title: How It Works
permalink: "/how-it-works/"
position: 2
is_main_navigation: true
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
<div class="one">

# {{ page.title | escape }}

Open data is a tool that can help activity providers increase the reach and visibility of the opportunities they run.

It can also help data users create new apps and services that can help people get active.

</div>

</article>


<article>
<div class="one">



{% include ecosystem.svg %}

</div>
</article>


<!--  ---------------->
<!-- WHAT IS OPPORTUNITY DATA -->
<!--  ---------------->
<article class="title-row what-data">
<h2 class="sub-heading-two">What's in the Data?</h2>

<div class="wrapper types">

<div class="types-inner">
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Events

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Sessions

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Facilities

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Leagues and Ringers

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Courses

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Online Classes

</div>
</div>


</div>


<div class="wrapper fields">

<div class="properties">

##### Included

<div class="properties-inner">
<div>

![time]({{ site.baseurl }}/assets/images/icons/time.svg)
###### Time

</div>
<div>

![Price]({{ site.baseurl }}/assets/images/icons/price.svg)
###### Prices

</div>
<div>

![Locations]({{ site.baseurl }}/assets/images/icons/location.svg)
###### Locations

</div>
<div>

![Availability]({{ site.baseurl }}/assets/images/icons/availability.svg)
###### Availability

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/icons/descriptions.svg)
###### Descriptions

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/icons/images.svg)
###### Images

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/icons/gender.svg)
###### Gender Restriction

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/icons/age.svg)
###### Age Range

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/icons/difficulty.svg)
###### Difficulty Level

</div>
</div>


</div>


<div class="border">
</div>
<div class="not-included">

##### Not Included

<div class="not-included-inner">
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Partcipation and attendance data

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Commercially Sensitive Data

</div>
<div>

![what_open_data.png]({{ site.baseurl }}/assets/images/placeholder.png)
###### Customer Data

</div>

</div>
</div>
</div>
</article>



<!--  ---------------->
<!-- TABS -->
<!--  ---------------->
{% include tabs.html %}

<!--  ---------------->
<!-- WHAT ARE THE BENEFITS -->
<!--  ---------------->
<article class="title-row">
<h2 class="sub-heading-two">What are the benefits?</h2>
<div class="one subgrid">
<div class="three ">


#### Sport and Physical Activity Providers

* With open data publishing, your services and events can be shared everywhere, from high-traffic apps to community-driven pages.
* Improve data skills and understanding within your organisation and harness technology to benefit your business.
* Drive innovation, and collaborate with OpenActive to revolutionise the sector.

</div>
<div class="three">

#### Data Users and Developers

* Harness open and accessible data from across the sport and physical sector.
* Use data to help develop new products and enhance existing services to get people more active.
* Be at the cutting edge of shaping consistent data standards and growing engagement with data publishers.

</div>

<div class="three">

#### Influential Organisations

* Build engagement in sport and physical activities by improving the reach and visibility of services nationwide.
* Support new members of OpenActive by showing them how publishing open data can help them improve and grow their activities.
* Improve data skills and understanding within your organisation and harness technology to benefit your business.
* Provide members with the opportunity to join our community and shape the initiative.


</div>
</div>
</article>

<!--  ---------------->
<!-- CASE STUDIES BLOCK -->
<!--  ---------------->
<article class="title-row">
{% include case-study.html %}
</article>

<!--  ---------------->
<!-- GETTING STARTED TO ACTION -->
<!--  ---------------->
<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Where now?</h2>
<div class="one">

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
