---
title: How It Works
permalink: "/how-it-works/"
position: 2
is_main_navigation: true
layout: page
---

{::options parse_block_html="true" /}

<article class="note-wrap">
<div class="notes">

##### Page Notes ~ {{ page.title | escape }}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1b_AclHfydCEGU5ZfLu3i7kvUnGpLflFvBTg4oI46FP0){:target="_blank"}

</div>
</article>
<article class="note-wrap">
<div class="notes">


##### Section Notes ~ Hero Block
**Purpose**: This section is the first thing all users will see, we are showcasing a animated SVG Graphic to explain the main principles

**Functionality**: Possible interaction to trigger opening data, aiding developing a understanding of the concept.

**Design**:

**Copy-writing Notes**:

</div>
</article>



<article class="hero--simple">
<div class="two">
<h1>{{ page.title | escape }}</h1>
<p>OpenActive is an ambitious, community-led initiative for change across the sport and physical activity sector, which promotes the use of opportunity data to help people get active.</p>
<p> It is being coordinated by the Open Data Institute (ODI), an independent, non-profit, non-partisan organisation. Our goal is to make data on what, where and when physical activity sessions happen, openly available. This “opportunity data” includes details of a yoga class (“how much will it cost?”) through to badminton court availability (“where and when is a court available?”).</p>
[Read More]( {{ site.baseurl }}{% link our-mission-full.md %}){: .primary_cta}
</div>
<div class="two">

![Hero]({{ site.url }}/openactive/assets/images/icons-animation.gif)

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

<article class="title-row">
<h2 class="sub-heading-two">Why It Matters</h2>

<div class="two">

![placeholder]({{ site.url }}/openactive/assets/images/placeholder.png)

</div>
<div class="two">

Velit magni soluta distinctio enim. Eos repellat illum temporibus consequatur consequatur cum eos. Adipisci eum magnam ut. Molestiae qui voluptas consequuntur maiores nemo quam. Unde autem enim fugiat est beatae ex. Provident deleniti ea qui.
   + Magni error voluptatem ut quo natus.
   + Et rerum illum quidem perspiciatis molestiae.
   + Omnis cupiditate sapiente quis eius animi officiis vel.

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


<article markdown="0" class="opportunity-data title-row">
<h2 class="sub-heading-two">Opportunity Data Explained</h2>
<div class="two subgrid title-row">
<i class="two">{% include time.svg %}</i>
<i class="two">{% include cost.svg %}</i>
<i class="two">{% include website.svg %}</i>
<i class="two">{% include location.svg %}</i>
</div>
<div class="two">

<h4>What it is:</h4>
<p>Doloribus quaerat et quaerat qui molestias provident itaque. Aut repudiandae quam tenetur eius. Laudantium repellat unde et pariatur.</p>

<h4>What it isn't:</h4>
<p>Doloribus quaerat et quaerat qui molestias provident itaque. Aut repudiandae quam tenetur eius. Laudantium repellat unde et pariatur.</p>

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

<article>
<h2 class="sub-heading-two">What data is available</h2>
<div class="one">

+ A explanation of what Opportunity data is **already** available

</div>
</article>



<article class="note-wrap">
<div class="notes">

##### Section Notes ~ Case Studies Block
**Purpose**: This section is used to showcase organisations that are already involved in the initiative. A selection of featured case studies will be represented by their logo in a grid.

**Functionality**: The logos will act as a tabbing system to reveal content from the case study, this would consist of some fast facts about each case.

**Design**: The design of this section should be balanced and clearly represent to a user the functionality of the tabs, this would include clearly  active state on tabs to the open content area.

**Copy-writing Notes**:
</div>
</article>


<article class="case-studies">
<h2 class="sub-heading-two">Case<br> Studies</h2>
<nav class="subgrid">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-tab" data-tab="{{ forloop.index }}">

<!-- <img src="{{post.thumbnail_image | relative_url}}"> -->

</div>
{% endif %}
{% endfor %}
</nav>

<figure class="case-wrap">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-content" id="{{ forloop.index }}">
<h3>{{ post.title | escape }}</h3>
{{post.content}}
<a class="button-primary" href="{{ post.url | relative_url }}">Read More</a>

</div>
{% endif %}
{% endfor %}
</figure>


<aside class="case-study-info">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-content" data-id="{{ forloop.index }}">
<h5>DATA EXPOSED</h5>
<p>Date</p>
<p>Location</p>
<p>Disabled Access</p>
<p>{{ post.title | escape }}</p>

</div>
{% endif %}
{% endfor %}
</aside>

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
<h2 class="sub-heading-two">E-Learning</h2>
<div class="one">

+ Text to introduce the ways to learn more about the initiative
    + [How to's]( {{ site.baseurl }}{% link how-to.md %})  
    + [Discussions]( {{ site.baseurl }}{% link discussions.md %})  
    + [References]( {{ site.baseurl }}{% link references.md %})  
    + [Tutorials]( {{ site.baseurl }}{% link tutorials.md %})  

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

<article>
<h2 class="sub-heading-two">Getting Started</h2>
<div class="one call_to_action">

Text Content
Now you know how it works, let’s look at how you can make your data available or use a dataset for your own application.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}


</div>
</article>