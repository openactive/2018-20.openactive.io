---
title: E-learning
permalink: "/e-learning"
position: 16
is_main_navigation: false
thumbnail_image: "/uploads/sideplank.jpg"
strapline: The Open Data Institute are providing a free, online open data e-learning
  course, including a set of practical modules covering what open data is, its business
  benefits, how it can be published and prioritised to gain real value from it. Give
  it a try and send us your feedback!
layout: page-hero
---

{::options parse_block_html="true" /}


<article class="call_to_action">
<h2 class="sub-heading-two">OpenActive Lessons</h2>
<div class="subgrid--large-gutter">

<div class="two blue-gradient-bc list">
<div class="line-graphic"></div>

### Open data in the physical activity sector
Understanding open data is the first step to using it. This module looks at what open data is, and why it it is needed in the physical activity sector.
**In this module we&rsquo;ll explore the following:**

* What is open data?
* What is data?
* What makes data open?
* Why does the physical activity sector need open data?

<a class="button-primary" href="https://www.openactive.io/learn/#/id/581c76824d7b7e82691e408b" target="_blank" rel="noopener">Start Lesson</a>
</div>
<div class="two purple-gradient-bc list">
<div class="line-graphic"></div>

### Creating impact from open data
Physical activity providers can use open data to get more people involved, create better experiences for participants, and run their organisations more efficiently. This module looks at how the public sector, businesses, and individuals are creating impact with open data.
**In this module, we&rsquo;ll explore the following:**


* Opportunities for the public sector&nbsp;
* Innovation and growth in business
* Changing society

<a class="button-primary" href="https://www.openactive.io/learn/#/id/584928ca4d7b7e82691e4bd1" target="_blank" rel="noopener">Start Lesson</a>
</div>

</div>
<aside class="lesson-overview">
<div>

#### Suitable for:

* Everyone
* Beginners
* Business Owners

</div>
<div>

#### Questions:

* What is open data?
* What makes data open?
* Why it matters

</div>
</aside>


</article>

<article class="call_to_action title-row">
<h2 class="sub-heading-two">Intermediate Lessons</h2>
<div class="subgrid--large-gutter">

<div class="two blue-gradient-bc list">
<div class="line-graphic"></div>

### Prioritising data to publish openly
Prioritising which data to publish openly can be difficult. This module looks at how to prioritise which physical activity data to publish for the biggest impact.
**In this module we&rsquo;ll explore the following:**

* Where do I start?
* Why is 'opportunity data' a good place to start?
* What types of data are 'opportunity data'?


<a class="button-primary" href="https://www.openactive.io/learn/#/id/584928ce4d7b7e82691e4c28" target="_blank" rel="noopener">Start Lesson</a>
</div>

<div class="two purple-gradient-bc list">
<div class="line-graphic"></div>

### How to make your data useful
Publishing open physical activity data can bring you a wide range of benefits. But for you and your users to enjoy those benefits, your data needs to be of a good enough quality to use. This module looks at what quality data is and provides some simple checks to minimise problems.
**In this module we&rsquo;ll explore the following:**

* What do we mean by 'open data quality'?</li>
* Where can I get help to make sure my data is good quality?</li>
* What are the badges that indicate quality for data?</li>
* How can I quickly and easily improve data&nbsp;quality?</li>

<a class="button-primary" href="https://www.openactive.io/learn/#/id/584928f24d7b7e82691e4cf1" target="_blank" rel="noopener">Start lesson</a>
</div>

</div>
<aside class="lesson-overview">
<div>

#### Suitable for:

* Beginners
* Business Owners

</div>
<div>

#### Questions:

* Where do I start?
* Why is 'opportunity data' a good place to start?
* Where can I get help to make sure my data is good quality?

</div>
</aside>

</article>


<article class="call_to_action title-row">
<h2 class="sub-heading-two">Further Lessons</h2>
<div class="subgrid--large-gutter">

<div class="two purple-gradient-bc list">
<div class="line-graphic"></div>

### The potential futures of physical activity data
In previous modules we've looked at what open means. In this module we will explore different degrees of openness, what the future looks like, and the journey to get there.
**In this module we&rsquo;ll explore the following:**

* Open, shared and closed data
* Why we need three data futures
* Choosing a future for physical activity data
* The process of choosing a data future
* Challenges of achieving an open future

<a class="button-primary" href="https://www.openactive.io/learn/#/id/58d17f03d084d5167a04ba01" target="_blank" rel="noopener">Start Lesson</a>

</div>
<div class="two blue-gradient-bc list">
<div class="line-graphic"></div>

### Business in an open data-led physical activity sector
One of the big questions that comes with opening up data is 'what will happen to those operating in the sector and how will their businesses be affected?'. This module looks at the current market, and the impact an open future will have on businesses within the physical activity sector.
**In this module we&rsquo;ll explore the following:**

* The value of an open ecosystem
* The value of open for&nbsp;businesses
* The open ecosystem in action
* Taking action
* The future

<a class="button-primary" href="https://www.openactive.io/learn/#/id/594a4e5ad084d5167a04ffb6" target="_blank" rel="noopener">Start Lesson</a>

</div>
</div>
<aside class="lesson-overview">
<div>

##### Suitable for:

* Developers
* Business Owners


</div>
<div>

#### Questions:

* Where do I start?
* Why is 'opportunity data' a good place to start?
* Where can I get help to make sure my data is good quality?


</div>
</aside>


</article>

<!--  ---------------->
<!-- ACCELERATOR BLOCKS -->
<!--  ---------------->
<article class="call_to_action--full-width global">
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