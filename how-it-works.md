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



<article markdown="0" class="hero--sub">

<i class="line-graphic">{% include slim-line-graphic.svg %}</i>

<div>

<h1>How it works</h1>
<p>Velit magni soluta distinctio enim. Eos repellat illum temporibus consequatur consequatur cum eos.</p>


</div>
<figure>
<div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>

</article>

<article>
<div class="two">

OpenActive is a community-led initiative using open data to help people get active.
Our goal is to collect and share opportunity data on what, where, and when physical activity sessions happen, and to make this information openly available to everyone, transforming the way people discover, access, and take part in new activities. 

We believe that open opportunity data will revolutionise the sport and physical sector, helping providers to better deliver activities, attract engaged and active customers, and lead the nation in becoming more active together. 


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

<article>
<div class="two">

![placeholder]({{ site.url }}/openactive/assets/images/placeholder.png)

</div>
<div class="two">

### Why It Matters
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

<article>
<h2 class="sub-heading-two">Opportunity Data Explained</h2>
<div class="one">

Open opportunity data is about where and when sport and physical activities happen. This data can be made available for anyone to access, use, and share, helping consumers to discover and take part in new activities, and providers to more accurately tailor and grow their services.

By encouraging organisations to publish their data openly and to a commonly agreed standard, we are not only facilitating open sharing across individual websites, but building a connected, online community that’s free to grow and innovate in response to its consumers’ needs.

Opening up opportunity data across the sector will better connect providers and consumers, and allow sport and physical activity sessions across the country to be easily shared and accessed everywhere, from websites and apps that attract millions of users, to communities and services that engage local people. 


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
{% assign theImage = post.thumbnail_image %}
{% if post.is_featured %}
{% if post.member %}
{% assign theMember = site.members | where:"title", post.member  | first %}
{% assign theImage = theMember.thumbnail_image %}
{% endif %}

<div class="case-tab" data-tab="{{ forloop.index }}" markdown="0" >
<img src="{{ theImage  | relative_url}}"/>
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